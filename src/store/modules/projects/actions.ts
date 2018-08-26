import http from '../../../utils/http';

export const SET_PROJECTS = 'SET_PROJECTS';

export function setProjects(items) {
  return {
    type: SET_PROJECTS,
    payload: items,
  };
}

export const loadProjects = () => (dispatch) =>
  http.get(`/projects`)
    .then(({ data }) => {
      dispatch(setProjects(data.projects));
    });

export const addProject = (data) => (dispatch) =>
  http.post(`/project`, {
    data,
  })
    .then(({ data }) => {
      if (data.status === 'ok') {
        dispatch(loadProjects());
      }
    });
