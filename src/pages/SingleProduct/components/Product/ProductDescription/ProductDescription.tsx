import { Link } from "react-router-dom";
import { useMemo } from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs/Breadcrumbs";
import AboutProduct from "./AboutProduct/AboutProduct";
import DetailsProduct from "./DetailsProduct/DetailsProduct";
import SpecsProduct from "./SpecsProduct/SpecsProduct";
import { RootState } from "../../../../../redux/store";

import styles from "./ProductDescription.module.css";
import { useSelector } from "react-redux";

interface ProductDescriptionProps {
  id: number;
  activeTab: number;
}

function ProductDescription({ id, activeTab }: ProductDescriptionProps) {
  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );

  const productById = useMemo(() => {
    return allProducts.find((item) => item.id === id);
  }, [allProducts]);
  const productText = productById?.description ?? "not found description";

  const tabActiveComponent =
    activeTab === 0 ? (
      <AboutProduct productText={productText} />
    ) : activeTab === 1 ? (
      <DetailsProduct />
    ) : (
      <SpecsProduct />
    );

  return (
    <div className={styles["product-descr"]}>
      <Breadcrumbs />
      <h2 className={styles["product-descr__title"]}>{productById?.title}</h2>
      {tabActiveComponent}
      <div className={styles["product-descr__bottom"]}>
        <div className={styles["product-descr__question"]}>
          <span>Have a Question?</span>
          <Link to={"/contacts"}>Contact Us</Link>
        </div>
        <div className={styles["product-descr__id"]}>SKU D5515AI</div>
      </div>
    </div>
  );
}

export default ProductDescription;
