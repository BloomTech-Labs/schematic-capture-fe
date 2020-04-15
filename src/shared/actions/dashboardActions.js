import firebase from "../utils/firebase";
import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const SET_CURRENT_CLIENT = "SET_CURRENT_CLIENT";
const SET_CURRENT_PROJECTS = "SET_CURRENT_PROJECTS";
const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
const SET_CURRENT_JOBSHEETS = "SET_CURRENT_JOBSHEETS";
const SET_CURRENT_JOBSHEET = "SET_CURRENT_JOBSHEET";
const UPDATE_CURRENT_PROJECT_NAME = "UPDATE_CURRENT_PROJECT_NAME";
const SET_CURRENT_FILE = "SET_CURRENT_FILE"

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

const updateProjectName = (name, setIsEditing) => async (
  dispatch,
  getState
) => {
  dispatch({ type: APP_LOADING });

  try {
    const { currentProject } = getState().dashboard;
    await axiosWithAuth().put(`/projects/${currentProject.id}`, { name });
    dispatch({ type: UPDATE_CURRENT_PROJECT_NAME, payload: name });
    console.log(UPDATE_CURRENT_PROJECT_NAME);
    setIsEditing(false);
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const newFile = (file) => async dispatch => {
  dispatch ({ type: APP_LOADING })
  try {
    const files = await axios.get(`${file}`)
    dispatch({ type: SET_CURRENT_FILE, payload: files })
    dispatch({ type: APP_DONE_LOADING });
  } catch(error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
}

const fetchJobsheets = (projectId, setJobsheets) => async dispatch => {
  dispatch({ type: APP_LOADING });

  try {
    const jobsheets = await axiosWithAuth().get(
      `/projects/${projectId}/jobsheets`
    );
    setJobsheets(jobsheets.data);
    dispatch({ type: SET_CURRENT_JOBSHEETS, payload: jobsheets.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewJobsheet = (data, history) => async (dispatch, getState) => {
  dispatch({ type: APP_LOADING });

  const { dashboard, auth } = getState();
  const { currentClient, currentProject } = dashboard;
  const { pdf, ...payload } = data;

  payload.projectId = dashboard.currentProject.id;

  let jobsheet;
  try {
    jobsheet = await axiosWithAuth().post("/jobsheets/create", payload);
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }

  if (!!pdf.length) {
    try {
      const [schematic] = pdf;
      const rootRef = firebase.storage().ref("/");
      await rootRef
        .child(String(auth.user.organizations[0].id))
        .child(String(currentClient.id))
        .child(String(currentProject.id))
        .child(String(jobsheet.data.id))
        .child(schematic.name)
        .put(schematic);
    } catch (error) {
      return dispatch({ type: APP_ERROR, payload: error.message });
    }
  }

  history.push(`/project/${currentProject.id}`);
  dispatch({ type: APP_DONE_LOADING });
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
  updateProjectName,
  fetchJobsheets,
  addNewJobsheet,
  fetchComponents,
  newFile
};

export const actions = {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET
};
