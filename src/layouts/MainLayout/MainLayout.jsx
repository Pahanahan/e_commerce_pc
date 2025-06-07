import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <BrowserRouter>
      <div className={styles["app-container"]}>
        <Header />
        <main className={styles["content"]}>
          <Routes>
            <Route path="/" index element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default MainLayout;
