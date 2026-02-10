export interface RoiInputs {
  productionLines: number;
  downtimeHours: number;
  hourlyCost: number;
  defectRate: number;
}

export interface RoiResults {
  downtimeSavings: number;
  qualitySavings: number;
  totalAnnualSavings: number;
  roiMonths: number;
}

const IMPLEMENTATION_COST_PER_LINE = 50000;

export function calculateRoi(inputs: RoiInputs): RoiResults {
  const { productionLines, downtimeHours, hourlyCost, defectRate } = inputs;

  const downtimeSavings = downtimeHours * 0.35 * hourlyCost * 12;
  const qualitySavings =
    productionLines * hourlyCost * (defectRate / 100) * 0.4 * 12;
  const totalAnnualSavings = downtimeSavings + qualitySavings;

  const implementationCost = productionLines * IMPLEMENTATION_COST_PER_LINE;
  const roiMonths =
    totalAnnualSavings > 0
      ? Math.ceil((implementationCost / totalAnnualSavings) * 12)
      : 0;

  return {
    downtimeSavings,
    qualitySavings,
    totalAnnualSavings,
    roiMonths,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
