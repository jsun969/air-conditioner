import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialACData } from '../typings/ACData';
import { RootState } from './store';

export const valuesSlice = createSlice({
  name: 'value',
  initialState: initialACData,
  reducers: {
    setPower(state, action: PayloadAction<boolean>) {
      state.power = action.payload;
    },
    setMode(state, action: PayloadAction<'cool' | 'heat'>) {
      state.mode = action.payload;
    },
    increaseTemperature(state) {
      state.temperature++;
    },
    decreaseTemperature(state) {
      state.temperature--;
    },
  },
});

export const valuesActions = valuesSlice.actions;

export const acSelector = (state: RootState) => state.values;

export default valuesSlice.reducer;
