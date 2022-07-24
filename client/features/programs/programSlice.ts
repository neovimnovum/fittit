import { createSlice } from '@reduxjs/toolkit';
import type {
  ProgramState,
} from '@shared/types';
import { demoProgramState } from '../../common/dummyData';
// import type { RootState } from '../store';

const initialState: ProgramState = demoProgramState;

export const programSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    createProgram: () => {
    },
    startProgram: () => {
    },
    endProgram: () => {
    },
  },
});

export const {
  createProgram,
  startProgram,
  endProgram,
} = programSlice.actions;

export default programSlice.reducer;
