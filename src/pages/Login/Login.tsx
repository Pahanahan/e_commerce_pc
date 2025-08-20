import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Main from "./components/Main/Main";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";

function Login() {
  return (
    <>
      <Breadcrumbs />
      <Title title={"Customer Login"} />
      <Main />
      <BenefitsSection background={"#F5F7FF"} />
    </>
  );
}

export default Login;
