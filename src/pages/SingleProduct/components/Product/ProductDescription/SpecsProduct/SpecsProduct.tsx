import { Specs } from "../../../../../../types/types";
import firstLetterUpperCase from "../../../../../../utils/firstLetterUpperCase/firstLetterUpperCase";

import styles from "./SpecsProduct.module.css";

interface SpecsProductProps {
  specs: Specs;
}

function SpecsProduct({ specs }: SpecsProductProps) {
  const exludedKeys = ["internalCode", "sku"];

  const specsMap = Object.entries(specs)
    .filter(([key]) => !exludedKeys.includes(key))
    .map((spec, i) => {
      return (
        <div
          key={spec[0]}
          className={`${styles["specs-product__item"]} ${
            i % 2 === 1 ? styles["background"] : ""
          }`}
        >
          <div className={styles["specs-product__item-key"]}>
            {firstLetterUpperCase(spec[0])}
          </div>
          <div className={styles["specs-product__item-value"]}>
            {firstLetterUpperCase(spec[1])}
          </div>
        </div>
      );
    });

  return <div className={styles["specs-product"]}>{specsMap}</div>;
}

export default SpecsProduct;
