export interface SizeMeasurement {
  chest: number;
  waist: number;
  length: number;
  shoulder: number;
  sleeve: number;
  wrist: number;
}

export type SizeKey = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL" | "5XL" | "6XL";

export interface MeasurementRow {
  num: number;
  key: keyof SizeMeasurement;
  label: string;
  description: string;
}

export const MEASUREMENT_ROWS: MeasurementRow[] = [
  {
    num: 1,
    key: "chest",
    label: "Chest",
    description: "Measured across the garment from pit to pit, laid flat (not circumference).",
  },
  {
    num: 2,
    key: "waist",
    label: "Waist",
    description: "Measured across the bottom hem of the garment laid flat.",
  },
  {
    num: 3,
    key: "length",
    label: "Length",
    description: "Measured from highest point where collar meets body down to base hem.",
  },
  {
    num: 4,
    key: "shoulder",
    label: "Shoulder",
    description: "Measured straight across from shoulder seam to opposite shoulder seam.",
  },
  {
    num: 5,
    key: "sleeve",
    label: "Sleeve",
    description: "Measured along outer curve from collar/shoulder seam to cuff edge.",
  },
  {
    num: 6,
    key: "wrist",
    label: "Wrist",
    description: "Measured across the cuff opening flat.",
  },
];

export const SIZES_ORDER: SizeKey[] = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
];

export const UNIVERSAL_SIZE_CHART: Record<SizeKey, SizeMeasurement> = {
  XS: { chest: 43, waist: 40, length: 25.5, shoulder: 19, sleeve: 24.5, wrist: 8.5 },
  S: { chest: 45, waist: 42, length: 26, shoulder: 19.5, sleeve: 25, wrist: 9 },
  M: { chest: 47, waist: 44, length: 26.5, shoulder: 20, sleeve: 25.5, wrist: 9.5 },
  L: { chest: 50, waist: 46, length: 27, shoulder: 20.5, sleeve: 26, wrist: 10 },
  XL: { chest: 52, waist: 48, length: 27.5, shoulder: 21, sleeve: 26.5, wrist: 10.5 },
  "2XL": { chest: 54, waist: 52, length: 28, shoulder: 21.5, sleeve: 27, wrist: 11 },
  "3XL": { chest: 56, waist: 54, length: 28.5, shoulder: 22, sleeve: 27.5, wrist: 11.5 },
  "4XL": { chest: 60, waist: 57, length: 29, shoulder: 22.5, sleeve: 28, wrist: 12 },
  "5XL": { chest: 64, waist: 61, length: 29.5, shoulder: 23, sleeve: 28.5, wrist: 12.5 },
  "6XL": { chest: 68, waist: 65, length: 30, shoulder: 23.5, sleeve: 29, wrist: 13 },
};

export const HOW_TO_MEASURE_STEPS = [
  {
    step: 1,
    title: "Garment Laid Flat",
    text: "The measurements are taken on the garment laid flat from seam to seam, not on the body.",
  },
  {
    step: 2,
    title: "Chest (Pit to Pit)",
    text: "The chest is measured across the garment from pit to pit, laid flat. (Not the circumference).",
  },
  {
    step: 3,
    title: "Sleeve Length",
    text: "The sleeve is measured from where the raglan/shoulder sleeve meets the collar to the end of the cuff.",
  },
  {
    step: 4,
    title: "Body Length",
    text: "The body length is measured from the highest point where the body meets the collar, to the base of the garment.",
  },
  {
    step: 5,
    title: "Compare with Your Wardrobe",
    text: "If in doubt, find a coat in your wardrobe to compare measurements. If you are between sizes, think about whether you prefer a neat, closer fit or a more relaxed fit.",
  },
];

export function formatMeasurement(valueInInches: number, unit: "in" | "cm"): string {
  if (unit === "cm") {
    const cm = valueInInches * 2.54;
    return cm % 1 === 0 ? cm.toFixed(0) : cm.toFixed(1);
  }
  return valueInInches % 1 === 0 ? valueInInches.toString() : valueInInches.toFixed(1);
}
