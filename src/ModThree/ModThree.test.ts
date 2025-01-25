import { FiniteAutomatonError } from "../FiniteAutomaton/FiniteAutomatonError/FiniteAutomatonError";
import { modThree } from "./ModThree";

describe("modThree", () => {
  it("should return correct remainder for binary numbers", () => {
    expect(modThree("1101")).toBe(1);
    expect(modThree("1110")).toBe(2);
    expect(modThree("1111")).toBe(0);
  });

  it("should log error for invalid characters", () => {
    expect(() => modThree("1234")).toThrow(
      new FiniteAutomatonError({
        name: "invalid_input",
        message: 'Input "1234" contains invalid characters.',
      })
    );
  });
});
