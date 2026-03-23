import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import SiteFooter from "@/components/SiteFooter";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F8F7F4", color: "#1C1C1E" }}
    >
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Home;
