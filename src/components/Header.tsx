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
                  <CiLocationOn className="text-[#CAFB42] text-lg" />
                  Bakı, Azərbaycan
                </div>
                <div className="flex items-center gap-2">
                  <GoClock className="text-[#CAFB42] text-lg" />
                  Bazar ertəsi - Cumə: 9:00 - 18:00
                </div>
                <div className="flex items-center gap-2">
                  <CiPhone className="text-[#CAFB42] text-lg" />
                  +994 51 948 79 09
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CiMail className="text-[#CAFB42] text-lg" />
                  info@hht.az
                </div>
                <div className="flex items-center gap-4">
                  <FaInstagram className="hover:text-[#CAFB42] transition cursor-pointer" />
                  <FaFacebook className="hover:text-[#CAFB42] transition cursor-pointer" />
                  <FaLinkedin className="hover:text-[#CAFB42] transition cursor-pointer" />
                  <FaYoutube className="hover:text-[#CAFB42] transition cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        /*  animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          height: isScrolled ? "75px" : "95px",
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.4)" : "none",
        }} */
        animate={{
          // Mobildə bulanıqlığı (blur) sıfıra endirin, yalnız masaüstündə qalsın
          backdropFilter: isScrolled
            ? window.innerWidth < 768
              ? "blur(0px)"
              : "blur(12px)"
            : "blur(0px)",
          // Mobildə bulanıqlıq yerinə bir az daha tünd (az şəffaf) rəng verin ki, yazılar oxunsun
          backgroundColor: isScrolled
            ? window.innerWidth < 768
              ? "rgba(13, 13, 15, 0.98)"
              : "rgba(13, 13, 15, 0.7)"
            : "transparent",
          height: isScrolled ? "70px" : "90px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full py-12 px-6 lg:px-10 flex items-center justify-between "
      >
        <div className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className={`transition-allduration-400 ${isScrolled ? "h-20" : "h-20"}`}
          />
        </div>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm font-bold tracking-widest transition-colors duration-300 hover:text-[#CAFB42] ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="mobile menu achmaq uchun"
            onClick={() => setMobileMenuOpen(true)}
            className={`text-2xl transition-colors ${isScrolled ? "text-white" : "text-white"}`}
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

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
                      className="text-xl font-bold text-slate-900 hover:text-[#CAFB42] transition"
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
