import PageHeader from "../components/PageHeader";
import SectionAboutCTA from "../components/SectionAboutCTA";
import SectionExperience from "../components/SectionExperience";
import SectionReviews from "../components/SectionReviews";
import SectionServiceAbout from "../components/SectionServiceAbout";
import SectionServicesSlider from "../components/SectionServicesSlider";

const Services = () => {
  return (
    <div className="bg-[#141416] min-h-screen">
      <PageHeader title="Xidmətlərimiz" currentPage="Xidmətlərimiz" />
      <SectionAboutCTA />
      <SectionServicesSlider />
      <SectionServiceAbout />
      <SectionReviews />
      <SectionExperience />
    </div>
  );
};

export default Services;
