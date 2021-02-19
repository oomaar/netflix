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
        <>
            <div className="signup">
                <img onClick={closeSignup} className="signup__closeIcon" src="/images/icons/close-white.png" alt="close" />
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

export default SignInScreen;
