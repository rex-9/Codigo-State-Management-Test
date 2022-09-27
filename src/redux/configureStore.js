import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import playerReducer from './player';
import teamReducer from './team';
import joinReducer from './join';

const rootReducer = combineReducers({
  players: playerReducer,
  teams: teamReducer,
  joins: joinReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});
export default store;
