import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo, memo } from "react";

import BuyNowPayLater from "../../../../../components/BuyNowPayLater/BuyNowPayLater";
import { toggleLike } from "../../../../../redux/user/reducers";
import { RootState } from "../../../../../redux/store";

import defaultImage from "../../../../../assets/images/default/default-product-img.png";
import styles from "./ProductSlider.module.css";
import LikeIcon from "../../../../../ui/LikeIcon";

interface ProductSliderProp {
  id: number;
}

const ProductSlider = memo(function ProductSlider({ id }: ProductSliderProp) {
  const { isLogedIn, users } = useSelector((state: RootState) => state.login);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const dispatch = useDispatch();
  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );

  const likeOrNot = useMemo(() => {
    const currentUser = users.find((user) => user.login === isLogedIn);
    return currentUser ? currentUser.likes.includes(id) : false;
  }, [users, isLogedIn, id]);

  const productById = useMemo(() => {
    return allProducts.find((item) => item.id === id);
  }, [allProducts, id]);
  const images: string[] = productById?.images || [defaultImage];

  const handleChangeSlide = (num: number): void => {
    setCurrentSlide(num);
  };

  const handleAddLike = (): void => {
    if (!isLogedIn) return;

    const payload = {
      login: isLogedIn,
      productId: id,
    };

    dispatch(toggleLike(payload));
  };

  const imagesMap = images.map((img) => {
    return (
      <div key={img} className={styles["product-slider__item"]}>
        <img src={img} alt="product image" />
      </div>
    );
  });

  const dots = images.map((img, i) => {
    return (
      <div
        key={img}
        onClick={() => handleChangeSlide(i)}
        className={`${styles["product-slider__dot"]} ${
          currentSlide === i ? styles["product-slider__dot--active"] : ""
        }`}
      ></div>
    );
  });

  return (
    <div className={styles["product-slider"]}>
      <div
        className={`${styles["product-slider__like"]} ${
          likeOrNot ? styles["like--active"] : ""
        }`}
        onClick={handleAddLike}
      >
        <LikeIcon />
      </div>
      <div
        className={styles["product-slider__inner"]}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {imagesMap}
      </div>
      <div className={styles["product-slider__buynow"]}>
        <BuyNowPayLater background={"transparent"} />
      </div>
      <div className={styles["product-slider__dots"]}>{dots}</div>
    </div>
  );
});

export default ProductSlider;
