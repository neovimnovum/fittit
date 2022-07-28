import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type {
  Program,
} from '@shared/types';
import { demoProgramsState } from '../../common/dummyData';
import type { RootState } from '../../app/store';

const programsAdapter = createEntityAdapter<Program>();

export const programsSlice = createSlice({
  name: 'workout',
  initialState: programsAdapter.getInitialState(demoProgramsState),
  reducers: {
    createProgram: () => {
    },
    startProgram: () => {
    },
    endProgram: () => {
    },
  },
});

export const programsSelectors = programsAdapter.getSelectors<RootState>((state) => state.programs);

export const {
  createProgram,
  startProgram,
  endProgram,
} = programsSlice.actions;

export default programsSlice.reducer;
