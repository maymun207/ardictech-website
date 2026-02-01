"use client";

import { useState } from "react";
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/types";
import { calculateRoi, formatCurrency } from "@/lib/roi-calculator";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";

interface RoiCalculatorProps {
  dict: Dictionary;
}

export default function RoiCalculator({ dict }: RoiCalculatorProps) {
  const { roi } = dict;

  const [inputs, setInputs] = useState({
    productionLines: 10,
    downtimeHours: 40,
    hourlyCost: 5000,
    defectRate: 5,
  });

  const results = calculateRoi(inputs);

  return (
    <SectionWrapper id="roi" dark>
      <SectionHeading title={roi.title} subtitle={roi.subtitle} light />

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-8 rounded-xl bg-neutral-800 p-8">
          <Slider
            label={roi.inputs.productionLines}
            name="productionLines"
            min={1}
            max={50}
            value={inputs.productionLines}
            onChange={(v) =>
              setInputs((prev) => ({ ...prev, productionLines: v }))
            }
          />
          <Slider
            label={roi.inputs.downtimeHours}
            name="downtimeHours"
            min={0}
            max={500}
            step={5}
            value={inputs.downtimeHours}
            onChange={(v) =>
              setInputs((prev) => ({ ...prev, downtimeHours: v }))
            }
            formatValue={(v) => `${v}h`}
          />
          <Slider
            label={roi.inputs.hourlyCost}
            name="hourlyCost"
            min={0}
            max={50000}
            step={500}
            value={inputs.hourlyCost}
            onChange={(v) =>
              setInputs((prev) => ({ ...prev, hourlyCost: v }))
            }
            formatValue={(v) => formatCurrency(v)}
          />
          <Slider
            label={roi.inputs.defectRate}
            name="defectRate"
            min={0}
            max={20}
            step={0.5}
            value={inputs.defectRate}
            onChange={(v) =>
              setInputs((prev) => ({ ...prev, defectRate: v }))
            }
            formatValue={(v) => `${v}%`}
          />
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center">
          {/* Total savings */}
          <div className="mb-8 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark p-8 text-center text-white">
            <div className="text-sm font-medium uppercase tracking-wider opacity-80">
              {roi.outputs.totalSavings}
            </div>
            <div className="mt-2 font-heading text-4xl font-bold sm:text-5xl">
              {formatCurrency(results.totalAnnualSavings)}
            </div>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-neutral-800 p-5 text-center">
              <Clock className="mx-auto mb-2 h-6 w-6 text-primary-light" />
              <div className="text-xs text-neutral-400">
                {roi.outputs.downtimeSavings}
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-white">
                {formatCurrency(results.downtimeSavings)}
              </div>
            </div>
            <div className="rounded-xl bg-neutral-800 p-5 text-center">
              <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-accent" />
              <div className="text-xs text-neutral-400">
                {roi.outputs.qualitySavings}
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-white">
                {formatCurrency(results.qualitySavings)}
              </div>
            </div>
            <div className="rounded-xl bg-neutral-800 p-5 text-center">
              <TrendingUp className="mx-auto mb-2 h-6 w-6 text-secondary" />
              <div className="text-xs text-neutral-400">
                {roi.outputs.roiTimeline}
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-white">
                {results.roiMonths}{" "}
                <span className="text-sm font-normal">
                  {roi.outputs.months}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-400 text-center">
            {roi.disclaimer}
          </p>

          <div className="mt-8 text-center">
            <Button href="#contact">
              {roi.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
