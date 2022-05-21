import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { socketClient } from '../lib/socketClient';
import { ACData, initialACData } from '../typings/ACData';
import { RootState } from './store';

export const acSlice = createSlice({
  name: 'ac',
  initialState: { id: '', data: initialACData },
  reducers: {
    setPower(state, action: PayloadAction<boolean>) {
      state.data.power = action.payload;
      socketClient.emit('update', state.id, state.data);
    },
    setMode(state, action: PayloadAction<'cool' | 'heat'>) {
      state.data.mode = action.payload;
      socketClient.emit('update', state.id, state.data);
    },
    increaseTemperature(state) {
      state.data.temperature++;
      socketClient.emit('update', state.id, state.data);
    },
    decreaseTemperature(state) {
      state.data.temperature--;
      socketClient.emit('update', state.id, state.data);
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setData(state, action: PayloadAction<ACData>) {
      state.data = action.payload;
    },
  },
});

export const acActions = acSlice.actions;

export const acSelector = (state: RootState) => state.values;

export default acSlice.reducer;
