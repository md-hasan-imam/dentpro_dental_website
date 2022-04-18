import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };


    return (
        <header className='navigation container-fluid'>
            <div className="row header-container my-3 mx-auto ">
                <div className='col-lg-4' >
                    <img src={logo} alt="" style={{ width: '70px' }} />
                </div>
                <div className='navigation-links text-xl col-lg-8 '>
                    <Link to='/home'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link> 
                    {
                        (user) ? <button className='btn btn-primary ms-3' onClick={logout}>Logout</button> 
                        :
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;