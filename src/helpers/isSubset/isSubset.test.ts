import { isSubset } from "./isSubset";

describe("isSubset", () => {
  it("should return true if set is subset of superset", () => {
    expect(
      isSubset({
        subset: new Set(["Luiza"]),
        superset: new Set(["Luiza", "Mendes"]),
      })
    ).toBeTruthy();
  });

  it("should return false if set is not subset of superset", () => {
    expect(
      isSubset({
        subset: new Set(["John Doe"]),
        superset: new Set(["Luiza", "Mendes"]),
      })
    ).toBeFalsy();
  });
});
