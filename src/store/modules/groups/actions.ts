import http from '../../../utils/http';

export const SET_GROUPS = 'SET_GROUPS';

export function setGroups(items) {
  return {
    type: SET_GROUPS,
    payload: items,
  };
}

export const loadGroups = (id: string) => (dispatch) =>
  http.get(`/project/${id}`)
    .then(({ data }) => {
      dispatch(setGroups(data.groups));
    });
