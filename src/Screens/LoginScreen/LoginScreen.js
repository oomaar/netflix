import { useState } from 'react';
import { SignInScreen } from '..';
import "./styles/LoginScreen.css";

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login__bg">
                <img src="/images/logo.svg" alt="Netflix Logo" className="login__logo" />
                <button onClick={() => setSignIn(true)} className="login__button">Sign In</button>

                <div className="login__gradient" />
            </div>

            <div className="login__body">
                {signIn ? (
                    <SignInScreen />
                ) : (
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className="login__input">
                                <form>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <button onClick={() => setSignIn(true)} className="login__getStarted">GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
};

export default LoginScreen;
