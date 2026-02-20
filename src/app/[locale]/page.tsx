import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ValueFirst from "@/components/sections/ValueFirst";
import UntappedPotential from "@/components/sections/UntappedPotential";
import JourneyState from "@/components/sections/JourneyState";
import OperationalEnso from "@/components/sections/OperationalEnso";

import DeploymentModel from "@/components/sections/DeploymentModel";

import LayerIoT from "@/components/sections/LayerIoT";
import LayerArMES from "@/components/sections/LayerArMES";
import LayerArAI from "@/components/sections/LayerArAI";
import CWFConversation from "@/components/sections/CWFConversation";
import DeploymentPaths from "@/components/sections/DeploymentPaths";
import UnderTheHood from "@/components/sections/UnderTheHood";
import CaseStudy from "@/components/sections/CaseStudy";
import RoiCalculator from "@/components/sections/RoiCalculator";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import WrapperStrategy from "@/components/sections/WrapperStrategy";
import EngagementPath from "@/components/sections/EngagementPath";
import ImplementationRoadmap from "@/components/sections/ImplementationRoadmap";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  if (!dict) notFound();

  return (
    <main id="main-content">
      <HeroCarousel dict={dict} />
      <ValueFirst dict={dict} />
      <UntappedPotential dict={dict} />
      <JourneyState dict={dict} />
      <OperationalEnso dict={dict} />


      <DeploymentModel dict={dict} />
      <LayerIoT dict={dict} />
      <LayerArMES dict={dict} />
      <LayerArAI dict={dict} />
      <CWFConversation dict={dict} />
      <DeploymentPaths dict={dict} />
      <WrapperStrategy dict={dict} />
      <EngagementPath dict={dict} />
      <ImplementationRoadmap dict={dict} />


      <UnderTheHood dict={dict} />
      <CaseStudy dict={dict} />
      <FeaturesGrid dict={dict} />
      <TechStack dict={dict} />
      <RoiCalculator dict={dict} />
      <Testimonials dict={dict} />
      <ContactForm dict={dict} />
    </main>
  );
}
