export const formatCurrency = (number: number): string => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: 2,
  });

  return formatter.format(number).replace("₹", "₹ ");
};

export const addOrSubtractDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
};
