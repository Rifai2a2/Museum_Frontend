import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DetailKoleksi({ language }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [others, setOthers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token =
    "d00e84a97d311d4214e0a86a0de1730301ff0a92194224afb7ee68c98b2fe232f4a0102d08fcdb6648be800b09f295195d6c8ba6af91f841a59c1fc07ab4bc087e42e2847aa506ffd8d5fe104d202e51df44be36e58ce2c76f94d2ff396e9f92f8620fc0e5596cf98146b03fd1cd7cab5d0b0bb59ad135e8efa657170a8461ef";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map(async (slug) => {
            const res = await fetch(`http://localhost:1337/api/${slug}?populate=*`, {
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
                slugId: (item.judul || "")
                  .toLowerCase()
                  .replace(/\s+/g, "-"),
                slugEn: (item.title || "")
                  .toLowerCase()
                  .replace(/\s+/g, "-"),
              })) || []
            );
          })
        );

        const allData = responses.flat();

 
        const selected = allData.find(
          (i) => i.slugId === name || i.slugEn === name
        );

        setItem(selected);
        const otherItems = allData.filter((i) => i.id !== selected?.id).slice(0, 4);
        setOthers(otherItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching detail:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading)
    return (
      <div className="text-center text-white p-10 bg-[#403529] min-h-screen">
        <p>{language === "Id" ? "Memuat data..." : "Loading data..."}</p>
      </div>
    );

  if (!item)
    return (
      <div className="text-center text-white p-10 bg-[#403529] min-h-screen">
        <p>{language === "Id" ? "Data tidak ditemukan." : "Data not found."}</p>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#403529] text-white min-h-screen px-4 md:px-10 py-6"
    >
      {/* tombol kembali */}
      <button
        onClick={() => {
          const lastScroll = sessionStorage.getItem("scrollPosition");
          navigate("/koleksi");
          setTimeout(() => {
            if (lastScroll) window.scrollTo(0, Number(lastScroll));
          }, 400);
        }}
        className="text-[#FFCD96] hover:underline mb-4 flex items-center gap-1"
      >
        ← {language === "Id" ? "Kembali" : "Back"}
      </button>

      {/* gambar utama */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="border-4 border-[#caa76a] rounded-xl p-1 shadow-2xl max-w-3xl mx-auto">
          <img
            src={`http://localhost:1337${item.img}`}
            alt={language === "Id" ? item.nameId : item.nameEn}
            className="w-full max-h-[550px] object-contain bg-black rounded-lg"
          />
        </div>
      </motion.div>

      {/* teks deskripsi */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto mt-6"
      >
        <h1 className="text-[#FFCD96] text-2xl md:text-3xl font-bold mb-3 text-center">
          {language === "Id" ? item.nameId : item.nameEn}
        </h1>

        <p className="text-[#E9E0D2] leading-relaxed text-justify text-sm md:text-base">
          {language === "Id" ? item.descId : item.descEn}{" "}
          {language === "Id"
            ? "Artefak ini memiliki nilai sejarah yang tinggi dan sering ditampilkan dalam pameran museum."
            : "This artifact holds great historical value and is often displayed in museum exhibitions."}
        </p>
      </motion.div>

      {/* koleksi lainnya */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto mt-10"
      >
        <h2 className="text-[#FFCD96] font-semibold text-xl mb-4 text-center">
          {language === "Id" ? "Koleksi Lainnya" : "Other Collections"}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {others.map((o, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/koleksi/${(language === "Id" ? o.slugId : o.slugEn)}`)
              }
              className="bg-[#5c4a3c] rounded-xl overflow-hidden text-center cursor-pointer shadow-md"
            >
              <img
                src={`http://localhost:1337${o.img}`}
                alt={language === "Id" ? o.nameId : o.nameEn}
                className="w-full h-28 object-cover"
              />
              <p className="text-[#FFCD96] font-medium text-sm p-2">
                {language === "Id" ? o.nameId : o.nameEn}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
