import styles from "./Title.module.css";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
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
