import { memo } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import CurrentSelectProduct from "../../../../components/CurrentSelectProduct/CurrentSelectProduct";
import { scrollTop } from "../../../../utils/scrollTop";
import { joinStringWithoutSpace } from "../../../../utils/joinStringWithoutSpace";
import { addOrDeleteToCart } from "../../../../redux/user/reducers";
import CloseIcon from "../../../../ui/CloseIcon/CloseIcon";
import EditIcon from "../../../../ui/EditIcon/EditIcon";
import formatPrice from "../../../../utils/formatPrice/formatPrice";

import defaultImage from "../../../../assets/images/default/default-product-img.png";
import styles from "./CartProduct.module.css";

interface CartProductProps {
  id: number;
  images: string[];
  description: string;
  price: number;
  quantity: number;
  isLogedIn: string;
  category: string;
}

function CartProduct({
  id,
  images,
  description,
  price,
  quantity,
  isLogedIn,
  category,
}: CartProductProps) {
  const dispatch = useDispatch();
  const image = images[0] ? images[0] : defaultImage;

  const validCategory = joinStringWithoutSpace(category);

  const handleDeleteProduct = (): void => {
    const payload = {
      login: isLogedIn,
      productId: id,
    };

    dispatch(addOrDeleteToCart(payload));
  };

  return (
    <div key={id} className={styles["cart-product__item"]}>
      <div className={styles["cart-product__item-box"]}>
        <div className={styles["cart-product__item-image"]}>
          <Link onClick={scrollTop} to={`/products/${validCategory}(id)${id}`}>
            <img
              className={styles["cart-product__item-img"]}
              src={image}
              alt="product"
            />
          </Link>
        </div>
        <div className={styles["cart-product__item-text"]}>{description}</div>
      </div>

      <div className={styles["cart-product__item-box"]}>
        <p className={styles["cart-product__item-p"]}>Price:</p>
        <div className={styles["cart-product__item-price"]}>
          ${formatPrice(price)}
        </div>
      </div>
      <div className={styles["cart-product__item-box"]}>
        <p className={styles["cart-product__item-p"]}>Qty:</p>
        <div className={styles["cart-product__item-qty"]}>
          <CurrentSelectProduct
            id={id}
            quantity={quantity}
            isLogedIn={isLogedIn}
          />
        </div>
      </div>
      <div className={styles["cart-product__item-box"]}>
        <p className={styles["cart-product__item-p"]}>Subtotal:</p>
        <div className={styles["cart-product__item-subtotal"]}>
          ${formatPrice(price * quantity)}
        </div>
      </div>
      <div className={styles["cart-product__item-btns"]}>
        <CloseIcon onClick={handleDeleteProduct} />
        <Link onClick={scrollTop} to={`/products/${validCategory}(id)${id}`}>
          <EditIcon />
        </Link>
      </div>
    </div>
  );
}

export default memo(CartProduct);
