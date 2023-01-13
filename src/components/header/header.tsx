import {Link} from 'react-router-dom';
import SNavbar from './styles/navbar.styles';

const Header = () => {
    return (
        <SNavbar>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </SNavbar>
    );
}

export default Header;
