import { useSelector } from "react-redux";

import styles from "./MyWishList.module.css";

function MyWishList() {
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const wishProducts = useSelector((state) => state.login.users);
  // console.log(isLogedIn);
  // console.log(wishProducts);

  return (
    <div className={styles["wish-list"]}>
      <h2>My Wish List</h2>
      <p>You have no items in your wish list.</p>
    </div>
  );
}

export default MyWishList;
