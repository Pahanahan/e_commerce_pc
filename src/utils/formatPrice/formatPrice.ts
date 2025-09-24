const formatPrice = (number: number) => {
  const price = Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    Number(number.toFixed(2))
  );

  return price;
};

console.log(formatPrice(100));
// ("100.00");
console.log(formatPrice(-100));
// ("-100.00");
console.log(formatPrice(1.12345));
// ("1.23");
console.log(formatPrice(1000));
// ("1,100.00");
console.log(formatPrice(100000));
// ("100,100.00");
console.log(formatPrice(999.99));
// ("999.99");
console.log(formatPrice(1));
// ("1.00");
console.log(formatPrice(0));
// ("0.00");

export default formatPrice;
