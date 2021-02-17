import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/loginSlice';
import "./styles/OptionForm.css";

const OptionForm = () => {
    const dispatch = useDispatch();

    const loginStatus = () => {
        dispatch(setLogin({ value: true }));
    }

    return (
        <div className="optionForm">
            <div className="optionForm__input">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form>
                    <input
                        type="email"
                        placeholder="Email Address"
                    />
                    <button onClick={loginStatus} className="optionForm__getStarted">GET STARTED</button>
                </form>
            </div>
        </div>
    )
};

export default OptionForm;

// onClick={loginStatus}