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
    <>
      <Hero />
      <FeaturesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}