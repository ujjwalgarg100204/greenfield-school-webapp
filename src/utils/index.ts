export const formatCurrency = (number: number): string => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: 2,
  });

  return formatter.format(number).replace("₹", "₹ ");
};
