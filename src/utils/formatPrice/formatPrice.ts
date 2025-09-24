const formatPrice = (number: number) => {
  const price = Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    Number(number.toFixed(2))
  );

  return price;
};

export default formatPrice;
