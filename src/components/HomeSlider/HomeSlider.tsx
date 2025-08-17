import { useState, useEffect } from "react";

import styles from "./HomeSlider.module.css";
import imageslider1 from "../../assets/images/home-slider/image-slider-1.jpg";
import imageslider2 from "../../assets/images/home-slider/image-slider-2.jpg";
import imageslider3 from "../../assets/images/home-slider/image-slider-3.jpg";
import imageslider4 from "../../assets/images/home-slider/image-slider-4.jpg";
import leftarrow from "../../assets/images/home-slider/arrow-left-slider.svg";
import rightarrow from "../../assets/images/home-slider/arrow-right-slider.svg";

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const imagesArr: string[] = [
    imageslider1,
    imageslider2,
    imageslider3,
    imageslider4,
  ];

  const imagesArrMap = imagesArr.map((item, i) => (
    <div key={i} className={styles["home-slider__item"]}>
      <img src={item} alt="image" />
    </div>
  ));

  type Arrow = "left" | "right";

  const handleSlides = (arrow: Arrow): void => {
    if (arrow === "left") {
      if (currentSlide === 0) {
        setCurrentSlide(imagesArr.length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    if (arrow === "right") {
      if (currentSlide === imagesArr.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prevState) => {
        return prevState === imagesArr.length - 1 ? 0 : prevState + 1;
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide, imagesArr.length]);

  return (
    <div className={styles["home-slider"]}>
      <div className="container">
        <div className={styles["home-slider__container"]}>
          <button
            className={styles["home-slider__arrow-left"]}
            onClick={() => handleSlides("left")}
          >
            <img src={leftarrow} />
          </button>
          <div
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
            className={styles["home-slider__box"]}
          >
            {imagesArrMap}
          </div>
          <button
            className={styles["home-slider__arrow-right"]}
            onClick={() => handleSlides("right")}
          >
            <img src={rightarrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
