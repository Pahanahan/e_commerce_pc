import ProductCategoryItem from "./ProductCategoryItem";
import productsdata from "../../data/products-data.json";
import styles from "./ProductCategories.module.css";
import custom from "../../assets/images/categories/custom.jpg";
import laptop from "../../assets/images/categories/laptop.jpg";
import desctop from "../../assets/images/categories/desctop.jpg";
import monitor from "../../assets/images/categories/monitor.jpg";

function ProductCategories() {
  const productsDataCustom = productsdata
    .filter((product) => product.category === "custom pc")
    .slice(0, 5);

  const productsDataLaptop = productsdata
    .filter((product) => product.category === "laptops")
    .slice(0, 5);

  const productsDataPC = productsdata
    .filter((product) => product.category === "PC")
    .slice(0, 5);

  const productsDataMonitor = productsdata
    .filter((product) => product.category === "monitors")
    .slice(0, 5);

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
