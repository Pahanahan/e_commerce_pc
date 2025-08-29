import { useSelector } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";
import { Product } from "../../types/types";
import { RootState } from "../../redux/store";

import defaultImage from "../../assets/images/default/default-product-img.png";
import styles from "./ProductCategoryItem.module.css";

interface ProductCategoryItemProps {
  data: Product[];
  image: string | undefined;
  text: string | undefined;
}

function ProductCategoryItem({ data, image, text }: ProductCategoryItemProps) {
  const styleImg = {
    backgroundImage: `url(${image})`,
  };

  const { isLogedIn, users } = useSelector((state: RootState) => state.login);

  const productItemMap = data.map((item) => {
    const findUser = users.find((login) => login.login === isLogedIn);

    const likeOrNot = findUser?.likes?.includes(item.id) || false;
    const inCartOrNot = findUser?.cart?.includes(item.id) || false;
    const image = item.images[0] ?? defaultImage;

    return (
      <ProductItem
        key={item.id}
        id={item.id}
        category={item.category}
        rating={item.rating}
        availability={item.availability}
        image={image}
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

  return (
    <div className={styles["product-wrapper"]}>
      <div className={styles["product-wrapper__image"]} style={styleImg}>
        <div className={styles["product-wrapper__text"]}>{text}</div>
        <a className={styles["product-wrapper__link"]} href="#">
          See All Products
        </a>
      </div>
      <div className={styles["product-list"]}>{productItemMap}</div>
    </div>
  );
}

export default ProductCategoryItem;
