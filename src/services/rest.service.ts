//todo use dynamic apiUrl for different environment
import { APIErrorResponse, APIResponse, RestMethods } from '../models/services.model';
const apiUrl = 'https://jsonplaceholder.typicode.com';

export const FetchAPI = async <T, E = any>( // <T, E = any> is generic type, we must specify the type of T, however we can skip the type of E, it will be by default be any
    url: string,
    method: RestMethods,
    init?: RequestInit & { query?: Record<string, any> },
): Promise<APIResponse<T> | APIErrorResponse<E>> => {
    const urlWithQueryParams = new URL(apiUrl + url);
    return window
        .fetch(urlWithQueryParams.toString(), {
            method,
            ...init,
            headers: {
                ...init?.headers,
            },
        })
        .then(async response => {
            if (response.ok || response.status < 400) {
                const json = await response.json();
                return {
                    data: json,
                } as APIResponse<T>;
            }
            // convert non-2xx HTTP responses into errors:
            const json = await response.json();
            return Promise.resolve<APIErrorResponse>({ error: json });
        })
        .catch(e => {
            console.error(e);
            return Promise.resolve<APIErrorResponse>({
                error: {
                    errors: ['We are unable to process your request at this time!'],
                },
            });
        });
};
