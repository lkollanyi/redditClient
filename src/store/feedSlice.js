import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    posts: [],
    currentSub: ""
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentSub: (state, action) => {
        state.currentSub = action.payload;
    }
  },
});

export const { setPosts, setCurrentSub } = feedSlice.actions;
export default feedSlice.reducer;