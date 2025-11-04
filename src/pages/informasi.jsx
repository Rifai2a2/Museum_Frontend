import { motion } from "framer-motion";
import Footer from "../components/footer";

export default function Informasi({ language }) {
  return (
    <div className="bg-[#403529] text-white min-h-screen flex flex-col">
      <div className="flex-grow px-6 md:px-16 py-22">

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#FFCD96] mb-2"
          >
            {language === "Id" ? "Prosedur Kunjungan" : "Visit Procedure"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#CBBBA0] mb-8"
          >
            {language === "Id"
              ? "Panduan langkah demi langkah untuk kunjungan Anda ke museum"
              : "A step-by-step guide to help you plan your museum visit."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#5A4634] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl text-[#FFCD96] mb-3">
                {language === "Id" ? "Aturan Kunjungan" : "Visitor Guidelines"}
              </h2>
              <p className="text-sm text-[#CBBBA0] font-medium mb-2">
                {language === "Id" ? "Yang diperbolehkan:" : "Permitted:"}
              </p>
              <ul className="list-decimal list-inside text-gray-100 text-sm mb-4 space-y-1">
                <li>
                  {language === "Id"
                    ? "Mengambil foto tanpa menggunakan flash untuk keperluan pribadi."
                    : "You may take photographs without flash for personal use."}
                </li>
                <li>
                  {language === "Id"
                    ? "Menggunakan audio guide dengan sopan dan menghormati pengunjung lain."
                    : "Please use audio guides considerately and respect other visitors."}
                </li>
                <li>
                  {language === "Id"
                    ? "Segera beri tahu petugas museum jika terjadi keadaan darurat."
                    : "Inform museum staff immediately in case of any emergency."}
                </li>
              </ul>

              <p className="text-sm text-[#CBBBA0] font-medium mb-2">
                {language === "Id" ? "Yang dilarang:" : "Not permitted:"}
              </p>
              <ul className="list-decimal list-inside text-gray-100 text-sm space-y-1">
                <li>
                  {language === "Id"
                    ? "Menyentuh artefak tanpa izin petugas."
                    : "Do not touch artifacts unless explicitly permitted by staff."}
                </li>
                <li>
                  {language === "Id"
                    ? "Membawa makanan dan minuman ke ruang pamer."
                    : "Bringing food or drinks into exhibition areas is not allowed."}
                </li>
                <li>
                  {language === "Id"
                    ? "Merokok di dalam museum."
                    : "Smoking is strictly prohibited inside the museum."}
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#5A4634] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl text-[#FFCD96] mb-3">
                {language === "Id" ? "Prosedur Kunjungan" : "Visiting Procedure"}
              </h2>
              <ol className="list-decimal list-inside text-gray-100 text-sm space-y-2">
                <li>
                  {language === "Id"
                    ? "Registrasi di loket: Daftarkan diri dan beli tiket bila diperlukan."
                    : "Register at the ticket counter: sign in and purchase an admission ticket if required."}
                </li>
                <li>
                  {language === "Id"
                    ? "Pemeriksaan keamanan: Tas dan barang bawaan dapat diperiksa oleh petugas."
                    : "Security check: bags and personal belongings may be inspected by staff."}
                </li>
                <li>
                  {language === "Id"
                    ? "Orientasi singkat: Dapatkan informasi singkat dari pemandu atau petugas."
                    : "Brief orientation: receive a short introduction from a guide or staff member."}
                </li>
                <li>
                  {language === "Id"
                    ? "Mulai tur: Jelajahi koleksi sesuai minat Anda dan ikuti rambu petunjuk."
                    : "Begin your tour: explore the collections at your own pace and follow displayed signage."}
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#5A4634] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl text-[#FFCD96] mb-3">
                {language === "Id" ? "Fasilitas Museum" : "Museum Facilities"}
              </h2>
              <p className="text-sm text-[#CBBBA0] font-medium mb-1">
                {language === "Id" ? "Fasilitas Umum" : "General Facilities"}
              </p>
              <ul className="list-disc list-inside text-gray-100 text-sm mb-4 space-y-1">
                <li>{language === "Id" ? "Toilet" : "Restrooms"}</li>
                <li>{language === "Id" ? "Musholla" : "Prayer Room"}</li>
                <li>{language === "Id" ? "Parkir Gratis" : "Free Parking"}</li>
                <li>{language === "Id" ? "Wi-Fi" : "Wi-Fi"}</li>
                <li>{language === "Id" ? "AC" : "Air Conditioning"}</li>
              </ul>
              <p className="text-sm text-[#CBBBA0] font-medium mb-1">
                {language === "Id" ? "Layanan Khusus" : "Special Services"}
              </p>
              <ul className="list-disc list-inside text-gray-100 text-sm space-y-1">
                <li>{language === "Id" ? "Audio Guide" : "Audio Guide"}</li>
                <li>{language === "Id" ? "Pemandu Wisata" : "Guided Tours"}</li>
                <li>{language === "Id" ? "Toko Souvenir" : "Souvenir Store"}</li>
                <li>{language === "Id" ? "Kafetaria" : "Cafeteria"}</li>
                <li>{language === "Id" ? "Ruang Edukasi" : "Education Room"}</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#FFCD96] mb-2"
          >
            {language === "Id" ? "Denah Museum" : "Museum Map"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-[#CBBBA0] mb-6"
          >
            {language === "Id"
              ? "Tata letak ruangan museum berdasarkan lantai"
              : "Museum room layout by floor"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-[#FFCD96] mb-3"
            >
              {language === "Id" ? "Lantai 1" : "Floor 1"}
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                src="/public/lantai1.jpeg"
                alt="Denah Lantai 1"
                className="w-full rounded-lg shadow-lg border border-[#CBBBA0]"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="space-y-3 max-h-[600px] overflow-y-auto pr-2 text-sm"
              >
                {[
                  "Ruang Staff Administrasi|Administrative Staff Room",
                  "Ruang Kepala Museum|Museum Head Office",
                  "Pintu Keluar, Toko Souvenir, Kafe|Exit, Souvenir Shop, Cafe",
                  "Toilet|Toilet",
                  "Lobi Utama|Main Lobby",
                  "Ruang Staf|Staff Room",
                  "Ruang Audio Visual|Audio Visual Room",
                  "Ruang Bimbingan dan Edukasi|Guidance and Education Room",
                  "Ruang Prasejarah|Prehistoric Room",
                  "Ruang Gubernur|Governor Room",
                  "Ruang Religi Kuno|Ancient Religion Room",
                  "Ruang Hindu-Budha|Hindu-Buddhist Room",
                  "Taman Purbakala|Archaeological Garden",
                  "Ruang Sejarah Perjuangan|Independence History Room",
                  "Ruang Islam|Islamic Room",
                  "Ruang Kolonial|Colonial Room",
                  "Toilet|Toilet",
                  "Ruang Penyimpanan|Storage Room",
                  "Toilet|Toilet",
                  "Ruang Pers|Press Room",
                ].map((item, index) => {
                  const [indo, eng] = item.split("|");
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.02 * index }}
                      className="bg-[#5A4634] p-3 rounded-lg shadow flex items-start gap-2"
                    >
                      <strong className="text-[#FFCD96]">{index + 1}.</strong>
                      <span>{language === "Id" ? indo : eng}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-[#FFCD96] mb-3"
            >
              {language === "Id" ? "Lantai 2" : "Floor 2"}
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                src="/public/lantai2.jpeg"
                alt="Denah Lantai 2"
                className="w-full rounded-lg shadow-lg border border-[#CBBBA0]"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="space-y-3 max-h-[450px] overflow-y-auto pr-2 text-sm"
              >
                {[
                  "Teras Kiri|Left Terrace",
                  "Teras Kanan|Right Terrace",
                  "Ruang Pameran Temporer|Temporary Exhibition Room",
                  "Ruang Kesenian Tradisional|Traditional Art Room",
                  "Ruang Etnografi|Ethnography Room",
                  "Ruang Koleksi Khusus|Special Collection Room",
                ].map((item, idx) => {
                  const [indo, eng] = item.split("|");
                  const number = 21 + idx;
                  return (
                    <motion.div
                      key={number}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.02 * idx }}
                      className="bg-[#5A4634] p-3 rounded-lg shadow flex items-start gap-2"
                    >
                      <strong className="text-[#FFCD96]">{number}.</strong>
                      <span>{language === "Id" ? indo : eng}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-[#FFCD96] mb-2"
          >
            {language === "Id" ? "Jam Operasional" : "Opening Hours"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#CBBBA0] mb-6"
          >
            {language === "Id" ? "Waktu kunjungan museum" : "Museum visiting hours"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-[#5A4634] p-6 rounded-lg shadow-lg max-w-xl"
          >
            <div className="flex justify-between mb-2">
              <p>{language === "Id" ? "Selasa - Jumat" : "Tuesday - Friday"}</p>
              <p>09.00 - 16.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{language === "Id" ? "Sabtu - Minggu" : "Saturday - Sunday"}</p>
              <p>09.00 - 15.00</p>
            </div>
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
              {language === "Id" ? "Buka" : "Open"}
            </span>

            <div className="mt-6 border-t border-gray-500 pt-4">
              <p>{language === "Id" ? "Senin / Hari Libur Nasional" : "Monday / National Public Holidays"}</p>
              <p className="text-sm text-gray-300">
                {language === "Id" ? "Tutup untuk pemeliharaan" : "Closed for maintenance"}
              </p>
              <span className="bg-red-600 text-white px-3 py-1 mt-2 inline-block rounded-md text-sm">
                {language === "Id" ? "Tutup" : "Closed"}
              </span>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#FFCD96] mb-2"
          >
            {language === "Id" ? "Tiket Masuk" : "Admission Fees"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-[#CBBBA0] mb-4"
          >
            {language === "Id"
              ? "Daftar harga tiket yang tersedia di museum"
              : "List of admission fees available at the museum"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="overflow-x-auto"
          >
            <table className="min-w-full border border-[#CBBBA0] text-sm">
              <thead className="bg-[#5A4634] text-[#FFCD96]">
                <tr>
                  <th className="border border-[#CBBBA0] px-4 py-2 text-left">
                    {language === "Id" ? "Kategori" : "Category"}
                  </th>
                  <th className="border border-[#CBBBA0] px-4 py-2 text-left">
                    {language === "Id" ? "Tipe" : "Type"}
                  </th>
                  <th className="border border-[#CBBBA0] px-4 py-2 text-left">
                    {language === "Id" ? "Harga" : "Price"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Pelajar TK/SD/SLTP" : "Kindergarten / Primary / Junior High Students"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Perorangan" : "Individual"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">Rp. 3.000</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Pelajar TK/SD/SLTP" : "Kindergarten / Primary / Junior High Students"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Kelompok (Min. 20 Orang)" : "Group (Min. 20 people)"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">Rp. 2.000</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Dewasa / Pelajar SLTA / SMK" : "Adults / Senior High / Vocational Students"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Perorangan" : "Individual"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">Rp. 5.000</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                >
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Dewasa / Pelajar SLTA / SMK" : "Adults / Senior High / Vocational Students"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Kelompok (Min. 20 Orang)" : "Group (Min. 20 people)"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">Rp. 3.000</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                >
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Wisatawan Asing (Foreign)" : "Foreign Visitors"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">{language === "Id" ? "Perorangan" : "Individual"}</td>
                  <td className="border border-[#CBBBA0] px-4 py-2">Rp. 30.000</td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#FFCD96] mb-2"
          >
            {language === "Id" ? "Informasi Lokasi" : "Location Information"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-[#CBBBA0] mb-6"
          >
            {language === "Id" ? "Informasi terkait tentang museum" : "Practical information about the museum"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.iframe
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              src="https://www.google.com/maps?q=Museum+Negeri+Sumatera+Utara&output=embed"
              className="w-full h-64 rounded-lg border border-[#CBBBA0]"
              allowFullScreen
              loading="lazy"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="bg-[#5A4634] p-6 rounded-lg shadow-md text-sm"
            >
              <p>
                <strong>{language === "Id" ? "Alamat:" : "Address:"}</strong> Jl. HM. Joni No.51, Teladan Barat, Kecamatan Medan Kota, Kota Medan, Sumatera Utara 20216
              </p>
              <p className="mt-2">
                <strong>{language === "Id" ? "Media Sosial:" : "Social Media:"}</strong><br />
                Instagram: <a href="https://www.instagram.com/museumsumut.official" className="text-[#F5D393] hover:underline">@museumsumut.official</a><br />
                TikTok: <a href="https://www.tiktok.com/@museumsumut.official" className="text-[#F5D393] hover:underline">@museumsumut.official</a><br />
                Youtube: <a href="http://www.youtube.com/@museumsumut" className="text-[#F5D393] hover:underline">@museumsumut</a>
              </p>

              <p className="mt-4">
                <strong>{language === "Id" ? "Jam Operasional:" : "Opening Hours:"}</strong><br />
                {language === "Id" ? "Selasa - Jumat : 09.00 - 16.00" : "Tuesday - Friday : 09.00 - 16.00"}<br />
                {language === "Id" ? "Sabtu - Minggu : 09.00 - 15.00" : "Saturday - Sunday : 09.00 - 15.00"}<br />
                {language === "Id" ? "Senin / Hari Libur Nasional : Tutup untuk pemeliharaan" : "Monday / National Public Holidays : Closed for maintenance"}
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
