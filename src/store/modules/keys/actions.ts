import http from '../../../utils/http';

export const SET_KEYS = 'SET_KEYS';

export function setKeys(items) {
  return {
    type: SET_KEYS,
    payload: items,
  };
}

export const loadKeys = (id: string) => (dispatch) =>
  http.get(`/keys/${id}`)
    .then(({ data }) => {
      dispatch(setKeys(data.items));
    });

export type TAddKeyArgs = {
  name: string,
  groupId: string,
  projectId: string,
};
export const addKey = ({ name, groupId, projectId }: TAddKeyArgs) => (dispatch) =>
  http.post(`/key`, {
    data: {
      name,
      groupId,
      projectId
    },
  })
    .then(({ data }) => {
      if (data.status === 'ok') {
        dispatch(loadKeys(projectId));
      }
    });
