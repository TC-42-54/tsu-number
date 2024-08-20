import crypto from 'crypto';
import { isNumber } from '..';
export const parseNumber = (value: unknown) => {
  return isNumber(value) ? +value : null;
};
export const getRandomInt = (
  min = 0,
  max: number,
  excludeValues: number[],
): number => {
  let randomInt = crypto.randomInt(min, max);

  while (excludeValues.includes(randomInt)) {
    randomInt = crypto.randomInt(min, max);
  }

  return randomInt;
};
