import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: false,
    isLoggedIn: false,
    onboardingShown: false,
    userId: "",
    accessToken: "",
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.accessToken = action.payload;
    },
    setUserData: (state, action) => {},
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
