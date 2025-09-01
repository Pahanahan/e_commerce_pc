import { Specs } from "../../../../../../types/types";

import styles from "./DetailsProduct.module.css";

interface DetailsProductProps {
  specs: Specs;
}

function DetailsProduct({ specs }: DetailsProductProps) {
  const exludedKeys = ["network", "speakers", "internalCode", "sku"];

  const detailsMap = Object.entries(specs)
    .filter(([key]) => !exludedKeys.includes(key))
    .map((spec) => {
      return (
        <li className={styles["details-product__li"]} key={spec[0]}>
          {spec[1]}
        </li>
      );
    });

  return (
    <div className={styles["details-product"]}>
      <ul className={styles["details-product__ul"]}>{detailsMap}</ul>
    </div>
  );
}

export default DetailsProduct;
