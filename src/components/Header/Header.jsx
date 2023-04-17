import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {
    const {user, logOut}=useContext(AuthContext)

    const handleLogout =()=>{
        logOut()
        .then(result=>{})
        .catch(error=>console.error(error));
        // console.log('error');
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/singup">Sing Up</Link>
                <Link to="/login">Login</Link>
                {user && <span className='color-white'>Welcome {user.email} <button onClick={handleLogout}>Sing Out</button></span>}
            </div> 
        </nav>
    );
};

export default Header;