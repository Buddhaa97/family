import { FetchAPI } from "./rest.service"
import { RestMethods } from "../models/services.model";
import { UserTableModel } from "../models/user-table.models";

export const fetchUsersAPI = () => {
    return FetchAPI<{users: UserTableModel[]}>('/users', RestMethods.Get);
}
