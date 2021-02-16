import React from 'react';
import "./styles/SignupScreen.css";

const SignUpScreen = () => {
    return (
        <div className="signup">
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
    )
};

export default SignUpScreen;
