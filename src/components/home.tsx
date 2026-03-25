import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import SiteFooter from "@/components/SiteFooter";

/**
 * Main landing page component
 * 
 * @description Complete home page layout that combines all major sections:
 * header, hero, about, features, and footer. Provides consistent
 * styling with custom background and text colors for the landing page.
 * 
 * @returns {JSX.Element} - Complete home page layout
 * 
 * @example
 * ```tsx
 * // Usage in App.tsx routing
 * import Home from './components/home';
 * 
 * <Route path="/" element={<Home />} />
 * ```
 */
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
