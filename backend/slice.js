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
    setUserData: (state, action) => {
      state.userInfo = action.payload;
    },
    updateLatitude: (state, action) => {
      state.lat = action.payload;
    },
    updateLongitude: (state, action) => {
      state.long = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setStreetNumber: (state, action) => {
      state.streetNumber = action.payload;
    },
    setSubRegion: (state, action) => {
      state.subRegion = action.payload;
    },
  },
});

export const {
  login,
  setUserData,
  updateLatitude,
  updateLongitude,
  setCity,
  setCountry,
  setDistrict,
  setName,
  setRegion,
  setStreet,
  setStreetNumber,
  setSubRegion,
} = authSlice.actions;

export default authSlice.reducer;
