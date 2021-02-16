import React from 'react';
import { Footer } from '../../Components';
import "./styles/SignupScreen.css";

const SignUpScreen = ({ setSignIn }) => {
    return (
        <>
            <div className="signup">
                <img onClick={() => setSignIn(false)} className="signup__closeIcon" src="/images/icons/close-white.png" alt="close" />
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>

                    <h4>
                        <span className="signup__gray">New To Netflix? </span>
                        <span className="signup__link">Sign Up Now.</span>
                    </h4>
                </form>
            </div>
            {/* <Footer /> */}
        </>
    )
};

export default SignUpScreen;
