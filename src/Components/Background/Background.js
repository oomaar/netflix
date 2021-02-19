import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Nav } from '..';
import { selectLogin } from '../../features/loginSlice';
import { SignInScreen } from '../../Screens';
import "./styles/Background.css";

const Background = () => {
    const login = useSelector(selectLogin);
    return (
        <div className="background">
            <div className="background__bg">
                <Nav />
                {login ? <SignInScreen /> : <Header />}
            </div>
        </div>
    )
};

export default Background;
