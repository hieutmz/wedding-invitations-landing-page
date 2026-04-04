"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import ScrollProgress from "./ScrollProgress";
import InvitationHero from "./InvitationHero";
import WelcomeSection from "./WelcomeSection";
import StorySection from "./StorySection";
import CoupleSection from "./CoupleSection";
import EventSection from "./EventSection";
import CountdownSection from "./CountdownSection";
import GallerySection from "./GallerySection";
import RSVPSection from "./RSVPSection";
import EndingSection from "./EndingSection";
import MusicPlayer from "./MusicPlayer";
import SectionDivider from "./SectionDivider";

export default function InvitationPage() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("name") || undefined;

  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    // Smooth scroll to content after opening
    setTimeout(() => {
      document.getElementById("invitation-content")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="invitation-page min-h-screen">
      {/* Loading screen */}
      <LoadingScreen isVisible={isLoading} />

      {/* Scroll progress - only show after opened */}
      {isOpened && <ScrollProgress />}

      {/* Music player - only show after opened */}
      {isOpened && <MusicPlayer autoPlayOnOpen />}

      {/* Hero section - always visible after loading */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {!isOpened && (
              <motion.div
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <InvitationHero onOpen={handleOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Invitation content - revealed after opening */}
      <AnimatePresence>
        {isOpened && (
          <motion.main
            id="invitation-content"
            className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <WelcomeSection guestName={guestName} />
            <SectionDivider variant="ornament" />

            <StorySection />
            <SectionDivider variant="heart" />

            <CoupleSection />
            <SectionDivider variant="ornament" />

            <EventSection />
            <SectionDivider variant="line" />

            <CountdownSection />
            <SectionDivider variant="heart" />

            <GallerySection />
            <SectionDivider variant="ornament" />

            <RSVPSection />
            <SectionDivider variant="heart" />

            <EndingSection />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
