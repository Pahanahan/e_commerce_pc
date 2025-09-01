import { useState } from "react";
import { useParams } from "react-router-dom";

import Tabs from "./components/Tabs/Tabs";
import ProductActionPanel from "./components/ProductActionPanel/ProductActionPanel";
import Product from "./components/Product/Product";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import Features from "./components/Features/Features";

import styles from "./SingleProduct.module.css";

function SingleProduct() {
  const { slug } = useParams<{ slug: string }>();

  const id: number = Number(slug?.split("(id)")[1]) ?? 0;

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className={styles["product"]}>
        <div className="container">
          <div className={styles["product__inner"]}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProductActionPanel />
          </div>
        </div>
      </div>
      <Product id={id} activeTab={activeTab} />
      <Features />
      <BenefitsSection background="#F5F7FF" />
    </>
  );
}

export default SingleProduct;
