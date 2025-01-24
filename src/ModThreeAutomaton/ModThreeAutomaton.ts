import { FiniteAutomaton } from "../FiniteAutomaton";
import { FiniteAutomatonError } from "../FiniteAutomaton/FiniteAutomatonError";

export type ModThreeState = "S0" | "S1" | "S2";
function createModThreeAutomaton(): FiniteAutomaton<ModThreeState> {
  const states = new Set<ModThreeState>(["S0", "S1", "S2"]);
  const alphabet = new Set(["0", "1"]);
  const initialState: ModThreeState = "S0";
  const finalStates = new Set<ModThreeState>(["S0", "S1", "S2"]);

  const transitionFunction = new Map<ModThreeState, Map<string, ModThreeState>>(
    [
      [
        "S0",
        new Map([
          ["0", "S0"],
          ["1", "S1"],
        ]),
      ],
      [
        "S1",
        new Map([
          ["0", "S2"],
          ["1", "S0"],
        ]),
      ],
      [
        "S2",
        new Map([
          ["0", "S1"],
          ["1", "S2"],
        ]),
      ],
    ]
  );

  return new FiniteAutomaton({
    states,
    alphabet,
    initialState,
    finalStates,
    transitionFunction,
  });
}

const remainders: Record<ModThreeState, number> = {
  S0: 0,
  S1: 1,
  S2: 2,
};

const modThreeAutomaton = createModThreeAutomaton();
export const modThree = (input: string) => {
  try {
    const finalState = modThreeAutomaton.process(input);
    return remainders[finalState];
  } catch (err) {
    if (err instanceof FiniteAutomatonError) {
      console.log(err.message);
    }
  }
};
