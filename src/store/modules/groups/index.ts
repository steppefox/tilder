import { TGroupsModule } from './types';
import { SET_GROUPS } from './actions';

const initialState: TGroupsModule = {
  items: {},
  index: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return {
        ...state,
        items: action.payload,
        index: Object.keys(action.payload),
      };
    default:
      return state;
  }
};
