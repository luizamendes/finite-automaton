import { FiniteAutomatonErrorName } from "./FiniteAutomatonErrorNames.type";

export class FiniteAutomatonError extends Error {
  name: FiniteAutomatonErrorName;
  message: string;

  constructor(args: { name: FiniteAutomatonErrorName; message: string }) {
    super();
    this.name = args.name;
    this.message = args.message;
  }
}
