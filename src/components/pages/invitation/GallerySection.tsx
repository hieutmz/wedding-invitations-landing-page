"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./SectionDivider";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Khoảnh khắc lãng mạn",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Nụ cười hạnh phúc",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
    alt: "Nhẫn cưới",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    alt: "Bên nhau trọn đời",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    alt: "Trang trí tiệc cưới",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1549416878-b9ca73e4a31d?w=800&q=80",
    alt: "Pre-wedding",
    span: "sm:col-span-2",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            Our moments
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Khoảnh Khắc Đẹp
          </h2>
          <SectionDivider variant="heart" />
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${image.span}`}
              style={{ aspectRatio: image.span.includes("row-span-2") ? "1" : "4/3" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(to top, rgba(61,50,41,0.5), transparent)" }}
              />
              <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-medium text-white sm:text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay fixed inset-0 z-[90] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative mx-4 max-h-[85vh] max-w-4xl overflow-hidden rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src.replace("w=600", "w=1200").replace("w=800", "w=1200")}
                alt={galleryImages[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />

              {/* Close button */}
              <button
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                onClick={closeLightbox}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.207 4.793a1 1 0 010 1.414L9.414 9l2.793 2.793a1 1 0 01-1.414 1.414L8 10.414l-2.793 2.793a1 1 0 01-1.414-1.414L6.586 9 3.793 6.207a1 1 0 011.414-1.414L8 7.586l2.793-2.793a1 1 0 011.414 0z" />
                </svg>
              </button>

              {/* Navigation arrows */}
              <button
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                </svg>
              </button>
              <button
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
