import styles from "./AboutProduct.module.css";

interface AboutProductProps {
  productText: string;
}

function AboutProduct({ productText }: AboutProductProps) {
  return (
    <p className={styles["about-product"]}>
      {productText ?? `not found product`}
    </p>
  );
}

export default AboutProduct;
