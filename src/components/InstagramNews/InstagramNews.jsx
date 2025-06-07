import instagramdata from "../../data/instagram-data";
import styles from "./InstagramNews.module.css";

function InstagramNews() {
  const contentsMap = instagramdata.map((item) => (
    <div key={item.id} className={styles["instagram-news__item"]}>
      <a href="https://www.instagram.com" target="_blank">
        <img
          className={styles["instagram-news__item-img"]}
          src={item.src}
          alt="follow us on instagram"
        />
      </a>
      <p className={styles["instagram-news__item-text"]}>
        {item.text.length >= 55 ? item.text.slice(0, 55) + "..." : item.text}
      </p>
      <p className={styles["instagram-news__item-date"]}>{item.date}</p>
    </div>
  ));

  return (
    <div className={styles["instagram-news"]}>
      <div className="container">
        <h4 className={styles["instagram-news__title"]}>
          Follow us on Instagram for News, Offers & More
        </h4>
        <div className={styles["instagram-news__box"]}>{contentsMap}</div>
      </div>
    </div>
  );
}

export default InstagramNews;
