import { RepositoryResultStatus } from './enums';

export interface IRepositoryResponse<Data = undefined> {
    status: RepositoryResultStatus;
    data?: Data;
}

export interface IPaginationPayload {
    limit?: number;
    offset?: number;
}

export interface IPagination<Item> {
    items: Item[];
    totalCount: number;
}
