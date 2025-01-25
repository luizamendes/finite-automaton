# Finite Automaton

The FiniteAutomaton class can be found in `src/FiniteAutomaton/FiniteAutomaton.ts` along with tests and an Error class

The ModThree implementation can be found in `src/ModThree/ModThree.ts` along with tests

I also implemented a function that checks if a string ends with 'a' using the FiniteAutomaton, you can find it here `src/DoesItEndWithA/DoesItEndWithA.ts`

## How to run

`npm install` to install the dependencies

`npm start` will run modThree examples in `src/index.ts`

`npm run start:extra` will run doesItEndWithA examples found in `src/DoesItEndWithA/index.ts`

`npm test` will run all tests

`npm run test-large-input` will run a test with a large input (1M characters) and print the result for modThree and how long it took
