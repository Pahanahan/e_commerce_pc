import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductCategoryItem from "./ProductCategoryItem";
import useWindowWidth from "../../customHooks/useWindowWidth";
import { Product, State } from "../../types/types";

import custom from "../../assets/images/categories/custom.jpg";
import laptop from "../../assets/images/categories/laptop.jpg";
import desctop from "../../assets/images/categories/desctop.jpg";
import monitor from "../../assets/images/categories/monitor.jpg";
import styles from "./ProductCategories.module.css";

enum Categories {
  CUSTOM_PC = "custom pc",
  LAPTOPS = "laptops",
  PC = "PC",
  MONITORS = "monitors",
}

function ProductCategories() {
  const allProducts: Product[] = useSelector(
    (state: State) => state.products.allProducts
  );

  const windowWidth = useWindowWidth();

  let currentProductInCategory =
    windowWidth >= 1420
      ? 5
      : windowWidth >= 1190
      ? 4
      : windowWidth >= 881
      ? 3
      : windowWidth >= 681
      ? 2
      : windowWidth >= 476
      ? 1
      : 0;

  const categories = [
    { type: Categories.CUSTOM_PC, text: "Custome Builds", image: custom },
    { type: Categories.LAPTOPS, text: "Laptops", image: laptop },
    { type: Categories.PC, text: "Desktops", image: desctop },
    { type: Categories.MONITORS, text: "Monitors", image: monitor },
  ];

  const categoriesMap = useMemo(
    () =>
      categories.map((category, i) => {
        const data = allProducts
          .filter((product) => product.category === category.type)
          .slice(0, currentProductInCategory);

        return (
          <ProductCategoryItem
            key={i}
            data={data}
            image={category.image}
            text={category.text}
          />
        );
      }),
    [currentProductInCategory]
  );

  return (
    <div className={styles["product-categories"]}>
      <div className="container">
        <div className={styles["product-categories__box"]}>{categoriesMap}</div>
      </div>
    </div>
  );
}

export default ProductCategories;
