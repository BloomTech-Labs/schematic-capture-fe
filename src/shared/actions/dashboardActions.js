import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";

const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const fetchClients = () => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .get("/clients")
    .then(res => {
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const addNewClient = (data, history) => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    await axiosWithAuth().post("/clients/create", data);

    dispatch(fetchClients());
    dispatch({ type: APP_DONE_LOADING });

    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: APP_ERROR });
  }
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

export const actions = {
  FETCH_CLIENTS_SUCCESS
};
