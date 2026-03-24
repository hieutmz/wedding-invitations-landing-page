"use client";

import { useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BoltIcon from "@mui/icons-material/Bolt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapIcon from "@mui/icons-material/Map";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { BENEFITS } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  AutoAwesome: AutoAwesomeIcon, MusicNote: MusicNoteIcon, Bolt: BoltIcon, Favorite: FavoriteIcon,
  Map: MapIcon, CheckCircle: CheckCircleIcon, SupportAgent: SupportAgentIcon, Verified: VerifiedIcon,
};

const gradients = [
  "from-rose-400 to-rose-500", "from-blush-400 to-rose-400", "from-gold-400 to-gold-500", "from-rose-500 to-blush-500",
  "from-rose-300 to-blush-400", "from-gold-300 to-gold-500", "from-blush-300 to-rose-500", "from-rose-400 to-gold-400",
];

export default function WhyChooseSection() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -304 : 304, behavior: "smooth" });
  };

  return (
    <section id="why-choose" className="py-20 bg-white relative overflow-hidden">
      <Container maxWidth="lg">
        <SectionHeading title={t("whyChoose.title")} subtitle={t("whyChoose.subtitle")} />

        <div className="relative group/slider">
          <button onClick={() => scroll("left")} aria-label="Prev" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-rose-200 shadow-[0_4px_20px_rgba(232,99,111,0.15)] flex items-center justify-center text-rose-400 hover:text-white hover:bg-rose-500 hover:border-rose-500 hover:shadow-[0_6px_24px_rgba(232,99,111,0.3)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 focus:opacity-100">
            <ChevronLeftIcon />
          </button>
          <button onClick={() => scroll("right")} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-rose-200 shadow-[0_4px_20px_rgba(232,99,111,0.15)] flex items-center justify-center text-rose-400 hover:text-white hover:bg-rose-500 hover:border-rose-500 hover:shadow-[0_6px_24px_rgba(232,99,111,0.3)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 focus:opacity-100">
            <ChevronRightIcon />
          </button>
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
              {BENEFITS.map((item, index) => {
                const IconComponent = iconMap[item.icon] || AutoAwesomeIcon;
                return (
                  <motion.div key={item.icon + index} variants={fadeInUp} className="flex-shrink-0 snap-start w-[260px] sm:w-[280px]">
                    <Card elevation={0} className="h-full text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardContent className="p-6 flex flex-col items-center">
                        <div className={`w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent sx={{ fontSize: 30, color: "#FFFFFF" }} />
                        </div>
                        <Typography variant="h6" className="font-bold mb-2 text-gray-900 text-base">{t(`benefit.${index}.title`)}</Typography>
                        <Typography variant="body2" className="text-gray-600">{t(`benefit.${index}.desc`)}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-1.5 mt-6">
          {BENEFITS.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-200 ${index < 4 ? "bg-rose-400" : "bg-gray-200"}`} />
          ))}
        </div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-cream-50 via-blush-50 to-cream-50 rounded-2xl p-8 border border-rose-100">
            <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed italic">{t("whyChoose.closing")}</Typography>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
