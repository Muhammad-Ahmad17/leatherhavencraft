export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "jackets",
    name: "Jackets",
    description: "Bombers, denim, and horsehide cut to be worn hard.",
  },
  {
    slug: "coats",
    name: "Coats",
    description: "Longer wool and leather coats with a cleaner line.",
  },
  {
    slug: "outerwear",
    name: "Outerwear",
    description: "Quilted layers for weather that turns without warning.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
