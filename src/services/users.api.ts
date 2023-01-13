import { RestMethods } from '../models/services.model';
import { FetchAPI } from './rest.service';
import { UserTableModel } from "../models/user-table.models";

export const deleteUserAPI = (id: number) => {
    return FetchAPI<{ user: UserTableModel }>(`/users/${id}`, RestMethods.Delete);
};

export const fetchUserAPI = () => {
    return FetchAPI<{ user: UserTableModel[] }>(`/users`, RestMethods.Get);
};

export const updateUserAPI = (id: number, payload: any) => {
    return FetchAPI<{ user: UserTableModel }>(`/users/${id}`, RestMethods.Put, {
        body: payload,
    });
};
