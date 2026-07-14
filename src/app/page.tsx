import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Hero from "@/components/home/Hero";
import {
  FeaturesSection,
  CategoriesSection,
  HowItWorksSection,
  StatsSection,
  TestimonialsSection,
  NewsletterSection,
  CtaSection,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Hero />
      <FeaturesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </SmoothScrollProvider>
  );
}