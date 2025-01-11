/**
 * Returns the rate of AED to CAD (hardcoded)
 * @returns {number} The rate of AED to CAD
 */
export const AEDCADRate = (): number => 0.3930;

/**
 * Returns a number with thousands delimiter and 2 decimal places
 * @param {number} x The number to format
 * @returns {string} The formatted number
 */
export const thousandsDelimiter = (x: number): string => new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(x);