import { Link } from "react-router-dom";

import { scrollTop } from "../../../../utils/scrollTop";

import girlImage from "../../../../assets/images/product-info/girl.png";
import arrowRight from "../../../../assets/icons/arrow-right-blue.svg";
import styles from "./ProductInfoLinks.module.css";

interface StrArr {
  text: string;
  slug: string;
}

function ProductInfoLinks() {
  const strArr: StrArr[] = [
    { text: "Product Support", slug: "support" },
    { text: "FAQ", slug: "faq" },
    { text: "Our Buyer Guide", slug: "guide" },
  ];

  const strArrMap = strArr.map((item) => {
    return (
      <Link
        to={`/${item.slug}`}
        className={styles["product-info__link"]}
        key={item.slug}
        onClick={scrollTop}
      >
        <p>{item.text}</p>
        <img src={arrowRight} alt={`link to ${item.text}`} />
      </Link>
    );
  });

  return (
    <div className={styles["product-info"]}>
      <div className="container">
        <div className={styles["product-info__inner"]}>
          <div className={styles["product-info__links"]}>{strArrMap}</div>
          <img src={girlImage} alt="support image" />
        </div>
      </div>
    </div>
  );
}

export default ProductInfoLinks;
