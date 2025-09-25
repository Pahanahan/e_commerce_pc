import { DiscountCode } from "../types/types";

const generateDiscountCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  const discount: DiscountCode = {
    discountName: result,
    discount: 0.1,
  };

  return discount;
};

export default generateDiscountCode;
