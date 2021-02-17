import { useRef } from 'react';
import { auth } from '../../lib/firebase';
import "./styles/SignupScreen.css";

const SignUpScreen = ({ setSignIn }) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => {
        // console.log("🚀 ~ file: SignupScreen.js ~ line 17 ~ SignUpScreen ~ authUser", authUser);
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
        // console.log("🚀 ~ file: SignupScreen.js ~ line 28 ~ SignUpScreen ~ authUser", authUser);
        })
        .catch(error => alert(error.message));
    }

    return (
        <>
            <div className="signup">
                <img onClick={() => setSignIn(false)} className="signup__closeIcon" src="/images/icons/close-white.png" alt="close" />
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email Address" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button onClick={signIn} type="submit">Sign In</button>

                    <h4>
                        <span className="signup__gray">New To Netflix? </span>
                        <span className="signup__link" onClick={register}>Sign Up Now.</span>
                    </h4>
                </form>
            </div>
        </>
    )
};

export default SignUpScreen;
