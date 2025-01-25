import { FiniteAutomatonError } from "../FiniteAutomaton";
import { doesInputEndWithA } from "./DoesItEndWithA";

try {
  console.log(doesInputEndWithA("abba"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err:", err.message);
  }
}

try {
  console.log(doesInputEndWithA("ab"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err:", err.message);
  }
}

// invalid entry => error
try {
  console.log(doesInputEndWithA("Luiza"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err:", err.message);
  }
}
