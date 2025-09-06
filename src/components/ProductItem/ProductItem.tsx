import { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import RatingStar from "../RatingStar/RatingStar";
import { toggleLike, addToCart } from "../../redux/user/reducers";
import { LikeOrCart } from "../../types/types";
import { scrollTop } from "../../utils/scrollTop";
import { joinStringWithoutSpace } from "../../utils/joinStringWithoutSpace";
import LikeIcon from "../../ui/LikeIcon";

import check from "../../assets/icons/check.svg";
import call from "../../assets/icons/call.svg";
import cartProduct from "../../assets/icons/cart-product.svg";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
  id: number;
  category: string;
  rating: number;
  availability: string;
  image: string;
  reviewsCount: number;
  description: string;
  price: number;
  oldPrice?: number | null | undefined;
  isLogedIn: string;
  likeOrNot: boolean;
  inCartOrNot: boolean;
}

const ProductItem = memo(function ProductItem({
  id,
  category,
  rating,
  availability,
  image,
  reviewsCount,
  description,
  price,
  oldPrice,
  isLogedIn,
  likeOrNot,
  inCartOrNot,
}: ProductItemProps) {
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

  const validCategory = joinStringWithoutSpace(category);

  return (
    <div className={styles["product"]}>
      <div
        onClick={() => handleAddLikeOrAddToCart(LikeOrCart.LIKE)}
        className={`${styles["product__hover-top"]} ${
          likeOrNot ? styles["like--active"] : ""
        }`}
      >
        <LikeIcon />
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
          <Link to={`/products/${validCategory}(id)${id}`} onClick={scrollTop}>
            <img src={image} alt="image" />
          </Link>
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

      <div>
        {oldPrice ? (
          <div className={styles["product__oldprice"]}>
            ${oldPrice.toFixed(2)}
          </div>
        ) : (
          ""
        )}
        <div className={styles["product__price"]}>${price.toFixed(2)}</div>
      </div>
    </div>
  );
});

export default ProductItem;
