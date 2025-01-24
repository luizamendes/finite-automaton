import { modThree } from "./ModThreeAutomaton/ModThreeAutomaton";

// thirteen => 1
console.log(modThree("1101"));

// fourteen => 2
console.log(modThree("1110"));

// fifteen => 0
console.log(modThree("1111"));

// invalid entry => error
console.log(modThree("Luiza"));
