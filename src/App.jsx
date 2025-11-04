import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Profil from "./pages/profil";
import Informasi from "./pages/informasi";
import Koleksi from "./pages/koleksi";
import Footer from "./components/footer";
import DetailKoleksi from "./pages/detail";

function AppContent({ language, setLanguage }) {
  const location = useLocation();

  // Cek apakah sedang di halaman detail koleksi
  const isDetailPage = /^\/koleksi\/[^/]+$/.test(location.pathname);

  return (
    <>
      {/* Tampilkan Navbar hanya jika bukan halaman detail */}
      {!isDetailPage && <Navbar language={language} setLanguage={setLanguage} />}

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/profil" element={<Profil language={language} />} />
        <Route path="/informasi" element={<Informasi language={language} />} />
        <Route path="/koleksi" element={<Koleksi language={language} />} />
        <Route
          path="/koleksi/:name"
          element={<DetailKoleksi language={language} />}
        />
      </Routes>

      <Footer language={language} />
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState("Id");

  return (
    <Router>
      <AppContent language={language} setLanguage={setLanguage} />
    </Router>
  );
}
