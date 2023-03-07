export default class NotFound extends Error {
  public statusCode: 404;
  public name: 'AppError';

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.name = 'AppError';
  }
}

/* export class BadRequest extends Error {
  public statusCode: number = 500;
  public name: string = 'AppError';

  constructor(message: string) {
    super(message);
  }
} */

// export default { NotFound, BadRequest };