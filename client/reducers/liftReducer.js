import * as types from '../constants/actionTypes';

const initialState = {
  active: false,
  startTime: null,
  lifts: [
    {
      id: 15,
      name: 'Hammer Curls',
      sets: 4,
      reps: 12,
      weight: 35,
      record: [],
    },
    {
      id: 77,
      name: 'Bench Press',
      sets: 4,
      reps: 8,
      weight: 155,
      record: [],
    },
    {
      id: 1123,
      name: 'Dumbell Romanian Deadlift',
      sets: 3,
      reps: 10,
      weight: 50,
      record: [],
    },
    {
      id: 4,
      name: 'Sit Ups',
      sets: 5,
      reps: 16,
      weight: 0,
      record: [],
    },
    {
      id: 3,
      name: 'Dumbbell Shoulder Press',
      sets: 3,
      reps: 8,
      weight: 40,
      record: [],
    },
  ],
};

const workoutReducer = (state = initialState, action = {}) => {
  let newState = { ...state };
  let lift;
  let record;
  switch (action.type) {
    case types.START_WORKOUT:
      newState.lifts = action.payload;
      newState.active = true;
      newState.startTime = new Date();
      break;
    case types.END_WORKOUT:
    case types.ADD_EXERCISE:
    case types.REMOVE_EXERCISE:
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
    default: {
      console.log(state);
      return state;
    }
  }
  return newState;
};

export default workoutReducer;
