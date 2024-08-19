import { describe, expect, it } from "vitest";
import {
  assertNumber,
  isNumber
} from "..";
import { AssertionError } from "assert";

describe("isNumber", () => {
  it("Should return true if the parameter is a number", () => {
    expect(isNumber(0)).toStrictEqual(true);
    expect(isNumber("0")).toStrictEqual(true);
    expect(isNumber({test: "test"})).toStrictEqual(false);
  });
});


describe("assertObject", () => {
  it("Should not throw an error if the parameter is an object", () => {
    expect(() =>
      assertNumber(0, "Test Assert Number", null as unknown as string),
    ).not.toThrow();

    expect(() =>
      assertNumber(
        { test: "test" },
        "Test Assert Non Number",
        null as unknown as string,
      ),
    ).toThrow(AssertionError);
  });
});