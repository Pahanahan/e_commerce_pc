import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductItems.module.css";

function ProductItems({ reverse }) {
  const allProducts = useSelector((state) => state.products.allProducts);

  let reversedItems = useMemo(() => {
    if (reverse) {
      return [...allProducts].reverse();
    } else {
      return [...allProducts];
    }
  }, [allProducts, reverse]);

  const productsMap = useMemo(
    () =>
      reversedItems.map((item) => <ProductItem key={item.id} data={item} />),
    [reversedItems]
  );

  return <div className={styles["product-items"]}>{productsMap}</div>;
}

export default ProductItems;
