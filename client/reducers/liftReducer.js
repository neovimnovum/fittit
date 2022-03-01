import * as types from '../constants/actionTypes';

const initialState = {
  active: false,
  startTime: null,
  lifts: [
    {
      name: 'Hammer Curls',
      sets: 4,
      reps: 12,
      weight: 35,
      record: [],
    },
    {
      name: 'Bench Press',
      sets: 4,
      reps: 8,
      weight: 155,
      record: [],
    },
    {
      name: 'Dumbell Romanian Deadlift',
      sets: 3,
      reps: 10,
      weight: 50,
      record: [],
    },
    {
      name: 'Sit Ups',
      sets: 5,
      reps: 16,
      weight: 0,
      record: [],
    },
    {
      name: 'Dumbbell Shoulder Press',
      sets: 3,
      reps: 8,
      weight: 40,
      record: [],
    },
  ],
};

const workoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.START_WORKOUT:
    case types.END_WORKOUT:
    case types.ADD_EXERCISE:
    case types.REMOVE_EXERCISE:
    case types.LOG_SET:
    default: {
      console.log(state);
      return state;
    }
  }
};

export default workoutReducer;
