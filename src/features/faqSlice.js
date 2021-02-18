import { createSlice } from '@reduxjs/toolkit';

export const faqSlice = createSlice({
    name: 'faq',
    initialState: {
        value: false,
    },
    reducers: {
        setToggleShow: state => {
            state.value = !state.value;
        }
    },
});

export const { setToggleShow } = faqSlice.actions;

export const selectToggleShow = state => state.faq.value;

export default faqSlice.reducer;