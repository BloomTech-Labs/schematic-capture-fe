import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";

const fetchClients = () => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    const clients = await axiosWithAuth().get("/clients");
    dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: clients.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewClient = (data, history) => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    await axiosWithAuth().post("/clients/create", data);
    dispatch(fetchClients());
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const fetchProjects = (clientId, setProjects) => async dispatch => {
  dispatch({ type: APP_LOADING });
  try {
    const projects = await axiosWithAuth().get(`/clients/${clientId}/projects`);
    setProjects(projects.data);
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewProject = (data, clientId, history) => async dispatch => {
  dispatch({ type: APP_LOADING });
  try {
    await axiosWithAuth().post(`/clients/${clientId}/projects`, data);
    history.push(`/client/${clientId}`);
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

export const dispatchers = {
  fetchClients,
  addNewClient,
  fetchProjects,
  addNewProject
};

export const actions = {
  FETCH_CLIENTS_SUCCESS
};
