import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", id: "Home", idLabel: "Home", enLabel: "Home" },
    { path: "/profil", id: "Profil", idLabel: "Profil", enLabel: "Profile" },
    { path: "/informasi", id: "Informasi", idLabel: "Informasi", enLabel: "Information" },
    { path: "/koleksi", id: "Koleksi", idLabel: "Koleksi", enLabel: "Collections" },
  ];

  return (
    <header className="bg-[#A68A6B] fixed top-0 left-0 right-0 w-full h-19 z-50 shadow-md">
      <nav className="flex justify-between items-center h-full px-1 md:px-1">
        {/* === Logo + Title === */}
        <NavLink
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center text-[#4B3D2A] font-[Jockey_One] mt-1 cursor-pointer"
>
  <img
    src="/public/logo.png"
    alt="Logo"
    className="w-20 h-20 object-contain"
  />

</NavLink>

        {/* === Desktop Menu === */}
        <ul className="hidden md:flex gap-3 uppercase text-sm font-[Jockey_One] text-[#4B3D2A] ml-auto mr-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
              className={({ isActive }) =>
                `px-3 py-2 rounded-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFCD96] text-[#4B3D2A]"
                    : "hover:bg-[#FFCD96] hover:text-[#4B3D2A]"
                }`
              }
            >
              {language === "Id" ? item.idLabel : item.enLabel}
            </NavLink>
          ))}
        </ul>

        {/* === Toggle + Hamburger === */}
        <div className="flex items-center gap-3">
          {/* Toggle Bahasa */}
          <div
            onClick={() => setLanguage(language === "Id" ? "En" : "Id")}
            className="flex items-center bg-[#FFCD96] rounded-full cursor-pointer px-1 py-1 w-16 justify-between shadow-md"
          >
            {language === "En" ? (
              <>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4B3D2A] text-white text-xs">
                  En
                </span>
                <span className="text-[#4B3D2A] font-[Jockey_One] text-sm">Id</span>
              </>
            ) : (
              <>
                <span className="text-[#4B3D2A] font-[Jockey_One] text-sm">En</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4B3D2A] text-white text-xs">
                  Id
                </span>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#4B3D2A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      {isOpen && (
        <div className="md:hidden bg-[#A68A6B] px-6 py-4 w-full shadow-inner">
          <ul className="flex flex-col gap-2 uppercase text-sm font-[Jockey_One] text-[#4B3D2A]">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => {setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth"});
                }}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#FFCD96] text-[#4B3D2A]"
                      : "hover:bg-[#FFCD96] hover:text-[#4B3D2A]"
                  }`
                }
              >
                {language === "Id" ? item.idLabel : item.enLabel}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
