import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import Promo from "./components/Promo/Promo";
import ProductsTitle from "./components/ProductsTitle/ProductsTitle";
import ProductsMain from "./components/ProductsMain/ProductsMain";

function Products() {
  return (
    <>
      <Promo />
      <Breadcrumbs />
      <ProductsTitle />
      <ProductsMain />
      <BenefitsSection background={"#F5F7FF"} />
    </>
  );
}

export default Products;
