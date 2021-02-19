import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin } from '../../features/loginSlice';
import "./styles/Nav.css";

const Nav = () => {
    const dispatch = useDispatch();

    const loginStatus = () => {
        dispatch(setLogin({ value: true }));
    }

    return (
        <div>
            <Link to="/">
                <img src="/images/logo.svg" alt="Netflix Logo" className="nav__logo" />
            </Link>
            <button onClick={loginStatus} className="nav__button">Sign In</button>
        </div>
    )
};

export default Nav;
