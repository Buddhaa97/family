import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState
} from '@reduxjs/toolkit';
import { UserTableModel } from '../../models/user-table.models';
import { deleteUserAPI, fetchUserAPI, updateUserAPI } from '../../services/users.api';
import { commonResponseHandler } from '../../utils';
import { UserTableFacade } from "./user-table.facade";

export const USER_TABLE_KEY = 'users'

export interface UsersTableState extends EntityState<UserTableModel> {
    loadingStatus: 'idle' | 'loading' | 'loaded' | 'error',
    errors: string[],
}

export const usersTableAdapter = createEntityAdapter<UserTableModel>({
    selectId: (user) => user.id,
})

const initialUserTableState: UsersTableState = usersTableAdapter.getInitialState({
    loadingStatus: 'idle',
    errors: []
})

const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        return await commonResponseHandler(UserTableFacade.getUsers(), null, thunkAPI);
    }
);

const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({id, payload}: { id: number, payload: any }, thunkAPI) => {
        return await commonResponseHandler(
            UserTableFacade.updateUser(id, payload),
            null,
            thunkAPI,
        );
    }
);

const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id: number, thunkAPI) => {
        return await commonResponseHandler(
            UserTableFacade.deleteUser(id),
            null,
            thunkAPI,
        );
    }
);

export const usersTableSlice = createSlice({
    name: USER_TABLE_KEY,
    initialState: initialUserTableState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loadingStatus = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loadingStatus = 'loaded';
            usersTableAdapter.setAll(state, action.payload);
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loadingStatus = 'error';
            state.errors = action.payload as string[]
        })
        .addCase(deleteUser.pending, (state) => {
            state.loadingStatus = 'loading'
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loadingStatus = 'loaded';
            usersTableAdapter.removeOne(state, action.meta.arg)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loadingStatus = 'error';
            state.errors = action.payload as string[];
        })
        .addCase(updateUser.pending, (state) => {
            state.loadingStatus = 'loading';
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loadingStatus = 'loaded';
            usersTableAdapter.updateOne(state, action.payload);
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loadingStatus = 'error';
            state.errors = action.payload as string[];
        })
    }

})

export const usersTableReducer = usersTableSlice.reducer;

export const userTableAction = {
    ...usersTableSlice.actions,
    fetchUsers,
    deleteUser,
    updateUser
};

const { selectAll, selectById } = usersTableAdapter.getSelectors();

export const selectStates = (rootState: any): UsersTableState =>
rootState[USER_TABLE_KEY] as UsersTableState;

export const selectUsers = createSelector(selectStates, selectAll);
export const selectByUserId = (entityId: number) => {
    return createSelector(selectStates, state => selectById(state, entityId))
}
