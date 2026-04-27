import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AgencyHero from "./components/AgencyHero";
import AgencyAbout from "./components/AgencyAbout";
import TeamTestimonials from "../components/TeamTestimonials";
import WorkFaqContact from "./components/WorkFaqContact";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AgencyHero />
      <AgencyAbout />
      <TeamTestimonials />
      <WorkFaqContact />
      <Footer />
    </main>
  );
}
