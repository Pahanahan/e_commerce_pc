import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductItems from "../ProductItems/ProductItems";
import { deleteFilters } from "../../redux/products/reducers";
import { scrollTop } from "../../utils/scrollTop";
import useWindowWidth from "../../customHooks/useWindowWidth";
import { RootState } from "../../redux/store";

import leftarrow from "../../assets/images/new-slider/arrow-left.svg";
import rightarrow from "../../assets/images/new-slider/arrow-right.svg";
import styles from "./NewProductsSlider.module.css";

enum Arrow {
  RIGHT = "right",
  LEFT = "left",
}

function NewProductsSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const dispatch = useDispatch();

  const productsLength = useSelector(
    (state: RootState) => state.products.allProducts.length - 5
  );

  const handleOpenProductsPage = () => {
    dispatch(deleteFilters());
    scrollTop();
  };

  const windowWidth = useWindowWidth();
  const widthProductItem = windowWidth >= 1024 ? 227 : 200;

  const handleSlides = (arrow: Arrow): void => {
    if (arrow === Arrow.LEFT) {
      if (currentSlide === 0) {
        setCurrentSlide(productsLength - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    if (arrow === Arrow.RIGHT) {
      if (currentSlide === productsLength - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  return (
    <div className={styles["products-slider"]}>
      <div className="container">
        <div className={styles["products-slider__container"]}>
          <div className={styles["products-slider__top"]}>
            <h4 className={styles["products-slider__top-title"]}>
              New Products
            </h4>
            <Link
              onClick={handleOpenProductsPage}
              to="/products"
              className={styles["products-slider__top-link"]}
            >
              See All New Products
            </Link>
          </div>
          <button
            className={styles["products-slider__arrow-left"]}
            onClick={() => handleSlides(Arrow.LEFT)}
          >
            <img src={leftarrow} />
          </button>
          <div
            style={{
              transform: `translateX(-${currentSlide * widthProductItem}px)`,
            }}
            className={styles["products-slider__box"]}
          >
            <ProductItems reverse={true} />
          </div>
          <button
            className={styles["products-slider__arrow-right"]}
            onClick={() => handleSlides(Arrow.RIGHT)}
          >
            <img src={rightarrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProductsSlider;
