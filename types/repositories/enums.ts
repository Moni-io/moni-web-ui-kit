export enum RepositoryResultStatus {
    Success = 200,
    Created = 201,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    Conflict = 409,
    DataTooLarge = 413,
    ExpectationFailed = 417,
    UnprocessableEntity = 422,
    NotDocumentedError = 500,
    GatewayTimeout = 504,
}
