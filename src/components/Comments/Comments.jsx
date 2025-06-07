import { useState, useEffect } from "react";

import comentsdata from "../../data/coments-data.json";
import styles from "./Comments.module.css";

function Comments() {
  const [currentComment, setCurrentComment] = useState(0);

  const commentMap = comentsdata.slice(0, 4).map((item) => (
    <div key={item.id} className={styles["comment"]}>
      <div className={styles["comment__text"]}>{item.text}</div>
      <div className={styles["comment__author"]}>- {item.author}</div>
    </div>
  ));

  const dotsMap = comentsdata
    .slice(0, 4)
    .map((comment, i) => (
      <div
        key={comment.id}
        onClick={() => setCurrentComment(comment.id - 1)}
        className={styles["dot"]}
        style={currentComment === i ? { backgroundColor: "#0156ff" } : null}
      ></div>
    ));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentComment((prevState) => {
        return prevState === comentsdata.slice(0, 4).length - 1
          ? 0
          : prevState + 1;
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentComment]);

  return (
    <div className={styles["comments"]}>
      <div className="small-container">
        <div className={styles["comments__box"]}>
          <div
            className={styles["comments__box-slider"]}
            style={{
              transform: `translateX(-${currentComment * 100}%)`,
            }}
          >
            {commentMap}
          </div>
          <div className={styles["comment__inner"]}>
            <a className={styles["comment__link"]} href="#">
              Leave Us A Review
            </a>
            <div className={styles["dots"]}>{dotsMap}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
