import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductCategoryItem.module.css";

function ProductCategoryItem({ data, image, text }) {
  const styleImg = {
    backgroundImage: `url(${image})`,
  };

  const productItemMap = data.map((item) => (
    <ProductItem key={item.id} data={item} />
  ));

  return (
    <div className={styles["product-wrapper"]}>
      <div className={styles["product-wrapper__image"]} style={styleImg}>
        <div className={styles["product-wrapper__text"]}>{text}</div>
        <a className={styles["product-wrapper__link"]} href="#">
          See All Products
        </a>
      </div>
      <div className={styles["product-list"]}>{productItemMap}</div>
    </div>
  );
}

export default ProductCategoryItem;
