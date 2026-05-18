import { FiCheckCircle, FiMail, FiPhone } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import SectionExperience from "../components/SectionExperience";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  const services = [
    "Pulsuz ilkin qiymətləndirmə",
    "Texniki spesifikasiya hazırlanması",
    "Tender sənədlərinin dəstəklənməsi",
    "Sahə mühəndisinin göndərilməsi",
  ];
  return (
    <div className="bg-[#141416] min-h-screen">
      <PageHeader title="Bizimlə Əlaqə" currentPage=" Əlaqə" />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
            <div className="lg:w-2/3">
              <span className="text-[#CAFB42] font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                HYDRO HEAT TECH (HHT)
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                Bizimlə əlaqə qurun.
              </h2>
              <p className="text-gray-400 text-base mt-6 max-w-2xl leading-relaxed">
                Layihənizi müzakirə etmək, texniki konsultasiya almaq və ya
                kommersiya təklifi tələb etmək üçün bizimlə əlaqə saxlayın.
              </p>
            </div>

            <div className="lg:w-1/3 flex flex-col lg:items-end">
              <p className="text-[#CAFB42] font-bold mb-4 tracking-widest text-sm uppercase">
                Sosial Şəbəkələr
              </p>
              <div className="flex gap-4">
                {[
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaLinkedinIn />,
                  <FaYoutube />,
                ].map((icon, index) => (
                  <a
                    aria-label="Xidmətlər haqqında ətraflı məlumat"
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full text-white border border-white flex items-center justify-center hover:bg-[#CAFB42] hover:text-black transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-6 h-112.5 rounded-sm overflow-hidden ">
              <iframe
                title="HHT Ofis - Azera Holding"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.566364353457!2d49.8912384765664!3d40.407354756534524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4793d39327%3A0x33446886d3896535!2sAzera%20Group!5e0!3m2!1sen!2saz!4v1715941434255!5m2!1sen!2saz"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="lg:col-span-6 bg-[#1a1a1c] border border-white/5 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="hidden md:block absolute inset-y-10 left-1/2 w-px bg-white/10"></div>

              <div className="p-10 flex flex-col items-center text-center">
                <div className="mb-6">
                  <FiPhone className="text-4xl text-[#CAFB42]" />
                </div>
                <h4 className="text-white text-lg font-bold mb-2">
                  Bizə zəng edin
                </h4>
                <a
                  href="tel:+994519487909"
                  className="text-gray-300 text-base font-medium hover:text-[#CAFB42] transition-colors"
                >
                  +994 51 94879 09
                </a>

                <div className="w-full h-px bg-white/10 my-8"></div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-55">
                  Texniki dəstək və konsultasiya üçün müraciət edin.
                </p>
                <p className="text-white text-sm font-bold tracking-wide">
                  İş saatları:{" "}
                  <span className="font-normal text-gray-300">
                    09:00 - 18:00
                  </span>
                </p>
              </div>

              <div className="p-10 flex flex-col items-center text-center">
                <div className="mb-6">
                  <FiMail className="text-4xl text-[#CAFB42]" />
                </div>
                <h4 className="text-white text-lg font-bold mb-2">E-mail</h4>
                <a
                  href="mailto:info@hht.az"
                  className="text-gray-300 text-base font-medium hover:text-[#CAFB42] transition-colors"
                >
                  info@hht.az
                </a>

                <div className="w-full h-px bg-white/10 my-8"></div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-55">
                  Layihə və kommersiya təklifləri üçün bizə yazın.
                </p>
                <p className="text-white text-sm font-bold tracking-wide">
                  İş saatları:{" "}
                  <span className="font-normal text-gray-300">
                    09:00 - 18:00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#141416] border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 rounded-sm">
            <div className="md:w-1/2">
              <h3 className="text-3xl text-white font-bold mb-8 flex items-center gap-4">
                <span className="w-10 h-1 bg-[#CAFB42]"></span>
                Xidmətlərimiz
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <FiCheckCircle className="text-[#CAFB42] text-xl shrink-0" />
                    <span className="text-gray-300 font-medium text-sm leading-tight">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col items-center md:items-end">
              <p className="text-gray-500 text-center md:text-right mb-8 italic text-sm">
                Sürətli əlaqə və təklif üçün WhatsApp vasitəsilə də yaza
                bilərsiniz.
              </p>
              <a
                href="https://wa.me/994519487909"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-green-500/10"
              >
                <FaWhatsapp className="text-2xl" />
                WHATSAPP İLƏ ƏLAQƏ
              </a>
            </div>
          </div>
        </div>
      </section>
      <SectionExperience />
    </div>
  );
};

export default Contact;
