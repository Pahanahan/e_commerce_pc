import parseRange from "./parseRange";

const getFilterAndSortedProducts = ({
  products,
  filters,
  sort = "Position",
}) => {
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
    const { category = null, price = null } = filters;

    if (!category && !price) {
      return result;
    }
    if (category) {
      result = result.filter((item) => item.category === category);
    }
    if (price) {
      let min;
      let max;
      [min, max] = parseRange(price);
      result = result.filter((item) => item.price > min && item.price <= max);
    }
  }

  return result;
};

export default getFilterAndSortedProducts;
