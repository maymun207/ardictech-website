import type { Locale } from "@/types";
import type { Dictionary } from "@/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/lib/dictionaries/en.json").then((m) => m.default),
  tr: () => import("@/lib/dictionaries/tr.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
