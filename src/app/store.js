import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";
import loginReducer from "../features/loginSlice";
import signupReducer from "../features/signupSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});
