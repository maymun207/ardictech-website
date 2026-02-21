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
import WrapperStrategy from "@/components/sections/WrapperStrategy";
import EngagementPath from "@/components/sections/EngagementPath";

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
    </main>
  );
}
