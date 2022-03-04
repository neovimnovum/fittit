import * as types from '../constants/actionTypes';

const SERVER_URL = window.location.href + 'api/'; 

export const startWorkoutActionCreator = (response) => ({
  type: types.START_WORKOUT,
  payload: response,
});

export const fetchDataAndCreateAction = (actionCreator, options = {}, endpoint = '') => (
  function (dispatch) {
    fetch(SERVER_URL + endpoint, options)
      .then((data) => data.json())
      .then((data) => dispatch(actionCreator(data)));
  }
);

export const endWorkoutActionCreator = () => ({
  type: types.END_WORKOUT,
});

export const addExerciseActionCreator = () => ({
  type: types.ADD_EXERCISE,
});

export const removeExerciseActionCreator = (responseData) => ({
  type: types.REMOVE_EXERCISE,
  payload: responseData,
});
export const logSetActionCreator = (record) => ({
  type: types.LOG_SET,
  payload: record,
});

export const viewHistoryActionCreator = (history) => ({
  type: types.VIEW_HISTORY,
  payload: history,
});

export const viewDetailsActionCreator = (sets) => ({
  type: types.VIEW_DETAILS,
  payload: sets,
});

export const updateSetActionCreator = (set) => ({
  type: types.UPDATE_SET,
  payload: set,
});
