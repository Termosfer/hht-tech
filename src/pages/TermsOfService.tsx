import PageHeader from "../components/PageHeader";

const TermsOfService = () => {
  return (
    <div className="bg-[#141416] min-h-screen text-white">
      <PageHeader title="İstifadə Şərtləri" currentPage="İstifadə Şərtləri" />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="text-gray-400 mb-8 italic">Son yenilənmə: 18 May 2026</p>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">1. Ümumi müddəalar</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            hhtech.az vebsaytından istifadə etməklə siz aşağıdakı şərtləri qəbul etmiş sayılırısınız. Bu sayt mühəndislik həlləri və avadanlıq satışı üzrə məlumatlandırma xarakteri daşıyır.
          </p>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">2. Xidmətlərin məhdudiyyəti</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Saytda təqdim olunan texniki spesifikasiyalar ümumi xarakter daşıyır. Hər bir konkret layihə üçün peşəkar mühəndis hesabatı mütləqdir. HHT, saytdakı məlumatların fərdi layihələrdə mühəndis nəzarəti olmadan tətbiqinə görə məsuliyyət daşımır.
          </p>

          <h2 className="text-[#CAFB42] text-2xl font-bold mb-4 uppercase">3. Qanunvericilik</h2>
          <p className="text-gray-300 leading-relaxed">
            Bu şərtlər Azərbaycan Respublikasının qanunvericiliyi ilə tənzimlənir. Yaranan mübahisələr Bakı şəhər məhkəmələrində həll edilir.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;