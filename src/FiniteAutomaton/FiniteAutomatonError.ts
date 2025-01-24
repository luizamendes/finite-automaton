export class FiniteAutomatonError extends Error {
  name: string;
  message: string;

  constructor(args: { name: string; message: string }) {
    super();
    this.name = args.name;
    this.message = args.message;
  }
}
