import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import ContactsMain from "./components/ContactsMain/ContactsMain";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";

function Contacts() {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
      </div>
      <Title title={"Contact Us"} />
      <ContactsMain />
      <BenefitsSection background={"#F5F7FF"} />
    </>
  );
}

export default Contacts;
