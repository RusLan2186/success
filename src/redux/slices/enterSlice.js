import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: true,
};

export const enterSiteSlice = createSlice({
  name: 'enterSite',
  initialState,
  reducers: {
    enter(state, action) {
      state.password = action.payload;
    },
  },
});
export const { enter } = enterSiteSlice.actions;
export default enterSiteSlice.reducer;
