"use client";

import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import LoiNgoSection from "@/components/organisms/LoiNgoSection";
import OurStorySection from "@/components/organisms/OurStorySection";
import TemplateShowcase from "@/components/organisms/TemplateShowcase";
import WhyChooseSection from "@/components/organisms/WhyChooseSection";
import DemoSection from "@/components/organisms/DemoSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import PricingSection from "@/components/organisms/PricingSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import ScrollToTopButton from "@/components/atoms/ScrollToTopButton";
import QuickAccessDialog from "@/components/atoms/QuickAccessDialog";
import FloatingContact from "@/components/atoms/FloatingContact";

export default function LandingPageTemplate() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <LoiNgoSection />
        <OurStorySection />
        <TemplateShowcase />
        <WhyChooseSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
      <QuickAccessDialog />
      <FloatingContact />
    </div>
  );
}
