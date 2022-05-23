import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACData, initialACData } from '../typings/ACData';
import { RootState } from './store';

export const acSlice = createSlice({
  name: 'ac',
  initialState: { id: '', data: initialACData, setDataLock: false },
  reducers: {
    setPower(state, action: PayloadAction<boolean>) {
      state.data.power = action.payload;
    },
    setMode(state, action: PayloadAction<'cool' | 'heat'>) {
      state.data.mode = action.payload;
    },
    increaseTemperature(state) {
      state.data.temperature++;
    },
    decreaseTemperature(state) {
      state.data.temperature--;
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setData(state, action: PayloadAction<ACData>) {
      state.data = action.payload;
      state.setDataLock = true;
    },
    unlockSetData(state) {
      state.setDataLock = false;
    },
  },
});

export const acActions = acSlice.actions;

export const acSelector = (state: RootState) => state.values;

export default acSlice.reducer;
