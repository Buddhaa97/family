import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../state/store/store';
import { selectByUserId, userTableAction } from '../../state/user-table/user-table.slice';
import { SUserDetailPage } from './styles/user-detail';
import { UserTableModel } from '../../models/user-table.models';

export const UserDetail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialValues : UserTableModel = {
        id: -1,
        name: '',
        email: ''
    }
    const user = useAppSelector(selectByUserId(Number(id)))

    if(user) {
        initialValues.id = user.id;
        initialValues.name = user.name;
        initialValues.email = user.email
    }

    const onSubmit = async (values: UserTableModel) => {
        if(values) {
            const payload = { id: values.id, payload: values }
            const res = await dispatch(userTableAction.updateUser(payload));
            res.meta.requestStatus === 'fulfilled' && navigate('/users');
        }

    }

  return (
    <SUserDetailPage>
        <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
       >
         <Form className='formBody'>
            <div className='formControl'>
                <label className='pr-2' htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="name" />
            </div>
            <div className='formControl'>
                <label className='pr-2' htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="email address" />
            </div>
            <div className='text-right'>
                <button type="submit">Submit</button>
            </div>
         </Form>
       </Formik>
    </SUserDetailPage>
  )
}
