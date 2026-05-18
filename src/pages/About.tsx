import PageHeader from "../components/PageHeader";
import SectionCounterExperience from "../components/SectionCounterExperience";

import SectionPartners from "../components/SectionPartners";
import SectionStats from "../components/SectionStats";
import SectionTrusted from "../components/SectionTrusted";
import SectionVision from "../components/SectionVision";

const About = () => {
  return (
    <div className="bg-[#141416] min-h-screen">
      <PageHeader title="Haqqımızda" currentPage="Haqqimizda" />

      <SectionTrusted />
      <SectionVision />
      <SectionCounterExperience />
      <SectionStats />
      <SectionPartners />
    </div>
  );
};

export default About;
