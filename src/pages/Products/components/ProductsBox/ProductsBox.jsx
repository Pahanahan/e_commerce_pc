import { useSelector } from "react-redux";

import ProductItem from "../../../../components/ProductItem/ProductItem";
import { selectVisibleProducts } from "../../../../redux/selectors/productsSelectors";

import styles from "./ProductsBox.module.css";

function ProductsBox() {
  const visibleProducts = useSelector(selectVisibleProducts);

  const visibleProductsMap = visibleProducts.map((product) => (
    <ProductItem key={product.id} data={product} />
  ));

  return <div className={styles["products-box"]}>{visibleProductsMap}</div>;
}

export default ProductsBox;
