import { useSelector } from "react-redux";

import ProductItem from "../../../../components/ProductItem/ProductItem";

import styles from "./ProductsBox.module.css";

function ProductsBox() {
  const selector = useSelector((products) => products.products);

  const selectorMap = selector.map((product) => (
    <ProductItem key={product.id} data={product} />
  ));

  return <div className={styles["products-box"]}>{selectorMap}</div>;
}

export default ProductsBox;
