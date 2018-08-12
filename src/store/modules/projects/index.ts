import { TProjectsModule } from './types';
import { SET_PROJECTS } from './actions';

const initialState: TProjectsModule = {
  items: {},
  index: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        items: action.payload,
        index: Object.keys(action.payload),
      };
    default:
      return state;
  }
};
