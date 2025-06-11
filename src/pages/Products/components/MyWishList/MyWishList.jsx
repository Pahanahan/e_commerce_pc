import styles from "./MyWishList.module.css";

function MyWishList() {
  return (
    <div className={styles["wish-list"]}>
      <h2>My Wish List</h2>
      <p>You have no items in your wish list.</p>
    </div>
  );
}

export default MyWishList;
