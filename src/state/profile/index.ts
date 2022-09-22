import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: true,
  data: {
    username: "",
    walletaddress: "",
    email: "",
    banner: null,
    shortDescription: "",
    avatar: null,
    twitter: null,
    discord: null,
    website: null,
    role: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileClear: (state) => ({
      ...initialState,
    }),

    updateProfileData: (state, action) => ({
      newUser: !action.payload,
      data: {
        ...(action.payload ?? initialState.data),
      },
    }),
  },
});

export const { profileClear, updateProfileData } = profileSlice.actions;

export default profileSlice.reducer;
