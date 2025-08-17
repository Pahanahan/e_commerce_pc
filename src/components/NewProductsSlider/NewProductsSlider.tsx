import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import ProductItems from "../ProductItems/ProductItems";

import styles from "./NewProductsSlider.module.css";
import leftarrow from "../../assets/images/new-slider/arrow-left.svg";
import rightarrow from "../../assets/images/new-slider/arrow-right.svg";

function NewProductsSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const productsLength = useSelector(
    (state: RootState) => state.products.allProducts.length - 5
  );

  enum Arrow {
    RIGHT = "right",
    LEFT = "left",
  }

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
            <a className={styles["products-slider__top-link"]} href="#">
              See All New Products
            </a>
          </div>
          <button
            className={styles["products-slider__arrow-left"]}
            onClick={() => handleSlides(Arrow.LEFT)}
          >
            <img src={leftarrow} />
          </button>
          <div
            style={{
              transform: `translateX(-${currentSlide * 234}px)`,
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
