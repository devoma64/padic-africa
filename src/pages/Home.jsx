import HeroBanner from "../components/home/HeroBanner";
import WelcomeSection from "../components/home/WelcomeSection";
import StatsSection from "../components/home/StatsSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PartnersSection from "../components/home/PartnersSection";
import RecentNewsSection from "../components/home/RecentNewsSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WelcomeSection />
      <StatsSection />
      <FeaturedProjects />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PartnersSection />
      <RecentNewsSection />
      <ContactSection />
    </>
  );
}
