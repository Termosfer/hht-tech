import PageHeader from "../components/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#141416] min-h-screen text-white">
      <PageHeader title="Məxfilik Siyasəti" currentPage="Məxfilik Siyasəti" />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="text-gray-400 mb-8 italic">Son yenilənmə: 18 May 2026</p>
          
          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">1. Məlumatların toplanması</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            "Hydro Heat Tech" MMC (HHT) olaraq müştərilərimizin məxfiliyinə önəm veririk. Vebsaytımızda heç bir qeydiyyat forması olmasa da, əlaqə vasitələri (WhatsApp, Email, Telefon) vasitəsilə bizə təqdim etdiyiniz ad, soyad və əlaqə nömrələri yalnız sizə mühəndislik xidməti göstərmək məqsədilə saxlanılır.
          </p>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">2. Məlumatların istifadəsi</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8">
            <li>Kommersiya təkliflərinin hazırlanması;</li>
            <li>Texniki konsultasiya dəstəyinin təmin edilməsi;</li>
            <li>Layihələndirmə və servis xidmətləri üçün sahə mühəndisinin yönləndirilməsi;</li>
            <li>Yeniliklər və texniki xidmətlər barədə məlumatlandırma.</li>
          </ul>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">3. Təhlükəsizlik</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Tərəfimizə təqdim olunan texniki sənədlər və fərdi məlumatlar üçüncü tərəfə ötürülmür və müasir təhlükəsizlik standartları çərçivəsində qorunur.
          </p>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">4. Əlaqə</h2>
          <p className="text-gray-300 leading-relaxed">
            Məxfilik siyasəti ilə bağlı suallarınız yaranarsa, <strong>info@hht.az</strong> ünvanına yaza bilərsiniz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;