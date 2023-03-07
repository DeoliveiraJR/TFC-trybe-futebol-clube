export default class Unauthorized extends Error {
  public statusCode: 401;
  public name: 'AppError';

  constructor(message: string) {
    super(message);
    this.statusCode = 401;
    this.name = 'AppError';
  }
}