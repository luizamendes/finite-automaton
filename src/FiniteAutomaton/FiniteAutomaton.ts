import { isSubset } from "../helpers/isSubset/isSubset";
import { FiniteAutomatonError } from "./";

type Char = string;

export class FiniteAutomaton<T> {
  private states: Set<T>;
  private alphabet: Set<Char>;
  private initialState: T;
  private finalStates: Set<Partial<T>>;
  private transitionFunction: Map<T, Map<Char, T>>;

  constructor(args: {
    states: Set<T>;
    alphabet: Set<Char>;
    initialState: T;
    finalStates: Set<Partial<T>>;
    transitionFunction: Map<T, Map<Char, T>>;
  }) {
    this.states = args.states;
    this.alphabet = args.alphabet;

    if (!this.states.has(args.initialState)) {
      throw new FiniteAutomatonError({
        name: "invalid_initial_state",
        message: "Initial state is not listed in states",
      });
    }
    this.initialState = args.initialState;

    if (!isSubset({ subset: args.finalStates, superset: this.states })) {
      throw new FiniteAutomatonError({
        name: "invalid_final_states",
        message: "Final states must be a subset of the defined states",
      });
    }

    this.finalStates = args.finalStates;
    this.transitionFunction = args.transitionFunction;
  }

  private isInputInvalid(input: string) {
    return input.split("").some((char) => !this.alphabet.has(char));
  }

  private getNextState(currentState: T, char: Char): T {
    const nextState = this.transitionFunction.get(currentState)?.get(char);
    if (!nextState) {
      throw new FiniteAutomatonError({
        name: "invalid_transition",
        message: `No valid transition for character "${char}" from state "${currentState}"`,
      });
    }
    return nextState;
  }

  process(input: string): T {
    if (this.isInputInvalid(input)) {
      throw new FiniteAutomatonError({
        name: "invalid_input",
        message: `Input "${input}" contains invalid characters.`,
      });
    }

    let currentState = this.initialState;

    for (const char of input) {
      currentState = this.getNextState(currentState, char);
    }

    if (!this.finalStates.has(currentState)) {
      throw new FiniteAutomatonError({
        name: "invalid_result",
        message: `Input "${input}" did not end in a final state.`,
      });
    }

    return currentState;
  }
}
