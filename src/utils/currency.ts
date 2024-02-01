/**
 * Formats a number as currency in Indian Rupees.
 * @param number - The number to format.
 * @param options - Optional configuration options for the formatter.
 * @returns The formatted currency string.
 */
export const formatCurrency = (
    number: number,
    options?: Intl.NumberFormatOptions,
): string => {
    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 2,
        ...options,
    });

    return formatter.format(number).replace("₹", "₹ ");
};
