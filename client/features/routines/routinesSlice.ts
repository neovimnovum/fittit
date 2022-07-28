import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Routine } from '@shared/types';
import type { RootState } from '../../app/store';
import { demoRoutinesState } from '../../common/dummyData';

const routinesAdapter = createEntityAdapter<Routine>();

const routinesSlice = createSlice({
  name: 'routines',
  initialState: routinesAdapter.getInitialState(demoRoutinesState),
  reducers: {
  },
});

export const routinesSelectors = routinesAdapter.getSelectors<RootState>((state) => state.routines);

export default routinesSlice.reducer;
