import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductCategoryItem from "./ProductCategoryItem";
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

  const productsDataCustom = useMemo(() => {
    return allProducts
      .filter((product) => product.category === Categories.CUSTOM_PC)
      .slice(0, 5);
  }, [allProducts]);

  const productsDataLaptop = useMemo(() => {
    return allProducts
      .filter((product) => product.category === Categories.LAPTOPS)
      .slice(0, 5);
  }, [allProducts]);

  const productsDataPC = useMemo(() => {
    return allProducts
      .filter((product) => product.category === Categories.PC)
      .slice(0, 5);
  }, [allProducts]);

  const productsDataMonitor = useMemo(() => {
    return allProducts
      .filter((product) => product.category === Categories.MONITORS)
      .slice(0, 5);
  }, [allProducts]);

  const textArray = ["Custome Builds", "Laptops", "Desktops", "Monitors"];

  const arrImages: string[] = [custom, laptop, desctop, monitor];

  const productsData = [
    productsDataCustom,
    productsDataLaptop,
    productsDataPC,
    productsDataMonitor,
  ];

  const productsDataMap = productsData.map((item, i) => (
    <ProductCategoryItem
      key={i}
      data={item}
      image={arrImages[i]}
      text={textArray[i]}
    />
  ));

  return (
    <div className={styles["product-categories"]}>
      <div className="container">
        <div className={styles["product-categories__box"]}>
          {productsDataMap}
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
