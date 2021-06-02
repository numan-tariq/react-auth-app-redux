import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { email: '', password: '' };

const sliceAuth = createSlice({
  name: 'AuthSlicer',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  }
});

export const authActions = sliceAuth.actions;

export default sliceAuth.reducer;