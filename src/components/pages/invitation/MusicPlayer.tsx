"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  src?: string;
  autoPlayOnOpen?: boolean;
}

export default function MusicPlayer({
  src = "/music/wedding.mp3",
  autoPlayOnOpen = false,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setIsReady(true));
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", () => setIsReady(true));
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [src]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  useEffect(() => {
    if (autoPlayOnOpen && audioRef.current && isReady) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [autoPlayOnOpen, isReady]);

  return (
    <motion.button
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-lg sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
      style={{
        background: "linear-gradient(135deg, #6B9E85, #5A8A73)",
        boxShadow: "0 4px 20px rgba(107, 158, 133, 0.3)",
      }}
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
    >
      {/* Disc visual */}
      <div
        className={`absolute inset-1 rounded-full border border-white/20 ${isPlaying ? "disc-spinning" : ""}`}
        style={{
          background: "conic-gradient(from 0deg, #5A8A73, #8BB8A4, #5A8A73, #8BB8A4, #5A8A73)",
        }}
      />

      {/* Center dot */}
      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              className="flex gap-[2px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="h-2.5 w-[2px] rounded-full bg-[#5A8A73]" />
              <div className="h-2.5 w-[2px] rounded-full bg-[#5A8A73]" />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="#5A8A73">
                <path d="M0 0L10 6L0 12V0Z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pulse ring when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border border-[#6B9E85]"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
