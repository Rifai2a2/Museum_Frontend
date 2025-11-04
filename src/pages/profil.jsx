import { motion } from "framer-motion";
import Footer from "../components/footer";

export default function Profil({ language }) {
  return (
    <div className="bg-[#403529] text-white min-h-screen flex flex-col overflow-x-hidden">
      {/* === HEADER IMAGE === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        <img
          src="/museum.jpg"
          alt="Museum Negeri Sumatera Utara"
          className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg text-center leading-snug"
          >
            {language === "Id"
              ? "Museum Negeri Provinsi Sumatera Utara"
              : "North Sumatra Provincial Museum"}
          </motion.h1>
        </div>
      </motion.div>

      {/* === LATAR BELAKANG === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-grow px-6 sm:px-10 md:px-20 py-10 bg-[#403529] text-white"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl text-[#FFCD96] mb-4 text-center md:text-left"
        >
          {language === "Id" ? "Latar Belakang" : "Background"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-relaxed text-justify text-gray-300 mb-8 whitespace-pre-line text-sm sm:text-base"
        >
          {language === "Id"
            ? `Unit Pelaksana Teknis (UPT) Museum Negeri Provinsi Sumatera Utara adalah lembaga di bawah naungan Dinas Kebudayaan, Pariwisata dan Ekonomi Kreatif Provinsi Sumatera Utara yang bertugas mengelola dan mengembangkan museum sebagai pusat pendidikan, penelitian, dan pelestarian warisan budaya. Museum ini berfungsi sebagai tempat untuk menyimpan, merawat, memamerkan, dan mengkomunikasikan berbagai koleksi yang mencerminkan kekayaan sejarah, budaya dan seni Provinsi Sumatera Utara.

Museum ini diresmikan pada tanggal 19 April 1982 oleh Menteri Pendidikan dan Kebudayaan, yaitu Dr. Daoed Joesoef. Namun, peletakan koleksi pertama berupa sepasang Makara dari Biara Sitopayan dilakukan pada 1954 oleh Presiden Republik Indonesia pertama, yaitu Ir. Soekarno. Sejak saat itu museum ini dikenal dengan nama Gedung Arca.

Kompleks museum berdiri di atas lahan seluas 10.468 meter persegi. Di atasnya terdapat bangunan induk dua lantai yang difungsikan sebagai ruang pameran tetap, ruang pameran temporer merangkap aula, mini theater, ruang kepala museum, ruang tata usaha, ruang Seksi Bimbingan, Edukasi dan Publikasi, serta penyimpanan koleksi. Selain itu ada pula bangunan pendukung seperti ruang tenaga teknis, ruang keamanan, perpustakaan, dan musholla.

Berdasarkan koleksi yang dimilikinya, Museum Negeri Provinsi Sumatera Utara dikategorikan sebagai museum umum. Sebagian besar koleksinya berupa benda-benda peninggalan sejarah budaya Sumatera Utara, seperti benda-benda peninggalan Prasejarah, Hindu-Buddha, Islam, Kolonial, serta warisan budaya beragam etnis yang terdapat di Sumatera Utara. Hingga saat ini, Museum Negeri Provinsi Sumatera Utara menyimpan kurang lebih 7.000 koleksi.`
            : `The Technical Implementation Unit (UPT) of the North Sumatra Provincial Museum is an institution under the Department of Culture, Tourism, and Creative Economy of North Sumatra Province. It is responsible for managing and developing the museum as a center for education, research, and preservation of cultural heritage. The museum functions as a place to store, preserve, exhibit, and communicate various collections that reflect the historical, cultural, and artistic wealth of North Sumatra Province.

The museum was officially inaugurated on April 19, 1982, by the Minister of Education and Culture, Dr. Daoed Joesoef. However, the placement of its first collection, a pair of Makara from Biara Sitopayan, was carried out in 1954 by the first President of the Republic of Indonesia, Ir. Soekarno. Since then, the museum has been popularly known as the “Gedung Arca” (Arca Building).

The museum complex occupies an area of 10,468 square meters, featuring a two-story main building that serves as the permanent exhibition hall, temporary exhibition hall (also functioning as an auditorium), mini theater, head office, administration office, education and publication rooms, as well as collection storage. There are also supporting facilities such as staff rooms, a security post, a library, and a prayer room.

Based on its collections, the North Sumatra Provincial Museum is classified as a general museum. Most of its collections consist of historical and cultural artifacts from North Sumatra, including relics from the Prehistoric, Hindu-Buddhist, Islamic, and Colonial periods, as well as the cultural heritage of the various ethnic groups found in North Sumatra. To this day, the museum holds approximately 7,000 collections.`}
        </motion.p>
      </motion.section>

      {/* === STRUKTUR ORGANISASI === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-10 md:px-20 pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl text-[#FFCD96] mb-4 text-center md:text-left"
        >
          {language === "Id"
            ? "Struktur Organisasi"
            : "Organizational Structure"}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/organisasi.png"
            alt="Struktur Organisasi"
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg shadow-lg object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-relaxed text-justify text-gray-100 whitespace-pre-line text-sm sm:text-base"
        >
          {language === "Id"
            ? `Struktur Organisasi Dinas Kebudayaan, Pariwisata dan Ekonomi Kreatif Provinsi Sumatera Utara disusun berdasarkan Peraturan Gubernur Sumatera Utara No. 9 Tahun 2023 tentang Susunan Organisasi Perangkat Daerah. Susunan Struktur Organisasi Dinas Kebudayaan, Pariwisata dan Ekonomi Kreatif Provinsi Sumatera Utara terdiri dari:
1. Kepala Dinas, dibantu:
2. Sekretariat;
3. Bidang Pengembangan Kebudayaan;
4. Bidang Pelestarian dan Pengelolaan Cagar Budaya;
5. Bidang Pemasaran Pariwisata;
6. Bidang Pengembangan Destinasi dan Ekonomi Kreatif;
7. UPTD Taman Budaya Tipe A;
8. UPTD Museum Negeri Tipe A;
9. Kelompok Jabatan Fungsional.`
            : `The organizational structure of the Department of Culture, Tourism, and Creative Economy of North Sumatra Province is arranged based on the Governor Regulation of North Sumatra No. 9 of 2023 concerning the Organizational Structure of Regional Apparatuses. The structure consists of:
1. Head of Department, assisted by:
2. Secretariat;
3. Division of Cultural Development;
4. Division of Cultural Heritage Preservation and Management;
5. Division of Tourism Marketing;
6. Division of Destination and Creative Economy Development;
7. Type A Cultural Park UPTD;
8. Type A State Museum UPTD;
9. Functional Position Group.`}
        </motion.p>
      </motion.section>
    </div>
  );
}
