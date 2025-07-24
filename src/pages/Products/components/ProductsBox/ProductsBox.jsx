import { useMemo } from "react";
import { useSelector } from "react-redux";

// import ProductItem from "../../../../components/ProductItem/ProductItem";
import Test from "../../../../Tests/Test";
import { selectVisibleProducts } from "../../../../redux/selectors/productsSelectors";

import styles from "./ProductsBox.module.css";

function ProductsBox() {
  const visibleProducts = useSelector(selectVisibleProducts);

  const { isLogedIn, users } = useSelector((state) => state.login);

  const visibleProductsMap = useMemo(
    () =>
      visibleProducts.map((product) => {
        // <ProductItem key={product.id} data={product} />

        const findUser = users.find((login) => login.login === isLogedIn);

        const likeOrNot = findUser?.likes?.includes(product.id) || false;
        const inCartOrNot = findUser?.cart?.includes(product.id) || false;

        return (
          <Test
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
        );
      }),
    [visibleProducts, isLogedIn, users]
  );

  return <div className={styles["products-box"]}>{visibleProductsMap}</div>;
}

export default ProductsBox;
