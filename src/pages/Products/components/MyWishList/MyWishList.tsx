import { useSelector } from "react-redux";

import MyWishItem from "./MyWishItem";
import { RootState } from "../../../../redux/store";
import { User } from "../../../../types/types";

import defaultImage from "../../../../assets/images/default/default-product-img.png";
import styles from "./MyWishList.module.css";

function MyWishList() {
  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const { isLogedIn, users } = useSelector((state: RootState) => state.login);

  const findUser: User | undefined = users.find(
    (user: User) => user.login === isLogedIn
  );

  const wishProductsLikes = findUser?.likes || [];

  const wishProducts = allProducts.filter((product) =>
    wishProductsLikes.includes(product.id)
  );

  const wishProductsMap = wishProducts.map((item) => {
    const findUser: User | undefined = users.find(
      (user: User) => user.login === isLogedIn
    );

    const likeOrNot = findUser?.likes?.includes(item.id) || false;
    const inCartOrNot = findUser?.cart?.includes(item.id) || false;
    const image = item.images[0] ?? defaultImage;

    return (
      <MyWishItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        availability={item.availability}
        image={image}
        reviewsCount={item.reviewsCount}
        description={item.description}
        isLogedIn={isLogedIn}
        likeOrNot={likeOrNot}
        inCartOrNot={inCartOrNot}
      />
    );
  });

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
