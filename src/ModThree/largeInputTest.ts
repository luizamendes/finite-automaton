import { modThree } from "./ModThree";

function generateLargeInput(size: number): string {
  let input = "";
  for (let i = 0; i < size; i++) {
    input += i % 2 === 0 ? "0" : "1";
  }
  return input;
}

const largeInput = generateLargeInput(1000000);

console.time("processLargeInput");

const result = modThree(largeInput);
console.log("Result:", result);

console.timeEnd("processLargeInput");
