import RatingStar from "../RatingStar/RatingStar";
import check from "../../assets/icons/check.svg";
import call from "../../assets/icons/call.svg";
import styles from "./ProductItem.module.css";

function ProductItem({ data }) {
  const rating = Math.round(data.rating);

  return (
    <div className={styles["product"]}>
      {data.availability === "in stock" ? (
        <div className={styles["product__availability--yes"]}>
          <img src={check} alt="icon" />
          in stock
        </div>
      ) : (
        <div className={styles["product__availability--not"]}>
          <img src={call} alt="icon" />
          check availability
        </div>
      )}
      <div className={styles["product__image"]}>
        <a href="#">
          <img src={data.images[0]} alt="image" />
        </a>
      </div>
      <div className={styles["product__box"]}>
        <span className={styles["product__star"]}>
          <RatingStar rating={rating} />
        </span>
        <span className={styles["product__reviews"]}>
          Reviews ({data.reviewsCount})
        </span>
      </div>
      <div className={styles["product__text"]}>
        {data.description.length < 45
          ? data.description
          : data.description.slice(0, 45) + "..."}
      </div>
      {data.oldPrice ? (
        <div className={styles["product__oldprice"]}>
          ${data["oldPrice"].toFixed(2)}
        </div>
      ) : (
        ""
      )}
      <div className={styles["product__price"]}>${data.price.toFixed(2)}</div>
    </div>
  );
}

export default ProductItem;
