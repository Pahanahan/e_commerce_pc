import formatPrice from "../../../../../../utils/formatPrice/formatPrice";

import styles from "./Subtotal.module.css";

interface SubtotalProps {
  tax: number;
  taxName: string;
  shippingRate: number;
  delivery: "standard" | "pickup";
  totalPrice: number;
  discount: number;
}

function Subtotal({
  tax,
  taxName,
  shippingRate,
  delivery,
  totalPrice,
  discount,
}: SubtotalProps) {
  const costDelivery = Number(totalPrice * shippingRate);
  const shipping = Number(delivery === "pickup" ? 0 : costDelivery);
  const costTax = Number(((totalPrice + costDelivery) * tax) / 100);
  const costDiscount = totalPrice * discount;
  const costWithDiscount = totalPrice - costDiscount;
  const orderTotal = shipping + costTax + costWithDiscount;

  return (
    <div className={styles["subtotal"]}>
      <div className={styles["subtotal__box"]}>
        <div className={styles["subtotal__box-text"]}>Subtotal</div>
        <div className={styles["subtotal__box-price"]}>
          ${formatPrice(totalPrice)}
        </div>
      </div>
      {discount ? (
        <div className={styles["subtotal__box"]}>
          <div className={styles["subtotal__box-text"]}>Discount</div>
          <div className={styles["subtotal__box-price"]}>
            ${formatPrice(costDiscount)}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles["subtotal__box"]}>
        <div className={styles["subtotal__box-text"]}>Shipping</div>
        <div className={styles["subtotal__box-price"]}>
          ${formatPrice(shipping)}
        </div>
      </div>
      <div className={styles["subtotal__box"]}>
        <div className={styles["subtotal__box-text"]}>
          {taxName} ({tax}%)
        </div>
        <div className={styles["subtotal__box-price"]}>
          ${formatPrice(costTax)}
        </div>
      </div>
      <div className={styles["subtotal__box"]}>
        <div className={styles["subtotal__box-text"]}>Order Total</div>
        <div className={styles["subtotal__box-price-total"]}>
          ${formatPrice(orderTotal)}
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
