import { deleteUserAPI, fetchUserAPI, updateUserAPI } from '../../services/users.api';

export class UserTableFacade {
    static getUsers() {
        return fetchUserAPI()
    }

    static updateUser(id: number, payload: any) {
        return updateUserAPI(id, payload);
    }

    static deleteUser(id: number) {
        return deleteUserAPI(id);
    }
}
