class ApiError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

  static Forbiden(message) {
    return new ApiError(403, message);
  }

  static internalError(message) {
    return new ApiError(500, message);
  }
}

module.exports = ApiError;
