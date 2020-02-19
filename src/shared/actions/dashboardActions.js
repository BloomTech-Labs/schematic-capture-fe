import firebase from "../utils/firebase";
import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const SET_CURRENT_CLIENT = "SET_CURRENT_CLIENT";
const SET_CURRENT_PROJECTS = "SET_CURRENT_PROJECTS";

const fetchClients = () => async (dispatch, getState) => {
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
    dispatch({ type: SET_CURRENT_PROJECTS, payload: projects.data });
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

const fetchJobsheets = (projectId, setJobsheets) => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    const jobsheets = await axiosWithAuth().get(
      `/projects/${projectId}/jobsheets`
    );
    setJobsheets(jobsheets.data);
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewJobsheet = data => async (dispatch, getState) => {
  dispatch({ type: APP_LOADING });

  const { dashboard } = getState();
  const { pdf, ...payload } = data;

  try {
    await axiosWithAuth().post("/jobsheets/create", payload);
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }

  try {
    const root = firebase.storage().ref("/");
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const fetchComponents = (id, setComponents) => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    const components = await axiosWithAuth().get(`/jobsheets/${id}`);
    setComponents(components.data);
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
};

export const dispatchers = {
  fetchClients,
  addNewClient,
  fetchProjects,
  addNewProject,
  fetchJobsheets,
  fetchComponents
};

export const actions = {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS
};
