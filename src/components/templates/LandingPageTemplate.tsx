"use client";

import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import TemplateShowcase from "@/components/organisms/TemplateShowcase";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import DemoSection from "@/components/organisms/DemoSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import PricingSection from "@/components/organisms/PricingSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

export default function LandingPageTemplate() {
  return (
    <div id="__next">
      <Navbar />
      <main>
        <HeroSection />
        <TemplateShowcase />
        <BenefitsSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
