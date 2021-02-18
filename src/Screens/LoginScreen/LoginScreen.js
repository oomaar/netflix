import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SignUpScreen } from '..';
import { Accordion, OptionForm, Story } from '../../Components';
import { selectLogin, setLogin } from '../../features/loginSlice';
import "./styles/LoginScreen.css";

const LoginScreen = () => {
    const login = useSelector(selectLogin);
    const dispatch = useDispatch();

    const loginStatus = () => {
        dispatch(setLogin({ value: true }));
    }

    return (
        <>
            <div className="login">
                <div className="login__bg">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="Netflix Logo" className="login__logo" />
                    </Link>
                    <button onClick={loginStatus} className="login__button">Sign In</button>

                    <div className="login__gradient" />
                </div>

                <div className="login__body">
                    {login ? (
                        <SignUpScreen />
                    ) : (
                            <>
                                <h1>Unlimited movies, TV shows, and more.</h1>
                                <h2>Watch anywhere. Cancel anytime.</h2>
                                <OptionForm />
                            </>
                        )}
                </div>
            </div>
            <Story />
            {/* accordion */}
            <Accordion />
            {/* Footer */}
        </>
    )
};

export default LoginScreen;
