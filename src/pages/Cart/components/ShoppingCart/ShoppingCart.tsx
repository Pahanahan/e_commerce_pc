import { Link } from "react-router-dom";

import ButtonShopping from "../../ui/ButtonShopping/ButtonShopping";
import CartProduct from "../CartProduct/CartProduct";
import { Product, User } from "../../../../types/types";

import styles from "./ShoppingCart.module.css";

interface ShoppingCartProps {
  isLogedIn: string;
  allProducts: Product[];
  findUser: User | undefined;
}

function ShoppingCart({ isLogedIn, allProducts, findUser }: ShoppingCartProps) {
  const disabled = isLogedIn ? true : false;

  const userCart = findUser?.cart;

  const userCartProducts = userCart?.flatMap((item) => {
    const filteredCartProducts = allProducts.filter(
      (product) => item.id === product.id
    );

    const newUserCartProducts = filteredCartProducts.map((product) => {
      return { ...product, quantity: item.quantity };
    });

    return newUserCartProducts;
  });

  let userCartProductsMap;

  if (userCartProducts) {
    userCartProductsMap = userCartProducts.map(
      ({ id, images, description, price, quantity, category }) => {
        return (
          <CartProduct
            key={id}
            id={id}
            images={images}
            description={description}
            price={price}
            quantity={quantity}
            isLogedIn={isLogedIn}
            category={category}
          />
        );
      }
    );
  }

  return (
    <div className={styles["shopping-cart"]}>
      <div className={styles["shopping-cart__top"]}>
        <div className={styles["shopping-cart__top-item-first"]}>Item</div>
        <div className={styles["shopping-cart__top-item"]}>Price</div>
        <div className={styles["shopping-cart__top-item"]}>Qty</div>
        <div className={styles["shopping-cart__top-item"]}>Subtotal</div>
      </div>
      <div className={styles["shopping-cart__items"]}>
        {userCartProductsMap}
      </div>
      <div className={styles["shopping-cart__bottom"]}>
        <div className={styles["shopping-cart__btns-left"]}>
          <ButtonShopping>
            <Link to="/products">Continue Shopping</Link>
          </ButtonShopping>
          <ButtonShopping disabled={disabled}>
            Clear Shopping Cart
          </ButtonShopping>
        </div>
        <ButtonShopping disabled={disabled}>
          Update Shopping Cart
        </ButtonShopping>
      </div>
    </div>
  );
}

export default ShoppingCart;
