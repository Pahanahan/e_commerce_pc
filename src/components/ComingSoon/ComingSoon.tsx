import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Title from "../Title/Title";

import styles from "./ComingSoon.module.css";

interface ComingSoonProp {
  title: string;
}

function ComingSoon({ title }: ComingSoonProp) {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className={styles["commingsoon"]}>
        <Title title={title} />
        <div className="container">
          <div className={styles["commingsoon__item"]}>
            <p>This section is coming soon.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
