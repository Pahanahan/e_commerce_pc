import parseRange from "./parseRange";

type ProductItem = {
  id: number;
  brand: string;
  category: string;
  title: string;
  price: number;
  rating: number;
};

type FiltersAppliedType = {
  category?: string;
  price?: string;
  brand?: string;
};

type SortOptionType =
  | "Position"
  | "Name"
  | "Price Lower"
  | "Price Higher"
  | "Rating";

interface GetFilterAndSortedProducts {
  products: ProductItem[];
  filters: FiltersAppliedType;
  sort: SortOptionType;
}

const getFilterAndSortedProducts = ({
  products,
  filters,
  sort = "Position",
}: GetFilterAndSortedProducts): ProductItem[] => {
  let result = [...products];

  if (sort === "Name") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "Position") {
    result.sort((a, b) => a.id - b.id);
  } else if (sort === "Price Lower") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "Price Higher") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "Rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (filters) {
    const { category = null, price = null, brand = null } = filters;

    if (!category && !price && !brand) {
      return result;
    }

    if (category) {
      result = result.filter((item) => item.category === category);
    }
    if (price) {
      const range = parseRange(price);
      const [min, max] = range;
      result = result.filter((item) => item.price > min && item.price <= max);
    }
    if (brand) {
      result = result.filter((item) => item.brand === brand);
    }
  }

  return result;
};

export default getFilterAndSortedProducts;
