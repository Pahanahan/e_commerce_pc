import { Link } from "react-router-dom";

import CurrentSelectProduct from "../../../../components/CurrentSelectProduct/CurrentSelectProduct";
import { scrollTop } from "../../../../utils/scrollTop";
import { joinStringWithoutSpace } from "../../../../utils/joinStringWithoutSpace";
import CloseIcon from "../../../../ui/CloseIcon/CloseIcon";
import EditIcon from "../../../../ui/EditIcon/EditIcon";
import formatPrice from "../../../../utils/formatPrice";

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
  const image = images[0] ? images[0] : defaultImage;

  const validCategory = joinStringWithoutSpace(category);

  const handleFocusQuantityProduct = (): void => {
    console.log("focus");
  };

  const handleDeleteProduct = (): void => {
    console.log("delete");
  };

  return (
    <div key={id} className={styles["cart-product__item"]}>
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
      <div className={styles["cart-product__item-price"]}>
        ${formatPrice(price)}
      </div>
      <div className={styles["cart-product__item-qty"]}>
        <CurrentSelectProduct
          id={id}
          quantity={quantity}
          isLogedIn={isLogedIn}
        />
      </div>
      <div className={styles["cart-product__item-subtotal"]}>
        ${formatPrice(price * quantity)}
      </div>
      <div className={styles["cart-product__item-btns"]}>
        <CloseIcon onClick={handleDeleteProduct} />
        <EditIcon onClick={handleFocusQuantityProduct} />
      </div>
    </div>
  );
}

export default CartProduct;
