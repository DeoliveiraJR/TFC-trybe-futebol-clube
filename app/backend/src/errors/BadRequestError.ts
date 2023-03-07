export default class BadRequest extends Error {
  public statusCode: 400;
  public name: 'AppError';

  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.name = 'AppError';
  }
}