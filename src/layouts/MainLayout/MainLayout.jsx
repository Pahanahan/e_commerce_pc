import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Contacts from "../../pages/Contacts";
import Dashboard from "../../pages/Dashboard";
import Product from "../../pages/Product";
import Register from "../../pages/Register";
import TermsAndConditions from "../../pages/TermsAndConditions";

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
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
