import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const fetchClients = setClients => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .get("/clients")
    .then(res => {
      setClients(res.data);
      dispatch({ type: APP_DONE_LOADING });
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const addNewClient = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .post("/clients/create", data)
    .then(client => {
      dispatch({ type: APP_DONE_LOADING });
      console.log(client);
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch({ type: APP_ERROR });
      console.error(error);
    });
};

const fetchProjects = (id, setProjects) => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .get(`/clients/${id}/projects`)
    .then(res => {
      setProjects(res.data);
      dispatch({ type: APP_DONE_LOADING });
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const addNewProject = (data, history, id) => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .post(`/clients/${id}/projects`, data)
    .then(project => {
      dispatch({ type: APP_DONE_LOADING });
      console.log(project);
      history.push(`/clients/${id}`);
    })
    .catch(error => {
      dispatch({ type: APP_ERROR });
      console.error(error);
    });
};

export const dispatchers = {
  addNewClient,
  fetchClients,
  addNewProject,
  fetchProjects
};
