import { memo } from "react";
import { useDispatch } from "react-redux";

import RatingStar from "../../../../components/RatingStar/RatingStar";
import { toggleLike, addToCart } from "../../../../redux/user/reducers";
import { LikeOrCart } from "../../../../types/types";
import { useAppDispatch } from "../../../../customHooks/useAppDispatch";

import check from "../../../../assets/icons/check.svg";
import call from "../../../../assets/icons/call.svg";
import cartProduct from "../../../../assets/icons/cart-product.svg";
import styles from "./MyWishItem.module.css";

interface MyWishItemProps {
  id: number;
  rating: number;
  availability: string;
  image: string;
  reviewsCount: number;
  description: string;
  isLogedIn: string;
  likeOrNot: boolean;
  inCartOrNot: boolean;
}

const MyWishItem = memo(function MyWishItem({
  id,
  rating,
  availability,
  image,
  reviewsCount,
  description,
  isLogedIn,
  likeOrNot,
  inCartOrNot,
}: MyWishItemProps) {
  const dispatch = useDispatch();

  const handleAddLikeOrAddToCart = (value: LikeOrCart): void => {
    if (!isLogedIn) return;

    const payload = {
      login: isLogedIn,
      productId: id,
    };

    if (value === "like") {
      dispatch(toggleLike(payload));
    }
    if (value === "cart") {
      dispatch(addToCart(payload));
    }
  };

  const ratingStar = Math.round(rating);

  return (
    <div className={styles["product"]}>
      <div
        className={`${styles["product__hover-top"]} ${
          likeOrNot ? styles["like--active"] : ""
        }`}
      >
        <svg
          onClick={() => handleAddLikeOrAddToCart(LikeOrCart.LIKE)}
          className={styles["product__hover-top-like"]}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#C94D3F" />
          <path d="M7 7L13.5 13.5" stroke="white" strokeLinecap="round" />
          <path d="M13.5 7L7 13.5" stroke="white" strokeLinecap="round" />
        </svg>
      </div>

      <div>
        {availability === "in stock" ? (
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
            <img src={image} alt="image" />
          </a>
        </div>
        <div className={styles["product__box"]}>
          <span className={styles["product__star"]}>
            <RatingStar rating={ratingStar} />
          </span>
          <span className={styles["product__reviews"]}>
            Reviews ({reviewsCount})
          </span>
        </div>
        <div className={styles["product__text"]}>
          {description.length < 45
            ? description
            : description.slice(0, 40) + "..."}
        </div>
      </div>

      <div className={styles["product__hover-bottom"]}>
        <button
          onClick={() => handleAddLikeOrAddToCart(LikeOrCart.CART)}
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
    </div>
  );
});

export default MyWishItem;
