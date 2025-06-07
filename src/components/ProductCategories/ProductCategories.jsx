import ProductCategoryItem from "./ProductCategoryItem";
import productsdata from "../../data/products-data.json";
import styles from "./ProductCategories.module.css";
import custom from "/images/categories/custom.jpg";
import laptop from "/images/categories/laptop.jpg";
import desctop from "/images/categories/desctop.jpg";
import monitor from "/images/categories/monitor.jpg";

function ProductCategories() {
  const productsDataCustom = productsdata.filter(
    (product) => product.category === "custom pc"
  );

  const productsDataLaptop = productsdata.filter(
    (product) => product.category === "laptops"
  );

  const productsDataPC = productsdata.filter(
    (product) => product.category === "PC"
  );

  const productsDataMonitor = productsdata.filter(
    (product) => product.category === "monitors"
  );

  const textArray = ["Custome Builds", "Laptops", "Desktops", "Monitors"];

  const arrImages = [custom, laptop, desctop, monitor];

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
