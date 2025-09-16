import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ProductItem from "../ProductItem/ProductItem";
import {
  addFilter,
  applyFilters,
  deleteFilters,
} from "../../redux/products/reducers";
import { scrollTop } from "../../utils/scrollTop";
import { Product } from "../../types/types";
import { RootState } from "../../redux/store";

import defaultImage from "../../assets/images/default/default-product-img.png";
import styles from "./ProductCategoryItem.module.css";

interface ProductCategoryItemProps {
  data: Product[];
  image: string | undefined;
  text: string | undefined;
  link: string;
}

function ProductCategoryItem({
  data,
  image,
  text,
  link,
}: ProductCategoryItemProps) {
  const dispatch = useDispatch();

  const styleImg = {
    backgroundImage: `url(${image})`,
  };

  const { isLogedIn, users } = useSelector((state: RootState) => state.login);

  const handleAddFilterApplyFilter = (link: string) => {
    dispatch(deleteFilters());
    dispatch(addFilter({ type: "category", value: link }));
    dispatch(applyFilters());
    scrollTop();
  };

  const productItemMap = data.map((item) => {
    const findUser = users.find((login) => login.login === isLogedIn);
    const image = item.images[0] ?? defaultImage;

    const likeOrNot = findUser?.likes?.includes(item.id) || false;
    const inCartOrNot: boolean =
      !!findUser?.cart?.find((product) => product.id === item.id) || false;

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
        <Link
          onClick={() => handleAddFilterApplyFilter(link)}
          to="/products"
          className={styles["product-wrapper__link"]}
        >
          See All Products
        </Link>
      </div>
      <div className={styles["product-list"]}>{productItemMap}</div>
    </div>
  );
}

export default ProductCategoryItem;
