import { useState, useEffect, memo, useMemo } from "react";

import imageSlider from "../../../../assets/images/product-slider/image-slider.jpg";
import styles from "./InformSlider.module.css";

const InformSlider = memo(function InformSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const imagesArr: string[] = [imageSlider, imageSlider, imageSlider];

  const imagesArrMap = useMemo(
    () =>
      imagesArr.map((item, i) => {
        return (
          <div key={i} className={styles["inform-slider__item"]}>
            <div className={styles["inform-slider__text"]}>
              <h2>Outplay the Competittion</h2>
              <p>
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>
              <p>*Performance compared to i7-9700. Specs varies by model.</p>
            </div>
            <div className={styles["inform-slider__image"]}>
              <img src={item} alt="image" />
            </div>
          </div>
        );
      }),
    []
  );

  const dots = useMemo(
    () =>
      imagesArr.map((_, i) => {
        return (
          <div
            key={i}
            onClick={() => handleChangeSlide(i)}
            className={`${styles["inform-slider__dot"]} ${
              currentSlide === i ? styles["dot--active"] : ""
            }`}
          ></div>
        );
      }),
    [currentSlide]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevState) =>
        prevState === imagesArr.length - 1 ? 0 : prevState + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleChangeSlide = (num: number): void => {
    setCurrentSlide(num);
  };

  return (
    <div className={styles["inform-slider"]}>
      <div className="container">
        <div className={styles["inform-slider__inner"]}>
          <div
            className={styles["inform-slider__items"]}
            style={{ transform: `translateX(${currentSlide * -100}%)` }}
          >
            {imagesArrMap}
          </div>
          <div className={styles["inform-slider__dots"]}>{dots}</div>
        </div>
      </div>
    </div>
  );
});

export default InformSlider;
