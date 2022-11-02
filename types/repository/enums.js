export var RepositoryResultStatus;
(function (RepositoryResultStatus) {
    RepositoryResultStatus[RepositoryResultStatus["Success"] = 200] = "Success";
    RepositoryResultStatus[RepositoryResultStatus["Created"] = 201] = "Created";
    RepositoryResultStatus[RepositoryResultStatus["Unauthorized"] = 401] = "Unauthorized";
    RepositoryResultStatus[RepositoryResultStatus["Forbidden"] = 403] = "Forbidden";
    RepositoryResultStatus[RepositoryResultStatus["NotFound"] = 404] = "NotFound";
    RepositoryResultStatus[RepositoryResultStatus["Conflict"] = 409] = "Conflict";
    RepositoryResultStatus[RepositoryResultStatus["DataTooLarge"] = 413] = "DataTooLarge";
    RepositoryResultStatus[RepositoryResultStatus["NotDocumentedError"] = 500] = "NotDocumentedError";
})(RepositoryResultStatus || (RepositoryResultStatus = {}));
