import * as types from '../constants/actionTypes';

const initialState = {
  active: false,
  browsing: false,
  startTime: null,
  lifts: [],
};

const workoutReducer = (state = initialState, action = {}) => {
  const newState = { ...state };
  let lift;
  let start;
  let record;
  switch (action.type) {
    case types.START_WORKOUT:
      newState.lifts = action.payload;
      newState.active = true;
      start = new Date();
      newState.startTime = start.toISOString();
      break;
    case types.END_WORKOUT:
      newState.active = false;
      newState.browsing = false;
      break;
    case types.ADD_EXERCISE:
    case types.REMOVE_EXERCISE:
      newState.lifts = [...newState.lifts];
      newState.lifts.splice(action.payload.index, 1);
      break;
    case types.UPDATE_SET:
      newState.lifts = [...newState.lifts];
      newState.lifts[action.payload.index].reps = action.payload.reps;
      newState.lifts[action.payload.index].weight = action.payload.weight;
      break;
    case types.LOG_SET:
      newState.lifts = [...newState.lifts];
      lift = newState.lifts[action.payload.index];
      lift.sets = action.payload.sets;
      lift.reps = action.payload.reps;
      lift.weight = action.payload.weight;
      lift.record = [...lift.record];
      lift.record.push({
        reps: lift.reps,
        weight: lift.weight,
      });
      break;
    case types.VIEW_HISTORY:
      newState.browsing = true;
      newState.lifts = action.payload;
      break;
    case types.VIEW_DETAILS:
      newState.active = true;
      newState.lifts = action.payload;
      break;
    default: {
      return state;
    }
  }
  return newState;
};

export default workoutReducer;
