import { NavigationModel } from '../navigation-model';
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Counter from '../../pages/counter/counter';
import Error from '../../pages/error/error';
import AboutDetail from '../../components/about-detail/about-detail';
import { Users } from '../../pages/users/users';
import { UserDetail } from '../../pages/user-detail/user-detail';

export const ROUTE_CONSTANT: NavigationModel[] = [
    {
        name: '/',
        page: Home,
    },
    {
        name: '/about',
        page: About,
    },
    {
        name: '/counter',
        page: Counter,
    },
    {
        name: '*',
        page: Error,
    },
    {
        name: '/about-detail',
        page: AboutDetail,
    },
    {
        name: '/users',
        page: Users
    },
    {
        name: '/user-details/:id',
        page: UserDetail
    }
]
