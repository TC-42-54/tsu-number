import assert, { AssertionError } from 'assert';

export const isNumber = (nbr: unknown) =>
  !isNaN(nbr as number) && typeof +nbr === 'number';
export const assertNumber = (
  number: unknown,
  functionName: string,
  message: string,
) =>
  assert.equal(
    isNumber(number),
    true,
    new AssertionError({
      message: `ERROR - [${functionName}] - ${message}`,
      actual: number,
    }),
  );
