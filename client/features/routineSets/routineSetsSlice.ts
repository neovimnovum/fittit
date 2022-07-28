import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RoutineSet } from '@shared/types';
import type { RootState } from '../../app/store';
import { demoRoutineSetsState } from '../../common/dummyData';

const routineSetsAdapter = createEntityAdapter<RoutineSet>();

const routineSetsSlice = createSlice({
  name: 'routineSets',
  initialState: routineSetsAdapter.getInitialState(demoRoutineSetsState),
  reducers: {

  },
});

export const routineSetsSelectors = routineSetsAdapter.getSelectors<RootState>(
  (state) => state.routineSets,
);

export default routineSetsSlice.reducer;
