import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Exercise } from '@shared/types';
import { demoExercisesState } from '../../common/dummyData';
import type { RootState } from '../../app/store';

const exercisesAdapter = createEntityAdapter<Exercise>();

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: exercisesAdapter.getInitialState(demoExercisesState),
  reducers: {

  },
});

export const exercisesSelectors = exercisesAdapter.getSelectors<RootState>(
  (state) => state.exercises,
);

export default exercisesSlice.reducer;
