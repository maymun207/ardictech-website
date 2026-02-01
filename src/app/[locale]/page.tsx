import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/types";
import HeroSection from "@/components/sections/HeroSection";
import PlatformOverview from "@/components/sections/PlatformOverview";
import CaseStudy from "@/components/sections/CaseStudy";
import RoiCalculator from "@/components/sections/RoiCalculator";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main id="main-content">
      <HeroSection dict={dict} />
      <PlatformOverview dict={dict} />
      <CaseStudy dict={dict} />
      <FeaturesGrid dict={dict} />
      <TechStack dict={dict} />
      <RoiCalculator dict={dict} />
      <Testimonials dict={dict} />
      <ContactForm dict={dict} />
    </main>
  );
}
