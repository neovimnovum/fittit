import * as types from '../constants/actionTypes';
import regeneratorRuntime from 'regenerator-runtime';

export const showNewWorkout = (response) => ({
  type: types.START_WORKOUT,
  payload: response,
});

export const startWorkoutActionCreator = () => {
  return function (dispatch) {
    fetch('http://localhost:8080/api/workout')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        return dispatch(showNewWorkout(data));
      });
  };
};

export const endWorkoutActionCreator = () => ({
  type: types.END_WORKOUT,
});

export const addExerciseActionCreator = () => ({
  type: types.ADD_EXERCISE,
});

export const removeExerciseActionCreator = () => ({
  type: types.REMOVE_EXERCISE,
});
export const logSetActionCreator = (record) => ({
  type: types.LOG_SET,
  payload: record,
});
