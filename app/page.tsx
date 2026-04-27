import Hero from "./components/Hero";
import ClientMarquee from "./components/ClientMarquee";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="bg-[#fff8fd] min-h-screen font-[family-name:var(--font-inter)]">
      <Hero />
      <ClientMarquee />
      <Services />
      <Footer />
    </div>
    </>
  );
}

