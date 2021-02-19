import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        value: false,
    },
    reducers: {
        setSignup: state => {
            state.value = !state.value;
        }
    },
});

export const { setSignup } = signupSlice.actions;

export const selectSignup = state => state.signup.value;

export default signupSlice.reducer;