const formatPrice = (number: number) => {
  const price = Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    number
  );
  return price;
};

export default formatPrice;
