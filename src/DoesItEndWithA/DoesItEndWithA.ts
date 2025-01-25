import { FiniteAutomaton, FiniteAutomatonError } from "../FiniteAutomaton";

export type DoesItEndWithAState = "q0" | "q1";
function createDoesItEndWithAAutomaton(): FiniteAutomaton<DoesItEndWithAState> {
  const states = new Set<DoesItEndWithAState>(["q0", "q1"]);
  const alphabet = new Set(["a", "b"]);
  const initialState: DoesItEndWithAState = "q0";
  const finalStates = new Set<DoesItEndWithAState>(["q1"]);

  const transitionFunction = new Map<
    DoesItEndWithAState,
    Map<string, DoesItEndWithAState>
  >([
    [
      "q0",
      new Map([
        ["b", "q0"],
        ["a", "q1"],
      ]),
    ],
    [
      "q1",
      new Map([
        ["b", "q0"],
        ["a", "q1"],
      ]),
    ],
  ]);

  return new FiniteAutomaton({
    states,
    alphabet,
    initialState,
    finalStates,
    transitionFunction,
  });
}

const doesItEndWithAAutomaton = createDoesItEndWithAAutomaton();
export const doesInputEndWithA = (input: string) => {
  try {
    doesItEndWithAAutomaton.process(input);
    return true;
  } catch (err) {
    if (err instanceof FiniteAutomatonError) {
      if (err.name === "invalid_result") return false;
      throw err;
    }
  }
};
