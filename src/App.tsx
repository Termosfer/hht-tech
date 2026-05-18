import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqimizda" element={<About />} />
        <Route path="/xidmətlərimiz" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/əlaqə" element={<Contact />} />
        <Route path="/məxfilik-siyasəti" element={<PrivacyPolicy />} />
        <Route path="/şərtlər" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
