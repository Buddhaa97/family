import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/store/store';
import { userTableAction, selectUsers } from '../../state/user-table/user-table.slice';
import { SUsersPage } from './styles/users-styles';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);

    useEffect(() => {
        dispatch(userTableAction.fetchUsers());
    }, []);

    const onUserUpdate = (id: number) => {
        navigate(`/user-details/${id}`);
    }

    const onUserDelete = (id: number) => {
        dispatch(userTableAction.deleteUser(id))
    }

  return (
    <SUsersPage>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user?.company?.name}</td>
                        <td>{user?.address?.city}</td>
                        <td>{user?.phone}</td>
                        <td>
                            <button onClick={() => onUserUpdate(user.id)}>Update</button>
                            <button onClick={() => onUserDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </SUsersPage>
  )
}
