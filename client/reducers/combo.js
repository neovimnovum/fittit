import { combineReducers } from 'redux';

import liftReducer from './liftReducer';

const reducers = combineReducers({
  workout: liftReducer,
});

export default reducers;
