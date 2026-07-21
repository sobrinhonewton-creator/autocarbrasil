import { describe, expect, it } from "vitest";
import { categories, products } from "@/data/products";

describe("catalog data", () => {
  it("keeps every product connected to an existing category", () => {
    const categorySlugs = new Set(categories.map((category) => category.slug));

    for (const product of products) {
      expect(categorySlugs.has(product.category)).toBe(true);
    }
  });

  it("keeps product ids unique", () => {
    const ids = products.map((product) => product.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
