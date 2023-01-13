export enum RestMethods {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
}

export interface APIResponse<T> {
    data: T;
    error?: any;
}

export type APIError<T = any> = { errors: string[] } & T;
export type APIErrorResponse<T = any> = {
    data?: never;
    error: APIError<T>;
};
