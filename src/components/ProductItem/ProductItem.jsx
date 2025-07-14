import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import RatingStar from "../RatingStar/RatingStar";
import { toggleLike, addToCart } from "../../redux/user/actionCreators";

import check from "../../assets/icons/check.svg";
import call from "../../assets/icons/call.svg";
import cartProduct from "../../assets/icons/cart-product.svg";
import styles from "./ProductItem.module.css";

const ProductItem = memo(function ProductItem({ data }) {
  const { isLogedIn, users } = useSelector((state) => state.login);

  const findUser = users.find((login) => login.login === isLogedIn);

  const likeOrNot = findUser?.likes?.includes(data.id) || false;
  const inCartOrNot = findUser?.cart?.includes(data.id) || false;

  const dispatch = useDispatch();

  const handleAddLikeOrAddToCart = (value) => {
    if (!isLogedIn) return;

    const payload = {
      login: findUser.login,
      productId: data.id,
    };

    if (value === "like") {
      dispatch(toggleLike(payload));
    }
    if (value === "cart") {
      dispatch(addToCart(payload));
    }
  };

  const rating = Math.round(data.rating);

  return (
    <div className={styles["product"]}>
      <div
        className={`${styles["product__hover-top"]} ${
          likeOrNot ? styles["like--active"] : ""
        }`}
      >
        <svg
          onClick={() => handleAddLikeOrAddToCart("like")}
          className={styles["product__hover-top-like"]}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            fill="none"
            stroke="#A2A6B0"
            strokeWidth="2"
          />
          <path
            d="M18.8926 10.375C19.9608 10.3751 20.8024 10.7311 21.3711 11.2783C21.937 11.8228 22.2939 12.6141 22.2939 13.6094C22.2939 14.6804 21.8645 15.593 21.1289 16.4766C20.5628 17.1566 19.8484 17.7808 19.0605 18.4189L18.251 19.0645C17.3067 19.8098 16.2536 20.6415 15.3955 21.5713C14.5382 20.6414 13.4841 19.8093 12.542 19.0645L11.7324 18.4189C10.9443 17.7805 10.2301 17.1557 9.66406 16.4756C8.92889 15.5921 8.5 14.68 8.5 13.6094C8.50002 12.6143 8.85605 11.8228 9.42188 11.2783C9.99073 10.7311 10.8335 10.375 11.9023 10.375C12.9793 10.3751 14.0116 11.1453 14.6855 11.8252L15.3955 12.542L16.1055 11.8252C16.7787 11.146 17.8143 10.375 18.8926 10.375Z"
            fill="none"
            stroke="#A2A6B0"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className={styles["product__hover-bottom"]}>
        <button
          onClick={() => handleAddLikeOrAddToCart("cart")}
          type="button"
          className={styles["product__cart"]}
        >
          <img
            className={styles["product__cart-img"]}
            src={cartProduct}
            alt="cart"
          />
          {inCartOrNot ? "Remove" : "Add To Cart"}
        </button>
      </div>
      <div>
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
            : data.description.slice(0, 40) + "..."}
        </div>
      </div>

      <div>
        {data.oldPrice ? (
          <div className={styles["product__oldprice"]}>
            ${data.oldPrice.toFixed(2)}
          </div>
        ) : (
          ""
        )}
        <div className={styles["product__price"]}>${data.price.toFixed(2)}</div>
      </div>
    </div>
  );
});

export default ProductItem;
