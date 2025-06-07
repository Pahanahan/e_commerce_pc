import FooterListItem from "./FooterListItem";
import footerData from "../../data/footer-data.json";

import styles from "./FooterList.module.css";

function FooterList() {
  const listItems = footerData;

  const listItemsMap = listItems.map((item) => (
    <FooterListItem key={item.id} data={item} />
  ));

  return <div className={styles["footer-list"]}>{listItemsMap}</div>;
}

export default FooterList;
