import { Layers, Database, Brain, Monitor, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface TechStackProps {
  dict: Dictionary;
}

const layerIcons = [
  <Layers key="layers" className="h-6 w-6" />,
  <Database key="database" className="h-6 w-6" />,
  <Brain key="brain" className="h-6 w-6" />,
  <Monitor key="monitor" className="h-6 w-6" />,
];

const layerColors = [
  "border-l-accent",
  "border-l-primary",
  "border-l-secondary",
  "border-l-primary-light",
];

export default function TechStack({ dict }: TechStackProps) {
  const { techStack } = dict;

  return (
    <SectionWrapper id="technology" className="bg-neutral-50">
      <SectionHeading
        title={techStack.title}
        subtitle={techStack.subtitle}
      />

      {/* Architecture layers */}
      <div className="mt-12 space-y-6">
        {techStack.layers.map((layer, index) => (
          <div
            key={layer.name}
            className={`rounded-xl border border-neutral-200 border-l-4 bg-white p-6 ${layerColors[index]}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                  {layerIcons[index]}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-neutral-900">
                    {layer.name}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {layer.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-12 text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {techStack.certifications.map((cert) => (
            <Badge key={cert} variant="accent">
              {cert}
            </Badge>
          ))}
        </div>
        <Button variant="secondary" href="#">
          {techStack.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
