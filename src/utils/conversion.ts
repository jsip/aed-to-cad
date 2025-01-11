import { AEDCADRate } from "./rate";

/**
 * Converts an amount from AED to CAD
 * @param {number} amount The amount in AED
 * @returns {number} The amount in CAD
 */
export const convertAEDtoCAD = (amount: number): number => amount * AEDCADRate();