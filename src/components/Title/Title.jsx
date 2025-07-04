import styles from "./Title.module.css";

function Title({ title }) {
  return (
    <>
      <div className={styles["title"]}>
        <div className="container">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}

export default Title;
