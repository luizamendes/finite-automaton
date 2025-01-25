import { FiniteAutomatonError } from "./FiniteAutomaton/FiniteAutomatonError/FiniteAutomatonError";
import { modThree } from "./ModThree/ModThree";

// thirteen => 1
try {
  console.log(modThree("1101"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err", err.message);
  }
}

// fourteen => 2
try {
  console.log(modThree("1110"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err", err.message);
  }
}

// fifteen => 0
try {
  console.log(modThree("1111"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err", err.message);
  }
}

// invalid entry => error
try {
  console.log(modThree("Luiza"));
} catch (err) {
  if (err instanceof FiniteAutomatonError) {
    console.log("Err", err.message);
  }
}
