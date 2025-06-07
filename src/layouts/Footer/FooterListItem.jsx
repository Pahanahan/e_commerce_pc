import styles from "./FooterListItem.module.css";

function FooterListItem({ data }) {
  const dataMap = data.text.map((text, i) => {
    if (text === "Phones: (00) 1234 5678") {
      return (
        <li className={styles["footer-list__item-li"]} key={i}>
          <span>Phones: </span>
          <a
            className={styles["footer-list__item-phone"]}
            href="tel:0012345678"
          >
            {text.slice(7)}
          </a>
        </li>
      );
    }
    if (text === "E-mail: shop@email.com") {
      return (
        <li className={styles["footer-list__item-li"]} key={i}>
          <span>E-mail: </span>
          <a
            className={styles["footer-list__item-email"]}
            href="mailto:shop@email"
          >
            {text.slice(7)}
          </a>
        </li>
      );
    }

    return (
      <li className={styles["footer-list__item-li"]} key={i}>
        <a className={styles["footer-list__item-link"]} href="#">
          {text}
        </a>
      </li>
    );
  });

  return (
    <div>
      <p className={styles["footer-list__item-title"]}>{data.title}</p>
      <ul>{dataMap}</ul>
    </div>
  );
}

export default FooterListItem;
