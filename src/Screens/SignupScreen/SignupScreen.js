import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/loginSlice';
import { setSignup } from '../../features/signupSlice';
import { auth } from '../../lib/firebase';
import "./styles/SignupScreen.css";

const SignupScreen = () => {
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => {
            // console.log("🚀 User", authUser);
        })
        .catch(error => alert(error.message));
    };

    const closeSignup = () => {
        dispatch(setSignup({ value: false }));
    };

    const signInNow = () => {
        dispatch(setSignup({ value: false }));
        dispatch(setLogin({ value: true }));
    }

    return (
        <div className="signin">
            <div className="signin__container">
                <img onClick={closeSignup} className="signin__closeIcon" src="/images/icons/close-slim.png" alt="close" />
                <form>
                    <h1>Sign Up</h1>
                    <div className="signin__inputContainer">
                        <input className="signin__input" ref={emailRef} type="email" />
                        <label className="signin__input__label">
                            <span className="signin__label__span">Email address</span>
                        </label>
                    </div>
                    <div className="signin__inputContainer">
                        <input className="signin__input" ref={passwordRef} type="password" />
                        <label className="signin__input__label">
                            <span className="signin__label__span">Password</span>
                        </label>
                    </div>
                    <button onClick={register} type="submit">Sign Up</button>
                    <h4>
                        <span className="signin__gray">New To Netflix? </span>
                        <span className="signin__link" onClick={signInNow}>Sign In Now.</span>
                    </h4>
                </form>
            </div>
        </div>
    )
};

export default SignupScreen;
