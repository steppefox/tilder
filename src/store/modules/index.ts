import { combineReducers } from 'redux';
import projects from './projects';
import groups from './groups';

export const reducers = combineReducers({
  projects,
  groups,
});
