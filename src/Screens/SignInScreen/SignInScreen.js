import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/loginSlice';
import { auth } from '../../lib/firebase';
import "./styles/SignInScreen.css";

const SignInScreen = () => {
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

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then(authUser => {
                // console.log("🚀 User", authUser);
            })
            .catch(error => alert(error.message));
    }

    const closeSignup = () => {
        dispatch(setLogin({ value: false }));
    };

    return (
        <div className="signin">
            <div className="signin__container">
                <img onClick={closeSignup} className="signin__closeIcon" src="/images/icons/close-slim.png" alt="close" />
                <form>
                    <h1>Sign In</h1>

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

                    {/* <input ref={passwordRef} type="password" placeholder="Password" /> */}

                    <button onClick={signIn} type="submit">Sign In</button>
                    <h4>
                        <span className="signin__gray">New To Netflix? </span>
                        <span className="signin__link" onClick={register}>Sign Up Now.</span>
                    </h4>
                </form>
            </div>
        </div>
    )
};

export default SignInScreen;

// <input
// className="optionForm__inputInput"
// type="email"
// />