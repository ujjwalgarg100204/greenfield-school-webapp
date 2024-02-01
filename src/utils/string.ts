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
