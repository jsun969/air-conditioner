import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ValuesState {
  power: boolean;
  temperature: number;
  mode: 'cool' | 'heat';
}

const initialState: ValuesState = {
  power: false,
  temperature: 26,
  mode: 'cool',
};

export const valuesSlice = createSlice({
  name: 'value',
  initialState,
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

export const powerSelector = (state: RootState) => state.values.power;
export const modeSelector = (state: RootState) => state.values.mode;
export const temperatureSelector = (state: RootState) =>
  state.values.temperature;

export default valuesSlice.reducer;
