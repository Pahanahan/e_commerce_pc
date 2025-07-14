import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import Promo from "./components/Promo/Promo";
import Title from "../../components/Title/Title";
import ProductsMain from "./components/ProductsMain/ProductsMain";

function Products() {
  return (
    <>
      <Promo />
      <Breadcrumbs />
      <Title title={"Products"} />
      <ProductsMain />
      <BenefitsSection background={"#F5F7FF"} />
    </>
  );
}

export default Products;
