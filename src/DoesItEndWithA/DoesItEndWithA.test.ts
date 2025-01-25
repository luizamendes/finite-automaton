import { doesInputEndWithA } from "./DoesItEndWithA";

describe("doesInputEndWithA", () => {
  it(`should return true if input ends with 'a'`, () => {
    expect(doesInputEndWithA("abba")).toBeTruthy();
  });

  it(`should return false if input does not end with 'a'`, () => {
    expect(doesInputEndWithA("aabb")).toBeFalsy();
  });
});
