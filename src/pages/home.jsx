import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Landmark, Archive, Hourglass } from "lucide-react";
import Hero from "../components/hero";

export default function Home({ language }) {
  const navigate = useNavigate();
  const [artifacts, setArtifacts] = useState([]);
  const [gallery, setGallery] = useState([]);

  const token =
    "d00e84a97d311d4214e0a86a0de1730301ff0a92194224afb7ee68c98b2fe232f4a0102d08fcdb6648be800b09f295195d6c8ba6af91f841a59c1fc07ab4bc087e42e2847aa506ffd8d5fe104d202e51df44be36e58ce2c76f94d2ff396e9f92f8620fc0e5596cf98146b03fd1cd7cab5d0b0bb59ad135e8efa657170a8461ef";

  useEffect(() => {
    const endpoints = [
      "etnografis",
      "prasejarahs",
      "kolonials",
      "purbakalas",
      "religi-kunos",
      "perjuangans",
      "gubernurs",
      "islams",
      "hindu-budhas",
      "kesenian-tradisionals",
      "koleksi-khususes",
      "persses",
    ];

    // === FETCH KOLEKSI ===
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((ep) =>
            fetch(`http://localhost:1337/api/${ep}?populate=*`, {
              headers: { Authorization: `Bearer ${token}` },
            }).then((res) => res.json())
          )
        );

        const allData = responses
          .flatMap((r) => r.data || [])
          .map((item) => ({
  id: item.id,
  nameId: item.judul || "Tanpa Judul",
  nameEn: item.title || "Untitled",
  descId: item.deskripsi || "",
  descEn: item.description || "",
  img:
    item.image?.formats?.medium?.url ||
    item.image?.url ||
    "/placeholder.jpg",
}));


        setArtifacts(allData.slice(0, 6)); 
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

// === Fetch Galeri ===
const fetchGallery = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/galleries?populate=*", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

   
    const galleryData = data.data.flatMap((g) =>
      (g.image || []).map((img) => ({
        id: img.id,
        img: img.url,
      }))
    );

    setGallery(galleryData.slice(0, 6));
  } catch (error) {
    console.error("Error fetching gallery:", error);
  }
};


    fetchData();
    fetchGallery();
  }, []);

  return (
    <div className="bg-[#403529] text-white min-h-screen overflow-x-hidden">
      {/* === HERO SECTION === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 pt-32 pb-16 sm:pt-23 sm:pb-20"
      >
        {/* === Kiri === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#79644E] text-[#2b1f18] rounded-[3rem] p-8 sm:p-10 lg:p-14 shadow-lg flex flex-col justify-between w-full min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[550px] space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-wide">
              {language === "Id"
                ? "MUSEUM NEGERI SUMATERA UTARA"
                : "NORTH SUMATRA STATE MUSEUM"}
            </h2>
            <p className="text-sm sm:text-base mb-6 leading-relaxed">
              {language === "Id"
                ? "Menjelajahi Sejarah, Budaya dan Warisan Sumatera Utara"
                : "Exploring the History, Culture, and Heritage of North Sumatra"}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                const element = document.getElementById("tentang-museum");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#4a3b2d] text-[#FFCD96] px-10 sm:px-14 py-2 sm:py-3 rounded-full hover:bg-[#3a2d22] transition text-sm sm:text-base"
            >
              {language === "Id" ? "Kunjungi Sekarang" : "Visit Now"}
            </motion.button>
          </div>

          {/* === Statistik === */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 sm:mt-10">
            {[
              {
                num: "1.000+",
                label: language === "Id" ? "Artefak" : "Artifacts",
                icon: <Archive size={32} />,
              },
              {
                num: "10+",
                label: language === "Id" ? "Ruang Pameran" : "Exhibition Rooms",
                icon: <Landmark size={32} />,
              },
              {
                num: "71+",
                label: language === "Id" ? "Tahun" : "Years",
                icon: <Hourglass size={32} />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-[#4a3b2d] text-white rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center shadow-md"
              >
                <span className="text-[#FFCD96] mb-2">{item.icon}</span>
                <p className="text-sm sm:text-base font-bold">{item.num}</p>
                <p className="text-[9px] sm:text-sm text-gray-300 text-center leading-tight">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Kanan - Hero Slider === */}
        <div className="flex justify-center items-stretch">
          <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[550px] h-full">
            <Hero language={language} />
          </div>
        </div>
      </motion.section>

      {/* === TENTANG MUSEUM === */}
      <motion.section
        id="tentang-museum"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-10 p-6"
      >
        <h3 className="text-xl mb-2 text-[#FFCD96]">
          {language === "Id" ? "TENTANG MUSEUM" : "ABOUT THE MUSEUM"}
        </h3>
        <p className="text-gray-200 leading-relaxed mb-10">
          {language === "Id"
            ? "Museum Negeri Sumatera Utara yang diresmikan pada tahun 1982 merupakan pusat pelestarian dan penyajian sejarah, seni, serta budaya masyarakat Sumatera Utara."
            : "The North Sumatra State Museum, inaugurated in 1982, serves as a center for preserving and showcasing the history, art, and culture of the people of North Sumatra."}
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/museum.jpg"
            alt="Museum Negeri Sumatera Utara"
            className="rounded-2xl shadow-lg w-full max-w-[500px] object-cover"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="space-y-6">
            {(language === "Id"
              ? [
                  "Museum Negeri Sumatera Utara mengelola dan mengembangkan museum sebagai pusat pendidikan, penelitian, serta pelestarian warisan budaya.",
                  "Diresmikan 19 April 1982 oleh Menteri Pendidikan dan Kebudayaan Dr. Daoed Joesoef, dengan koleksi pertama berupa Makara dari Biara Sitopayan yang diletakkan Ir. Soekarno tahun 1954.",
                  "Berdiri di lahan 10.468 m² dengan bangunan dua lantai dan fasilitas pendukung, menyimpan sekitar 7.000 koleksi peninggalan sejarah dan budaya Sumatera Utara.",
                ]
              : [
                  "The North Sumatra State Museum manages and develops the museum as a center for education, research, and preservation of cultural heritage.",
                  "It was inaugurated on April 19, 1982, by the Minister of Education and Culture Dr. Daoed Joesoef, with its first collection being the Makara from Biara Sitopayan, placed by Ir. Soekarno in 1954.",
                  "Built on a 10,468 m² area with a two-story building and supporting facilities, it houses around 7,000 collections of North Sumatra’s historical and cultural heritage.",
                ]
            ).map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-[#2B1F18] p-5 rounded-xl text-gray-300 shadow-md"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === KOLEKSI === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20 p-6 text-center"
      >
        <h3 className="text-xl mb-2 text-[#FFCD96]">
          {language === "Id" ? "KOLEKSI MUSEUM" : "MUSEUM COLLECTIONS"}
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          {language === "Id"
            ? "Beberapa koleksi bersejarah yang menjadi kebanggaan Museum Negeri Sumatera Utara."
            : "Some of the historical collections that are the pride of the North Sumatra State Museum."}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {artifacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            onClick={() => {
  const title = language === "Id" ? item.nameId : item.nameEn;
  navigate(`/koleksi/${title.toLowerCase().replace(/\s+/g, "-")}`);
}}

              className="bg-[#2B1F18] rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-[#FFCD96]/40 transition"
            >
              <img
                src={`http://localhost:1337${item.img}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
      <h4 className="text-[#FFCD96] mb-1">
  {language === "Id" ? item.nameId : item.nameEn}
</h4>
<p className="text-gray-300 text-sm">
  {(language === "Id" ? item.descId : item.descEn).slice(0, 80)}...
</p>

              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/koleksi?scroll=artefak">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FFCD96] text-[#4B3D2A] px-6 py-2 rounded-md font-semibold hover:bg-[#e6b67e] transition"
          >
            {language === "Id" ? "Lihat Selengkapnya" : "View More"}
          </motion.button>
        </Link>
      </motion.section>

      {/* === GALERI === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20 p-6 pb-20 text-center"
      >
        <h3 className="text-xl mb-2 text-[#FFCD96]">
          {language === "Id" ? "GALERI MUSEUM" : "MUSEUM GALLERY"}
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          {language === "Id"
            ? "Potret suasana, pameran, dan keindahan arsitektur khas Museum Negeri Sumatera Utara."
            : "A glimpse of the atmosphere, exhibitions, and architectural beauty of the North Sumatra State Museum."}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
  {gallery.map((g, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-2xl shadow-md"
    >
      <img
        src={`http://localhost:1337${g.img}`}
        alt={`Galeri ${i + 1}`}
        className="w-full h-56 object-cover"
      />
    </motion.div>
  ))}
</div>

        <Link to="/koleksi?scroll=galeri">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FFCD96] text-[#4B3D2A] px-6 py-2 rounded-md font-semibold hover:bg-[#e6b67e] transition"
          >
            {language === "Id" ? "Lihat Selengkapnya" : "View More"}
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
}
