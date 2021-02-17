import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: false,
    },
    reducers: {
        setLogin: state => {
            state.value = !state.value;
        }
    },
});

export const { setLogin } = loginSlice.actions;

export const selectLogin = state => state.login.value;

export default loginSlice.reducer;
