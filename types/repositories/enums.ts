export enum RepositoryResultStatus {
    Success = 200,
    Created = 201,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    Conflict = 409,
    DataTooLarge = 413,
    NotDocumentedError = 500,
}
