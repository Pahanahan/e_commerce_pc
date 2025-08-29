import ProductDescription from "./ProductDescription/ProductDescription";
import ProductSlider from "./ProductSlider/ProductSlider";

import styles from "./Product.module.css";

interface ProductProps {
  id: number;
  activeTab: number;
}

function Product({ id, activeTab }: ProductProps) {
  return (
    <div className={styles["product"]}>
      <div className="container">
        <div className={styles["product__inner"]}>
          <ProductDescription id={id} activeTab={activeTab} />
          <ProductSlider id={id} />
        </div>
      </div>
    </div>
  );
}

export default Product;
