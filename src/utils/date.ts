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
