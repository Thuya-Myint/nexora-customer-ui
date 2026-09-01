import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  //variable name
  name: "user",

  //value
  initialState,

  //function
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false
    },

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      }
    }
  }
})

export const { setUser, logout, updateUser } = userSlice.actions

export default userSlice.reducer