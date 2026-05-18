import { useState, useEffect, useMemo } from "react";
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "ANA SƏHİFƏ", path: "/" },
      { name: "HAQQIMIZDA", path: "/haqqimizda" },
      { name: "XİDMƏTLƏRİMİZ", path: "/xidmətlərimiz" },
      { name: "FAQ", path: "/faq" },
      { name: "ƏLAQƏ", path: "/əlaqə" },
    ],
    [],
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {!isScrolled && (
          <motion.div
            key="top-bar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 46, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden lg:block overflow-hidden bg-transparent border-b border-white/10 pointer-events-auto will-change-[height,opacity]"
          >
            <div className="w-full h-11.5 px-10 flex items-center justify-between text-sm text-white font-medium">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-[#CAFB42] text-lg" />
                  Bakı, Azərbaycan
                </div>
                <div className="flex items-center gap-2">
                  <GoClock className="text-[#CAFB42] text-lg" />
                  9:00 - 18:00
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
        animate={{
          backgroundColor: isScrolled
            ? window.innerWidth < 768
              ? "rgba(13, 13, 15, 0.98)"
              : "rgba(13, 13, 15, 0.8)"
            : "rgba(13, 13, 15, 0)",
          backdropFilter:
            isScrolled && window.innerWidth >= 768 ? "blur(12px)" : "blur(0px)",
          height: isScrolled ? 70 : 100,
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="w-full px-6 lg:px-10 flex items-center justify-between pointer-events-auto will-change-[height,backgroundColor] transform-gpu"
        style={{ translateZ: 0 }}
      >
        <div className="shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-500 ${isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"}`}
            />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-sm font-bold tracking-widest transition-colors duration-300 hover:text-[#CAFB42] text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
            className="text-2xl text-white p-2"
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-60 pointer-events-auto cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-72 bg-[#141416] z-70 p-10 shadow-2xl border-l border-white/5 pointer-events-auto"
            >
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl text-white cursor-pointer hover:text-[#CAFB42] p-2"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold text-white hover:text-[#CAFB42] transition-colors block py-2"
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
