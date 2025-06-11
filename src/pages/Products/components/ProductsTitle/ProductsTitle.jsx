import styles from "./ProductsTitle.module.css";

function ProductsTitle() {
  return (
    <div className={styles["title"]}>
      <div className="container">
        <h2 className={styles["title__text"]}>Title</h2>
      </div>
    </div>
  );
}

export default ProductsTitle;
