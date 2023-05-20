import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log('State', state, action);
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    decrementCustomValue: (state, action) => {
      console.log('Action & State', state, action);

      state.value += action.payload;
    },
  },
});

export const {increment, decrement, decrementCustomValue} =
  counterSlice.actions;

export default counterSlice.reducer;
