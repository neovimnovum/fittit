import * as types from '../constants/actionTypes';

export const startWorkoutActionCreator = () => ({
  type: types.START_WORKOUT,
});


export const endWorkoutActionCreator = () => ({
  type: types.END_WORKOUT,
}); 

export const addExerciseActionCreator = () => ({
  type: types.ADD_EXERCISE,
});

export const removeExerciseActionCreator = () => ({
  type: types.REMOVE_EXERCISE,
});
export const logSetActionCreator = () => ({
  type: types.LOG_SET,
});
