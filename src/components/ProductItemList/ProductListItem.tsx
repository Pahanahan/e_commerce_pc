import { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import RatingStar from "../RatingStar/RatingStar";
import { toggleLike, addToCart } from "../../redux/user/reducers";
import firstLetterUpperCase from "../../utils/firstLetterUpperCase";
import { scrollTop } from "../../utils/scrollTop";
import { joinStringWithoutSpace } from "../../utils/joinStringWithoutSpace";
import LikeIcon from "../../ui/LikeIcon/LikeIcon";
import { LikeOrCart } from "../../types/types";

import check from "../../assets/icons/check.svg";
import call from "../../assets/icons/call.svg";
import cartProduct from "../../assets/icons/cart-product.svg";
import styles from "./ProductListItem.module.css";

interface ProductItemProps {
  id: number;
  category: string;
  rating: number;
  availability: string;
  image: string;
  reviewsCount: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number | null | undefined;
  isLogedIn: string;
  likeOrNot: boolean;
  inCartOrNot: boolean;
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: string;
  value1: string | number | boolean;
  value2: string | number | boolean;
  value3: string | number | boolean;
  value4: string | number | boolean;
  value5: string | number | boolean;
}

const ProductListItem = memo(function ProductListItem({
  id,
  category,
  rating,
  availability,
  image,
  reviewsCount,
  title,
  description,
  price,
  oldPrice,
  isLogedIn,
  likeOrNot,
  inCartOrNot,
  key1,
  key2,
  key3,
  key4,
  key5,
  value1,
  value2,
  value3,
  value4,
  value5,
}: ProductItemProps) {
  const dispatch = useDispatch();

  const handleAddLikeOrAddToCart = (value: LikeOrCart): void => {
    if (!isLogedIn) return;

    const payload = {
      login: isLogedIn,
      productId: id,
    };

    if (value === LikeOrCart.LIKE) {
      dispatch(toggleLike(payload));
    }
    if (value === LikeOrCart.CART) {
      dispatch(addToCart(payload));
    }
  };

  const ratingStar = Math.round(rating);

  const validCategory = joinStringWithoutSpace(category);

  return (
    <div className={styles["product"]}>
      <div className={styles["product__box"]}>
        <div className={styles["product__image"]}>
          <Link to={`/products/${validCategory}(id)${id}`} onClick={scrollTop}>
            <img src={image} alt="image" />
          </Link>
        </div>
        <div className={styles["product__box-item"]}>
          <span className={styles["product__star"]}>
            <RatingStar rating={ratingStar} />
          </span>
          <span className={styles["product__reviews"]}>
            Reviews ({reviewsCount})
          </span>
        </div>
      </div>
      <div className={styles["product__box-inner"]}>
        <div className={styles["product__box-second"]}>
          <div className={styles["product__title"]}>{title}</div>
          <div className={styles["product__text"]}>{description}</div>
          <div className={styles["product__prices"]}>
            {oldPrice ? (
              <div className={styles["product__oldprice"]}>
                ${oldPrice.toFixed(2)}
              </div>
            ) : (
              ""
            )}
            <div className={styles["product__price"]}>${price.toFixed(2)}</div>
          </div>
          <div className={styles["product__btn"]}>
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
        <div className={styles["product__box"]}>
          <div className={styles["product__specs"]}>
            <div className={styles["product__specs-key"]}>
              {firstLetterUpperCase(key1)}
            </div>
            <div className={styles["product__specs-value"]}>{value1}</div>
          </div>
          <div className={styles["product__specs"]}>
            <div className={styles["product__specs-key"]}>
              {firstLetterUpperCase(key2)}
            </div>
            <div className={styles["product__specs-value"]}>{value2}</div>
          </div>
          <div className={styles["product__specs"]}>
            <div className={styles["product__specs-key"]}>
              {firstLetterUpperCase(key3)}
            </div>
            <div className={styles["product__specs-value"]}>{value3}</div>
          </div>
          <div className={styles["product__specs"]}>
            <div className={styles["product__specs-key"]}>
              {firstLetterUpperCase(key4)}
            </div>
            <div className={styles["product__specs-value"]}>{value4}</div>
          </div>
          <div className={styles["product__specs"]}>
            <div className={styles["product__specs-key"]}>
              {firstLetterUpperCase(key5)}
            </div>
            <div className={styles["product__specs-value"]}>{value5}</div>
          </div>
        </div>
      </div>
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
      <div
        onClick={() => handleAddLikeOrAddToCart(LikeOrCart.LIKE)}
        className={`${styles["product__hover-top"]} ${
          likeOrNot ? styles["like--active"] : ""
        }`}
      >
        <LikeIcon />
      </div>
    </div>
  );
});

export default ProductListItem;
