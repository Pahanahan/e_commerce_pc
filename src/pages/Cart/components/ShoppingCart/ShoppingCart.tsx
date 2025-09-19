import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ButtonShopping from "../../ui/ButtonShopping/ButtonShopping";
import CartProduct from "../CartProduct/CartProduct";
import { clearCart } from "../../../../redux/user/reducers";
import { Product, User } from "../../../../types/types";

import styles from "./ShoppingCart.module.css";

interface ShoppingCartProps {
  isLogedIn: string;
  allProducts: Product[];
  findUser: User | undefined;
}

function ShoppingCart({ isLogedIn, allProducts, findUser }: ShoppingCartProps) {
  const dispatch = useDispatch();
  const userCart = findUser?.cart;

  let disabled: boolean;

  if (isLogedIn) {
    if (userCart && userCart.length > 0) {
      disabled = false;
    } else {
      disabled = true;
    }
  } else {
    disabled = true;
  }

  const userCartProducts = userCart?.flatMap((item) => {
    const filteredCartProducts = allProducts.filter(
      (product) => item.id === product.id
    );

    const newUserCartProducts = filteredCartProducts.map((product) => {
      return { ...product, quantity: item.quantity };
    });

    return newUserCartProducts;
  });

  let userCartProductsMap: React.ReactNode[] | React.ReactNode;

  if (userCartProducts && userCartProducts?.length > 0) {
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
  } else {
    const textCart = isLogedIn
      ? "Your cart is empty"
      : "Please sign up or log in to continue.";
    userCartProductsMap = (
      <div className={styles["shopping-cart__empty"]}>{textCart}</div>
    );
  }

  const handleClearCart = (): void => {
    dispatch(clearCart(isLogedIn));
  };

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
        <Link to="/products">
          <ButtonShopping>Continue Shopping</ButtonShopping>
        </Link>
        <ButtonShopping onClick={() => handleClearCart()} disabled={disabled}>
          Clear Shopping Cart
        </ButtonShopping>
      </div>
    </div>
  );
}

export default ShoppingCart;
