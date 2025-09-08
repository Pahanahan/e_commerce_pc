import Logo from "./Logo";
import Nav from "./Nav";
import MenuActions from "./MenuActions";
import MobileMenu from "./MobileMenu";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className="container">
      <div className={styles["menu"]}>
        <Logo />
        <Nav />
        <MenuActions />
        <MobileMenu />
      </div>
    </div>
  );
}

export default Menu;
