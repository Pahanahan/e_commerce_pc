import textArr from "../../../../data/features-data";

import styles from "./Features.module.css";

function Features() {
  const editText = (text: string, strong: string) => {
    const parts = text.split(new RegExp(`(${strong})`, "gi"));

    return (
      <p className={styles["features__item-text"]}>
        {parts.map((part, i) =>
          part.toLowerCase() === strong.toLowerCase() ? (
            <span key={i}>{part}</span>
          ) : (
            part
          )
        )}
      </p>
    );
  };

  const textArrMap = textArr.map(({ id, image, alt, text, strongText }) => {
    return (
      <div key={id} className={styles["features__item"]}>
        <div className={styles["features__item-image"]}>
          <img className={styles["features__img"]} src={image} alt={alt} />
        </div>
        {editText(text, strongText)}
      </div>
    );
  });

  return (
    <div className={styles["features"]}>
      <h2 className={styles["features__title"]}>Features</h2>
      <p className={styles["features__text"]}>
        The MPG series brings out the best in gamers by allowing full expression
        in color with advanced RGB lighting control and synchronization.
      </p>
      <div className={styles["features__items"]}>{textArrMap}</div>
    </div>
  );
}

export default Features;
