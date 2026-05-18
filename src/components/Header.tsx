import { useState, useEffect } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaBars,
} from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo1.png";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px-dən çox scroll etdikdə keçid başlasın
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ANA SƏHİFƏ", path: "/" },
    { name: "HAQQIMIZDA", path: "/haqqimizda" },
    { name: "XİDMƏTLƏRİMİZ", path: "/xidmətlərimiz" },
    { name: "FAQ", path: "/faq" },
    { name: "ƏLAQƏ", path: "/əlaqə" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 1. TOP BAR - Rəvan şəkildə daralaraq yox olan hissə */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="hidden lg:block overflow-hidden bg-transparent border-b border-white/10"
          >
            <div className="w-full py-3 px-10 flex items-center justify-between text-sm text-white font-medium">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-blue-400 text-lg" />
                  Bakı, Azərbaycan
                </div>
                <div className="flex items-center gap-2">
                  <GoClock className="text-blue-400 text-lg" />
                  Bazar ertəsi - Cumə: 9:00 - 18:00
                </div>
                <div className="flex items-center gap-2">
                  <CiPhone className="text-blue-400 text-lg" />
                  +994 51 948 79 09 
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CiMail className="text-blue-400 text-lg" />
                  info@hht.az
                </div>
                <div className="flex items-center gap-4">
                  <FaInstagram className="hover:text-blue-400 transition cursor-pointer" />
                  <FaFacebook className="hover:text-blue-400 transition cursor-pointer" />
                  <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
                  <FaYoutube className="hover:text-blue-400 transition cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAVBAR - TopBar-ın yerinə rəvan sürüşən hissə */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          height: isScrolled ? "75px" : "95px", // Scroll olanda hündürlük bir az azalır
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.4)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full py-12 px-6 lg:px-10 flex items-center justify-between "
      >
        {/* Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className={`transition-allduration-400 ${isScrolled ? "h-20" : "h-20"}`}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm font-bold tracking-widest transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button */}
       {/*  <div className="hidden lg:block">
          <button
            className={`px-7 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all duration-300 ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-slate-900"
                : "bg-white text-slate-900 hover:bg-blue-500 hover:text-white"
            }`}
          >
            GET A QUOTE
          </button>
        </div> */}

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`text-2xl transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* 3. MOBILE MENU (Sidebar) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Arxa fon qaraltısı */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-75 bg-white z-70 p-10 shadow-2xl"
            >
              <div className="flex justify-end mb-10">
                <FaTimes
                  className="text-3xl text-slate-900 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
              <ul className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold text-slate-900 hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
