import React from 'react';
import { OptionForm } from '..';
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header__feature">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <OptionForm />
        </div>
    )
}

export default Header
