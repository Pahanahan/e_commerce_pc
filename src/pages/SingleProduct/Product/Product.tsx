import ProductDescription from "./ProductDescription/ProductDescription";
import ProductSlider from "./ProductSlider/ProductSlider";

import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles["product"]}>
      <ProductDescription />
      <ProductSlider />
    </div>
  );
}

export default Product;
