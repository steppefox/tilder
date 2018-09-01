import { TKeysModule } from './types';
import { SET_KEYS } from './actions';

const initialState: TKeysModule = {
  items: {},
  index: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        items: action.payload,
        index: Object.keys(action.payload),
      };
    default:
      return state;
  }
};
