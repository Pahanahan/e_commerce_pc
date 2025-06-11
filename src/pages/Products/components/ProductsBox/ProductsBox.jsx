import ProductItem from "../../../../components/ProductItem/ProductItem";

import productsdata from "../../../../data/products-data.json";
import styles from "./ProductsBox.module.css";

function ProductsBox() {
  const productsDataMap = productsdata.map((product) => (
    <ProductItem key={product.id} data={product} />
  ));

  return <div className={styles["products-box"]}>{productsDataMap}</div>;
}

export default ProductsBox;
