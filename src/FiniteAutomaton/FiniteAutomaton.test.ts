import { FiniteAutomaton } from "./FiniteAutomaton";
import { FiniteAutomatonError } from "./FiniteAutomatonError/FiniteAutomatonError";

const states = new Set(["q0", "q1"]);
const alphabet = new Set(["a", "b"]);
const initialState = "q0";
const finalStates = new Set(["q1"]);
const transitionFunction = new Map([
  [
    "q0",
    new Map([
      ["a", "q1"],
      ["b", "q0"],
    ]),
  ],
  [
    "q1",
    new Map([
      ["a", "q1"],
      ["b", "q0"],
    ]),
  ],
]);

const baseArgs = {
  states,
  alphabet,
  initialState,
  finalStates,
  transitionFunction,
};

const automaton = new FiniteAutomaton<string>({ ...baseArgs });

describe("FiniteAutomaton", () => {
  describe("Constructor validations", () => {
    it("should throw error if initial state is not in states", () => {
      expect(
        () =>
          new FiniteAutomaton<string>({
            ...baseArgs,
            initialState: "q3",
          })
      ).toThrow(
        new FiniteAutomatonError({
          name: "invalid_initial_state",
          message: "Initial state is not listed in states",
        })
      );
    });

    it("should throw error if final states is not a subset of states", () => {
      expect(
        () =>
          new FiniteAutomaton<string>({
            ...baseArgs,
            finalStates: new Set("q3"),
          })
      ).toThrow(
        new FiniteAutomatonError({
          name: "invalid_final_states",
          message: "Final states must be a subset of the defined states",
        })
      );
    });
  });

  it("should correctly process valid inputs and reach a final state", () => {
    const result = automaton.process("abba");
    expect(result).toBe("q1");
  });

  it("should throw error for invalid characters in input", () => {
    expect(() => automaton.process("aac")).toThrow(
      new FiniteAutomatonError({
        name: "invalid_input",
        message: 'Input "aac" contains invalid characters.',
      })
    );
  });

  it("should throw error if input is not ending in a final state", () => {
    const invalidAutomaton = new FiniteAutomaton<string>({
      ...baseArgs,
      transitionFunction: new Map([
        ["q0", new Map([["a", "q1"]])],
        ["q1", new Map([["b", "q0"]])],
      ]),
    });

    expect(() => invalidAutomaton.process("ab")).toThrow(
      new FiniteAutomatonError({
        name: "invalid_result",
        message: 'Input "ab" did not end in a final state.',
      })
    );
  });

  it("should throw error if next state is not a valid state", () => {
    const invalidAutomaton = new FiniteAutomaton<string>({
      ...baseArgs,
      transitionFunction: new Map([
        ["q0", new Map([["a", "q3"]])],
        ["q1", new Map([["b", "q0"]])],
      ]),
    });

    expect(() => invalidAutomaton.process("ab")).toThrow(
      new FiniteAutomatonError({
        name: "invalid_transition",
        message: 'No valid transition for character "b" from state "q3"',
      })
    );
  });

  it("if input is an empty string and the initial state is a final state, should return initial state", () => {
    const automaton = new FiniteAutomaton<string>({
      ...baseArgs,
      finalStates: new Set(["q1", "q0"]),
    });

    const result = automaton.process("");
    expect(result).toBe("q0");
  });
});
