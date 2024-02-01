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

/**
 * Adds or subtracts the specified number of days to a given date.
 * @param date - The date to be modified.
 * @param days - The number of days to add or subtract.
 * @returns A new Date object with the specified number of days added or subtracted.
 */
export const addOrSubtractDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
};

/**
 * Converts a string to kebab case.
 * @param str - The string to convert.
 * @param separator - The separator to use. Defaults to whitespace.
 * @returns The kebab-cased string.
 */
export const toKebabCase = (str: string, separator?: string) => {
    return str.replaceAll(separator ?? /\s/g, "-").toLowerCase();
};

/**
 * Converts a string to sentence case.
 * @param str - The string to convert.
 * @param separator - The separator to used in string
 * @returns The sentence-cased string.
 */
export const toSentenceCase = (str: string, separator?: string) => {
    return str.replaceAll(separator ?? /\s/g, " ").toLowerCase();
};
