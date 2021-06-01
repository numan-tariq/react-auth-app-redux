import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { email: 'DUMMY', password: 'DUMMY' };

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

const store = configureStore({
  reducer: sliceAuth.reducer
});

export const authActions = sliceAuth.actions;

export default store;