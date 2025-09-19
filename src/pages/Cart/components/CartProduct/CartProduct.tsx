import CloseIcon from "../../../../ui/CloseIcon/CloseIcon";
import EditIcon from "../../../../ui/EditIcon/EditIcon";

import defaultImage from "../../../../assets/images/default/default-product-img.png";
import styles from "./CartProduct.module.css";

interface CartProductProps {
  id: number;
  images: string[];
  description: string;
  price: number;
  quantity: number;
}

function CartProduct({
  id,
  images,
  description,
  price,
  quantity,
}: CartProductProps) {
  const image = images[0] ? images[0] : defaultImage;

  const handleFocusQuantityProduct = (): void => {
    console.log("focus");
  };

  const handleDeleteProduct = (): void => {
    console.log("delete");
  };

  return (
    <div key={id} className={styles["cart-product__item"]}>
      <div className={styles["cart-product__item-image"]}>
        <img
          className={styles["cart-product__item-img"]}
          src={image}
          alt="product"
        />
      </div>
      <div className={styles["cart-product__item-text"]}>{description}</div>
      <div className={styles["cart-product__item-price"]}>${price}</div>
      <div className={styles["cart-product__item-qty"]}>{quantity}</div>
      <div className={styles["cart-product__item-subtotal"]}>
        ${price * quantity}
      </div>
      <div className={styles["cart-product__item-btns"]}>
        <CloseIcon onClick={handleDeleteProduct} />
        <EditIcon onClick={handleFocusQuantityProduct} />
      </div>
    </div>
  );
}

export default CartProduct;
