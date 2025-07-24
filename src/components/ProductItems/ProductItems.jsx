import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductItems.module.css";

function ProductItems({ reverse }) {
  const allProducts = useSelector((state) => state.products.allProducts);

  let reversedItems = useMemo(() => {
    if (reverse) {
      return [...allProducts].reverse();
    } else {
      return [...allProducts];
    }
  }, [allProducts, reverse]);

  const { isLogedIn, users } = useSelector((state) => state.login);

  const productsMap = useMemo(() => {
    return reversedItems.map((item) => {
      const findUser = users.find((login) => login.login === isLogedIn);

      const likeOrNot = findUser?.likes?.includes(item.id) || false;
      const inCartOrNot = findUser?.cart?.includes(item.id) || false;

      return (
        <ProductItem
          key={item.id}
          id={item.id}
          rating={item.rating}
          availability={item.availability}
          image={item.images[0]}
          reviewsCount={item.reviewsCount}
          description={item.description}
          price={item.price}
          oldPrice={item.oldPrice}
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
