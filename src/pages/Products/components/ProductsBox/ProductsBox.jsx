import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../../../../components/ProductItem/ProductItem";
import ProductListItem from "../../../../components/ProductItemList/ProductListItem";
import { selectVisibleProducts } from "../../../../redux/selectors/productsSelectors";

import styles from "./ProductsBox.module.css";

function ProductsBox({ listOrGrid }) {
  const visibleProducts = useSelector(selectVisibleProducts);

  const { isLogedIn, users } = useSelector((state) => state.login);

  const visibleProductsMap = useMemo(
    () =>
      visibleProducts.map((product) => {
        const arrayValues = Object.entries(product.specs).slice(0, 5);

        const findUser = users.find((login) => login.login === isLogedIn);

        const likeOrNot = findUser?.likes?.includes(product.id) || false;
        const inCartOrNot = findUser?.cart?.includes(product.id) || false;

        return listOrGrid === "grid" ? (
          <ProductItem
            key={product.id}
            id={product.id}
            rating={product.rating}
            availability={product.availability}
            image={product.images[0]}
            reviewsCount={product.reviewsCount}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            isLogedIn={isLogedIn}
            likeOrNot={likeOrNot}
            inCartOrNot={inCartOrNot}
          />
        ) : (
          <ProductListItem
            key={product.id}
            id={product.id}
            rating={product.rating}
            availability={product.availability}
            image={product.images[0]}
            reviewsCount={product.reviewsCount}
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            isLogedIn={isLogedIn}
            likeOrNot={likeOrNot}
            inCartOrNot={inCartOrNot}
            key1={arrayValues[0][0]}
            key2={arrayValues[1][0]}
            key3={arrayValues[2][0]}
            key4={arrayValues[3][0]}
            key5={arrayValues[4][0]}
            value1={arrayValues[0][1]}
            value2={arrayValues[1][1]}
            value3={arrayValues[2][1]}
            value4={arrayValues[3][1]}
            value5={arrayValues[4][1]}
          />
        );
      }),
    [listOrGrid, visibleProducts, isLogedIn, users]
  );

  return <div className={styles["products-box"]}>{visibleProductsMap}</div>;
}

export default ProductsBox;
