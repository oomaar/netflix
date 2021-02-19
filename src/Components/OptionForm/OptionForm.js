import React from 'react';
import { useDispatch } from 'react-redux';
import { setSignup } from '../../features/signupSlice';
import "./styles/OptionForm.css";

const OptionForm = () => {
    const dispatch = useDispatch();

    const signupStatus = () => {
        dispatch(setSignup({ value: true }));
    }

    return (
        <div className="optionForm">
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="optionForm__input">
                <form className="optionForm__inputForm">
                    <div className="optionForm__inputContainer">
                        <input
                            className="optionForm__inputInput"
                            type="email"
                        />
                        <label className="optionForm__input__label">
                            <span className="optionForm__label__span">Email address</span>
                        </label>
                    </div>
                    
                    <button onClick={signupStatus} className="optionForm__getStarted">
                        Get Started
                        <img src="/images/icons/chevron-right.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
};

export default OptionForm;
