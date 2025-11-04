import { motion } from "framer-motion";
import { Instagram, Youtube, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ language }) {
  const t = (id, en) => (language === "Id" ? id : en);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#F5C58B] text-[#2B1F18] py-10 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === Logo & Deskripsi === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer flex flex-col items-center md:items-start"
          >
            <img
              src="/public/logo.png"
              alt="Logo Museum"
              className="w-35 h-35 object-contain"
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-xs mt-2">
            {t(
              "Museum Negeri Sumatera Utara merupakan tempat bersejarah yang sudah lama berdiri sejak penjajahan Belanda.",
              "The North Sumatra State Museum is a historic place established since the Dutch colonial era."
            )}
          </p>
        </motion.div>

        {/* === Quick Links === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h3 className="font-bold text-lg mb-3 underline decoration-[#2B1F18]/40">
            {t("Tautan Cepat", "Quick Links")}
          </h3>
          <ul className="space-y-2">
            {[
              { id: "Beranda", en: "Home", path: "/" },
              { id: "Profil", en: "Profile", path: "/profil" },
              { id: "Informasi", en: "Information", path: "/informasi" },
              { id: "Koleksi", en: "Collections", path: "/koleksi" },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6, color: "#7B4F1D" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={link.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {language === "Id" ? link.id : link.en}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* === Contact & Follow Us === */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h3 className="font-bold text-lg mb-3 underline decoration-[#2B1F18]/40">
            {t("Kontak", "Contact")}
          </h3>
          <p className="text-sm">
            {t("Alamat", "Address")}: Jl. HM. Joni No.51, Teladan Bar., Kec. Medan Kota, Kota Medan, Sumatera Utara 20217
          </p>
          <p className="text-sm">{t("Telepon", "Phone")}: -</p>
          <p className="text-sm mb-3">{t("Email", "Email")}: -</p>

          <h4 className="font-bold text-lg mb-2">{t("Ikuti Kami", "Follow Us")}</h4>
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { Icon: Instagram, label: "Instagram", link: "https://www.instagram.com/museumsumut.official" },
              { Icon: Music2, label: "TikTok", link: "https://www.tiktok.com/@museumsumut.official" },
              { Icon: Youtube, label: "YouTube", link: "http://www.youtube.com/@museumsumut" },
            ].map(({ Icon, label, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-[#7B4F1D] transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center text-sm mt-8 border-t border-[#d9a76b] pt-4"
      >
        © {new Date().getFullYear()} Museum Negeri Sumatera Utara.{" "}
        {t("Hak cipta dilindungi.", "All rights reserved.")}
      </motion.div>
    </motion.footer>
  );
}
