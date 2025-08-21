import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductItems.module.css";
import defaultimage from "../../assets/images/default/default-product-img.png";

interface ProductItemsProps {
  reverse: boolean;
}

interface User {
  login: string;
  password: string;
  likes: number[];
  cart: number[];
}

interface LoginState {
  isLogedIn: string;
  users: User[];
}

function ProductItems({ reverse }: ProductItemsProps) {
  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );

  let reversedItems = useMemo(() => {
    if (reverse) {
      return [...allProducts].reverse();
    } else {
      return [...allProducts];
    }
  }, [allProducts, reverse]);

  const { isLogedIn, users }: LoginState = useSelector(
    (state: RootState) => state.login
  );

  const productsMap = useMemo(() => {
    return reversedItems.map((item) => {
      const findUser = users.find((user) => user.login === isLogedIn);
      const image: string = item.images[0] || defaultimage;

      const likeOrNot = findUser?.likes?.includes(item.id) || false;
      const inCartOrNot = findUser?.cart?.includes(item.id) || false;

      return (
        <ProductItem
          key={item.id}
          id={item.id}
          rating={item.rating}
          availability={item.availability}
          image={image}
          reviewsCount={item.reviewsCount}
          description={item.description}
          price={item.price}
          oldPrice={item.oldPrice || null}
          isLogedIn={isLogedIn}
          likeOrNot={likeOrNot}
          inCartOrNot={inCartOrNot}
        />
      );
    });
  }, [reversedItems, isLogedIn, users]);

  return <div className={styles["product-items"]}>{productsMap}</div>;
}

export default ProductItems;
