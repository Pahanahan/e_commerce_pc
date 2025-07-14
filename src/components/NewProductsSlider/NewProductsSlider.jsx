import { useState } from "react";
import { useSelector } from "react-redux";

import ProductItems from "../ProductItems/ProductItems";

import styles from "./NewProductsSlider.module.css";
import leftarrow from "../../assets/images/new-slider/arrow-left.svg";
import rightarrow from "../../assets/images/new-slider/arrow-right.svg";

function NewProductsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const productsLength =
    useSelector((state) => state.products.allProducts).length - 5;

  const handleSlides = (arrow) => {
    if (arrow === "left") {
      if (currentSlide === 0) {
        setCurrentSlide(productsLength - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    if (arrow === "right") {
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
            onClick={() => handleSlides("left")}
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
            onClick={() => handleSlides("right")}
          >
            <img src={rightarrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProductsSlider;
