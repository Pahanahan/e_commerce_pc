import { useState } from "react";
// import { useParams } from "react-router-dom";

import Tabs from "./Tabs/Tabs";
import Product from "./Product/Product";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import Features from "./Features/Features";

import styles from "./SingleProduct.module.css";

function SingleProduct() {
  //   const { slug } = useParams<{ slug: string }>();
  //   console.log(slug);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className={styles["product"]}>
        <div className="container">
          <div className={styles["product__inner"]}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
      <Product />
      <Features />
      <BenefitsSection background="#F5F7FF" />
    </>
  );
}

export default SingleProduct;
