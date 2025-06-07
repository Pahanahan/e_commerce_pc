import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductItems.module.css";

function ProductItems({ data, reverse }) {
  let reversedItems;
  if (reverse) {
    reversedItems = [...data].reverse();
  } else {
    reversedItems = [...data];
  }

  const productsMap = reversedItems.map((item) => (
    <ProductItem key={item.id} data={item} />
  ));

  return <div className={styles["product-items"]}>{productsMap}</div>;
}

export default ProductItems;
