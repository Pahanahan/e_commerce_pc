import { useSelector } from "react-redux";

import MyWishItem from "./MyWishItem";

import styles from "./MyWishList.module.css";

function MyWishList() {
  const allProducts = useSelector((state) => state.products.allProducts);
  const { isLogedIn, users } = useSelector((state) => state.login);
  const wishProductsLikes =
    useSelector(
      (state) =>
        state.login.users.find((item) => item.login === isLogedIn)?.likes
    ) || [];

  const wishProducts = allProducts.filter((product) =>
    wishProductsLikes.includes(product.id)
  );
  console.log(wishProducts);

  const wishProductsMap = wishProducts.map((item) => {
    const findUser = users.find((login) => login.login === isLogedIn);

    const likeOrNot = findUser?.likes?.includes(item.id) || false;
    const inCartOrNot = findUser?.cart?.includes(item.id) || false;

    return (
      <MyWishItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        availability={item.availability}
        image={item.images[0]}
        reviewsCount={item.reviewsCount}
        description={item.description}
        isLogedIn={isLogedIn}
        likeOrNot={likeOrNot}
        inCartOrNot={inCartOrNot}
      />
    );
  });

  console.log(wishProductsMap);

  return (
    <div className={styles["wish-list"]}>
      <h2>My Wish List</h2>
      {wishProductsLikes.length > 0 ? (
        wishProductsMap
      ) : (
        <p>You have no items in your wish list.</p>
      )}
    </div>
  );
}

export default MyWishList;
