import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";
import Products from "../../pages/Products/Products";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Contacts from "../../pages/Contacts/Contacts";
import Dashboard from "../../pages/Dashboard";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";
import Login from "../../pages/Login/Login";
import TermsAndConditions from "../../pages/TermsAndConditions";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles["app-container"]}>
      <Header />
      <main className={styles["content"]}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:slug" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route
            path="/support"
            element={<ComingSoon title="Product Support" />}
          />
          <Route path="/faq" element={<ComingSoon title="FAQ" />} />
          <Route
            path="/guide"
            element={<ComingSoon title="Our Buyer Guide" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
