import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Koleksi({ language }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isHoverable, setIsHoverable] = useState(false);
  const [artifacts, setArtifacts] = useState([]);
  const [gallery, setGallery] = useState([]);

  const token =
    "d00e84a97d311d4214e0a86a0de1730301ff0a92194224afb7ee68c98b2fe232f4a0102d08fcdb6648be800b09f295195d6c8ba6af91f841a59c1fc07ab4bc087e42e2847aa506ffd8d5fe104d202e51df44be36e58ce2c76f94d2ff396e9f92f8620fc0e5596cf98146b03fd1cd7cab5d0b0bb59ad135e8efa657170a8461ef";

  // === FETCH DATA STRAPI ===
  useEffect(() => {
    const endpoints = [
      { slug: "etnografis", category: "Etnografis" },
      { slug: "prasejarahs", category: "Prasejarah" },
      { slug: "kolonials", category: "Kolonial" },
      { slug: "purbakalas", category: "Purbakala" },
      { slug: "religi-kunos", category: "Religi Kuno" },
      { slug: "perjuangans", category: "Perjuangan" },
      { slug: "gubernurs", category: "Gubernur" },
      { slug: "islams", category: "Islam" },
      { slug: "hindu-budhas", category: "Hindu Budha" },
      { slug: "kesenian-tradisionals", category: "Kesenian Tradisional" },
      { slug: "koleksi-khususes", category: "Koleksi Khusus" },
      { slug: "persses", category: "Pers" },
    ];

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map(async (ep) => {
            const res = await fetch(`http://localhost:1337/api/${ep.slug}?populate=*`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();

            return (
              data.data?.map((item) => ({
                id: item.id,
                nameId: item.judul || "Tanpa Judul",
                nameEn: item.title || "Untitled",
                descId: item.deskripsi || "",
                descEn: item.description || "",
                img:
                  item.image?.formats?.medium?.url ||
                  item.image?.url ||
                  "/placeholder.jpg",
                category: ep.category,
              })) || []
            );
          })
        );

        setArtifacts(responses.flat());
      } catch (err) {
        console.error("Error fetching collections:", err);
      }
    };

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

        setGallery(galleryData);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };

    fetchData();
    fetchGallery();
  }, []);

  // === SCROLL RESTORE ===
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");
    const savedPage = sessionStorage.getItem("currentPage");
    const savedSearch = sessionStorage.getItem("searchTerm");
    const savedCategory = sessionStorage.getItem("selectedCategory");

    if (savedPage) setCurrentPage(Number(savedPage));
    if (savedSearch) setSearchTerm(savedSearch);
    if (savedCategory) setSelectedCategory(savedCategory);

    setTimeout(() => {
      if (savedScroll) window.scrollTo(0, Number(savedScroll));
    }, 300);
  }, []);

  // === SCROLL TO SECTION ===
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");
    setTimeout(() => {
      if (scrollTarget === "artefak")
        document.getElementById("section-artefak")?.scrollIntoView({ behavior: "smooth" });
      if (scrollTarget === "galeri")
        document.getElementById("section-galeri")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [location]);

  // === FILTER, SEARCH & PAGINATION ===
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const filteredArtifacts = artifacts.filter((item) => {
    const activeName = language === "Id" ? item.nameId : item.nameEn;
    const activeDesc = language === "Id" ? item.descId : item.descEn;
    const matchSearch =
      activeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activeDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredArtifacts.length / itemsPerPage);
  const paginatedArtifacts = filteredArtifacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const categories = ["Semua", ...new Set(artifacts.map((a) => a.category))];

  // === GALERI ===
  const [galleryPage, setGalleryPage] = useState(1);
  const galleryPerPage = 4;
  const totalGalleryPages = Math.ceil(gallery.length / galleryPerPage);
  const paginatedGallery = gallery.slice(
    (galleryPage - 1) * galleryPerPage,
    galleryPage * galleryPerPage
  );

  const handleNextGallery = () =>
    galleryPage < totalGalleryPages && setGalleryPage(galleryPage + 1);
  const handlePrevGallery = () =>
    galleryPage > 1 && setGalleryPage(galleryPage - 1);

  const hoverProps = isHoverable
    ? { whileHover: { scale: 1.06, rotateX: 6, rotateY: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.18)" } }
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <div className="bg-[#403529] text-white min-h-screen flex flex-col overflow-x-hidden">
      {/* === HERO === */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] overflow-hidden">
        {["/koleksi.jpg", "/museum.jpg", "/koleksi.jpg"].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: [0, 1, 0], scale: [1.06, 1, 1.02] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 1,
              delay: i * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-[#FFCD96] text-2xl sm:text-3xl"
          >
            {language === "Id" ? "Koleksi Museum Sumatera Utara" : "North Sumatra Museum Collections"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="text-[#CBBBA0] mt-2 max-w-xl"
          >
            {language === "Id"
              ? "Jelajahi kekayaan budaya dan sejarah Sumatera Utara melalui artefak bersejarah kami."
              : "Explore the cultural and historical heritage of North Sumatra through our collections."}
          </motion.p>
        </div>
      </div>

      {/* === KOLEKSI ARTEFAK === */}
      <motion.section id="section-artefak" className="px-4 sm:px-8 md:px-12 py-8">
        <h1 className="text-[#FFCD96] mb-2 text-2xl">
          {language === "Id" ? "Koleksi Artefak" : "Artifact Collections"}
        </h1>

        {/* === FILTER === */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <div className="flex items-center bg-white rounded-full w-full sm:w-2/3 px-3 sm:px-4 py-2 text-gray-700">
            <Search className="mr-2 text-gray-500" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={language === "Id" ? "Cari koleksi..." : "Search collections..."}
              className="flex-grow bg-transparent outline-none text-sm sm:text-base"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-[#5c4a3c] text-white px-2 py-2 rounded-full hover:bg-[#6d5645] transition text-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* === GRID KOLEKSI === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {paginatedArtifacts.map((item, index) => (
            <motion.div
  key={index}
  className="bg-[#5c4a3c] rounded-2xl overflow-hidden text-center shadow-md cursor-pointer"
  onClick={() => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    sessionStorage.setItem("currentPage", currentPage);
    sessionStorage.setItem("searchTerm", searchTerm);
    sessionStorage.setItem("selectedCategory", selectedCategory);

    const title = language === "Id" ? item.nameId : item.nameEn;
    navigate(`/koleksi/${title.toLowerCase().replace(/\s+/g, "-")}`);
  }}
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  {...hoverProps}
>
  <motion.img
    src={`http://localhost:1337${item.img}`}
    alt={language === "Id" ? item.nameId : item.nameEn}
    className="w-full h-40 sm:h-48 md:h-44 object-contain bg-black"
  />
  <div className="p-3 sm:p-4">
    <h3 className="text-[#FFCD96] text-sm sm:text-base">
      {language === "Id" ? item.nameId : item.nameEn}
    </h3>
    <p className="text-gray-100 text-xs sm:text-sm mt-1">
      {(language === "Id" ? item.descId : item.descEn).slice(0, 80)}...
    </p>
  </div>
</motion.div>

          ))}
        </div>

        {/* === PAGINATION === */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#FFCD96] hover:bg-[#b88a56]"
            }`}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#FFCD96] text-black"
                  : "bg-[#5c4a3c] hover:bg-[#6d5645]"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#FFCD96] hover:bg-[#b88a56]"
            }`}
          >
            {">"}
          </button>
        </div>
      </motion.section>

      {/* === GALERI === */}
      <motion.section id="section-galeri" className="px-4 sm:px-8 md:px-12 py-8 border-t border-[#5c4a3c]">
        <h2 className="text-[#FFCD96] mb-4 text-xl">{language === "Id" ? "Galeri" : "Gallery"}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {paginatedGallery.map((g, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={`http://localhost:1337${g.img}`}
                alt={`Gallery ${index}`}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* === PAGINATION GALERI === */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
          <button
            onClick={handlePrevGallery}
            disabled={galleryPage === 1}
            className={`px-3 py-1 rounded ${galleryPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-[#FFCD96] hover:bg-[#b88a56]"}`}
          >
            {"<"}
          </button>
          {[...Array(totalGalleryPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setGalleryPage(i + 1)}
              className={`px-3 py-1 rounded ${
                galleryPage === i + 1 ? "bg-[#FFCD96] text-black" : "bg-[#5c4a3c] hover:bg-[#6d5645]"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextGallery}
            disabled={galleryPage === totalGalleryPages}
            className={`px-3 py-1 rounded ${galleryPage === totalGalleryPages ? "bg-gray-600 cursor-not-allowed" : "bg-[#FFCD96] hover:bg-[#b88a56]"}`}
          >
            {">"}
          </button>
        </div>
      </motion.section>
    </div>
  );
}
