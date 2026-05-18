import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="relative bg-[#0d0d0f] text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#CAFB42]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="HHT Logo"
                className="h-16 md:h-20 w-auto -mt-4 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Hydro Heat Tech (HHT) — sənaye və kommersiya obyektləri üçün
              kompleks mühəndislik həlləri təqdim edən ixtisaslaşmış şirkətdir.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#CAFB42] hover:text-black hover:border-[#CAFB42] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white text-lg font-bold mb-8 relative inline-block">
              Xidmətlərimiz
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 h-0.5 bg-[#CAFB42]"></span>
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="hover:text-[#CAFB42] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-[#CAFB42] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sənaye Nasos Sistemləri
              </li>

              <li className="hover:text-[#CAFB42] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-[#CAFB42] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Yanğın Sistemləri
              </li>

              <li className="hover:text-[#CAFB42] transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-[#CAFB42] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Su Təmizləmə (RO)
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white text-lg font-bold mb-8 relative inline-block">
              Faydalı Linklər
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 h-0.5 bg-[#CAFB42]"></span>
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#CAFB42] transition-colors">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#CAFB42] transition-colors"
                >
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#CAFB42] transition-colors"
                >
                  Layihələrimiz
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#CAFB42] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#CAFB42] transition-colors"
                >
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white text-lg font-bold mb-8 relative inline-block">
              Bizi Tapın
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-10 h-0.5 bg-[#CAFB42]"></span>
            </h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-sm font-medium">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <HiOutlineLocationMarker className="text-[#CAFB42] text-xl shrink-0" />
                <span className="text-center lg:text-left">
                  Ələsgər Qayıbov 1222, <br /> Azera Holding, mərtəbə 3, ofis 62
                </span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <HiOutlinePhone className="text-[#CAFB42] text-xl shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+994501234567"
                    className="hover:text-white transition-colors"
                  >
                    +994 51 948 79 09
                  </a>
                  <a
                    href="tel:+994501234567"
                    className="hover:text-white transition-colors"
                  >
                    +994 12 525 52 51
                  </a>
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <HiOutlineMail className="text-[#CAFB42] text-xl shrink-0" />
                <a
                  href="mailto:info@hht.az"
                  className="break-all hover:text-white transition-colors"
                >
                  info@hht.az
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ALT COPYRIGHT HİSSƏSİ */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] md:text-xs tracking-[0.2em] text-center uppercase font-bold">
          <p>© {currentYear} HYDRO HEAT TECH (HHT). Bütün hüquqlar qorunur.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#CAFB42] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#CAFB42] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
