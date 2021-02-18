import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";
import loginReducer from "../features/loginSlice";
import faqReducer from "../features/faqSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    faq: faqReducer,
  },
});
