import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Nav } from '..';
import { selectLogin } from '../../features/loginSlice';
import { selectSignup } from '../../features/signupSlice';
import { SignInScreen, SignupScreen } from '../../Screens';
import "./styles/Background.css";

const Background = () => {
    const login = useSelector(selectLogin);
    const signup = useSelector(selectSignup);
    return (
        <div className="background">
            <div className="background__bg">
                <Nav />
                {(!login && !signup) && <Header />}
                {login && <SignInScreen />}
                {signup && <SignupScreen />}
            </div>
        </div>
    )
};

export default Background;
