import HomeSlider from "../components/HomeSlider/HomeSlider";
import NewProductsSlider from "../components/NewProductsSlider/NewProductsSlider";
import BuyNowPayLater from "../components/BuyNowPayLater/BuyNowPayLater";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import Partners from "../components/Partners/Partners";
import InstagramNews from "../components/InstagramNews/InstagramNews";
import Comments from "../components/Comments/Comments";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";

function Home() {
  return (
    <>
      <HomeSlider />
      <NewProductsSlider />
      <BuyNowPayLater background={"#F5F7FF"} />
      <ProductCategories />
      <Partners />
      <InstagramNews />
      <Comments />
      <BenefitsSection background={"white"} />
    </>
  );
}

export default Home;
