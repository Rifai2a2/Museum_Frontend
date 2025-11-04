import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero({ language }) {
  const images = ["/museum.jpg", "/koleksi.jpg", "/museum.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // === Text bilingual ===
  const title =
    language === "Id"
      ? "Jelajahi Museum Sumatera Utara"
      : "Explore the North Sumatra Museum";

  const description =
    language === "Id"
      ? "Menyimpan ribuan artefak dan sejarah kebudayaan Nusantara."
      : "Home to thousands of artifacts and the rich cultural history of the archipelago.";

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[550px] rounded-[3rem] overflow-hidden shadow-lg">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Museum Slide ${index + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Overlay + Text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10">
        <motion.h1
          key={current + language} // biar animasi berubah tiap ganti slide atau bahasa
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-wide drop-shadow-md"
        >
          {title}
        </motion.h1>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-200 max-w-md">
          {description}
        </p>
      </div>

      {/* Dots Navigasi */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {images.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              i === current ? "bg-[#FFCD96]" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
