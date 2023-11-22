"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   account:null,
};

export const Click = createSlice({
  name: "click",
  initialState,
  reducers: {
    userAccount: (state, action) => {
        state.account = action.payload;
    }
  },
});

export const { userAccount} = Click.actions;

export default Click.reducer;