export class ApiResponse<T> {
  readonly error: boolean;
  readonly statusCode: number;
  readonly message: string;
  readonly data?: T;
  readonly pagination?: {
    page: number;
    limit: number;
    total: number;
  };

  constructor({
    error,
    statusCode,
    message,
    data,
    pagination,
  }: {
    error: boolean;
    statusCode: number;
    message: string;
    data?: T;
    pagination?: {
      page: number;
      limit: number;
      total: number;
    };
  }) {
    this.error = error;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.pagination = pagination;
  }
}
