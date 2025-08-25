import { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../../../../components/ProductItem/ProductItem";
import ProductListItem from "../../../../components/ProductItemList/ProductListItem";
import { selectVisibleProducts } from "../../../../redux/selectors/productsSelectors";
import { GridOrList } from "../../../../types/types";
import { State } from "../../../../types/types";

import defaultImage from "../../../../assets/images/default/default-product-img.png";
import styles from "./ProductsBox.module.css";

interface ProductsBoxProps {
  listOrGrid: GridOrList;
}

function ProductsBox({ listOrGrid }: ProductsBoxProps) {
  const visibleProducts = useSelector(selectVisibleProducts);

  const { isLogedIn, users } = useSelector((state: State) => state.login);

  const visibleProductsMap = useMemo(
    () =>
      visibleProducts.map((product) => {
        const arrayValues = Object.entries(product.specs).slice(0, 5) as [
          string,
          string | number | boolean
        ][];

        const findUser = users.find((login) => login.login === isLogedIn);

        const likeOrNot = findUser?.likes?.includes(product.id) || false;
        const inCartOrNot = findUser?.cart?.includes(product.id) || false;
        const image = product.images[0] ?? defaultImage;

        const key1 = arrayValues[0]?.[0] ?? "Spec";
        const key2 = arrayValues[1]?.[0] ?? "Spec";
        const key3 = arrayValues[2]?.[0] ?? "Spec";
        const key4 = arrayValues[3]?.[0] ?? "Spec";
        const key5 = arrayValues[4]?.[0] ?? "Spec";
        const value1 = arrayValues[0]?.[1] ?? "not found";
        const value2 = arrayValues[1]?.[1] ?? "not found";
        const value3 = arrayValues[2]?.[1] ?? "not found";
        const value4 = arrayValues[3]?.[1] ?? "not found";
        const value5 = arrayValues[4]?.[1] ?? "not found";

        return listOrGrid === GridOrList.GRID ? (
          <ProductItem
            key={product.id}
            id={product.id}
            rating={product.rating}
            availability={product.availability}
            image={image}
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
            image={image}
            reviewsCount={product.reviewsCount}
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            isLogedIn={isLogedIn}
            likeOrNot={likeOrNot}
            inCartOrNot={inCartOrNot}
            key1={key1}
            key2={key2}
            key3={key3}
            key4={key4}
            key5={key5}
            value1={value1}
            value2={value2}
            value3={value3}
            value4={value4}
            value5={value5}
          />
        );
      }),
    [listOrGrid, visibleProducts, isLogedIn, users]
  );

  return <div className={styles["products-box"]}>{visibleProductsMap}</div>;
}

export default ProductsBox;
