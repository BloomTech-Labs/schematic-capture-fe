import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { useParams } from "react-router-dom"
const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const SET_AVAILABLE_TECHS = "SET_AVAILABLE_TECHS";
const SET_CURRENT_CLIENT = "SET_CURRENT_CLIENT";
const SET_CURRENT_PROJECTS = "SET_CURRENT_PROJECTS";
const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
const SET_CURRENT_JOBSHEETS = "SET_CURRENT_JOBSHEETS";
const SET_CURRENT_JOBSHEET = "SET_CURRENT_JOBSHEET";
const UPDATE_CURRENT_PROJECT_NAME = "UPDATE_CURRENT_PROJECT_NAME";
const FETCH_COMPONENTS_SUCCESS = "FETCH_COMPONENTS_SUCCESS";
const TOGGLE_COMPONENT_EDIT = "TOGGLE_COMPONENT_EDIT";
const UPDATE_COMPONENT = "UPDATE_COMPONENT";
const ADD_PROJECT = "ADD_PROJECT";
const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
const ASSIGN_TECH_PROJECT = "ASSIGN_TECH_PROJECT";

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

const fetchAvailableTechs = () => async (dispatch) => {
  dispatch({ type: APP_LOADING });

  try {
    const availableTechs = await axiosWithAuth().get("/users");
    // @TODO: change to "/users/techs" after backend has been deployed.
    console.log(availableTechs.data, " availableTechs.data");
    dispatch({ type: SET_AVAILABLE_TECHS, payload: availableTechs.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewClient = (data, history) => async (dispatch) => {
  dispatch({ type: APP_LOADING });

  try {
    await axiosWithAuth().post("/clients/create", data);
    dispatch(fetchClients());
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const fetchProjects = (clientId) => async (dispatch) => {
  dispatch({ type: APP_LOADING });
  try {
    const projects = await axiosWithAuth().get(`/clients/${clientId}/projects`);
    // setProjects(projects.data);
    dispatch({ type: SET_CURRENT_PROJECTS, payload: projects.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const addNewProject = (data, clientId, setProjects, history) => async (dispatch) => {
  dispatch({ type: APP_LOADING });
  try {
    const projects = await axiosWithAuth().post(`/clients/${clientId}/projects`, data);
    console.log(projects)
    dispatch({ type: ADD_PROJECT,  payload: projects.data})
    // dispatch(fetchProjects(clientId, setProjects))
    dispatch({ type: APP_DONE_LOADING });
    // history.push(`/client/${clientId}`);
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

const fetchJobsheets = (projectId, setJobsheets) => async (dispatch) => {
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
  console.log("test");
  dispatch({ type: APP_LOADING });

  const { dashboard, auth } = getState();
  const { currentClient, currentProject } = dashboard;
  const { pdf, ...payload } = data;

  payload.projectId = dashboard.currentProject.id;

  let jobsheet;
  try {
    jobsheet = await axiosWithAuth().post("/jobsheets/create", payload);
  } catch (error) {
    console.log(error);
    return dispatch({ type: APP_ERROR, payload: error.message });
  }

  if (pdf.length) {
    try {
      // add dropbox code
    } catch (error) {
      return dispatch({ type: APP_ERROR, payload: error.message });
    }
  }

  history.push(`/project/${currentProject.id}`);
  dispatch({ type: APP_DONE_LOADING });
};

const fetchComponents = (id) => async (dispatch) => {
  dispatch({ type: APP_LOADING });

  try {
    const components = await axiosWithAuth().get(`/jobsheets/${id}/components`);
    dispatch({ type: FETCH_COMPONENTS_SUCCESS, payload: components.data });

    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const assignTechProject = (id, email, date) => async (dispatch) => {
  dispatch({ type: APP_LOADING });
  console.log(id, "ID!!!!");
  let body = { email: email, date: date };
  try {
    const assignedTech = await axiosWithAuth().put(
      `/projects/${id}/assignuser`,
      body
    );
    dispatch({ type: ASSIGN_TECH_PROJECT, payload: assignedTech.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const updateComponent = (id, changes) => async (dispatch) => {
  dispatch({ type: APP_LOADING });
  // console.log(formData, "FORM DATA HERE!!!")
  try {
    const updated = await axiosWithAuth().put(
      `/components/${id}/update/`,
      changes
    );

    console.log(updated, "UPDATE!!!!!");
    dispatch({ type: UPDATE_COMPONENT, payload: updated.data });
    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
};

const sortComponents = (sortType, components) => (dispatch) => {
  let sortedComponents;
  switch (sortType) {
    case "idDesc":
      sortedComponents = components.sort(
        (a, b) => parseInt(a.componentId) - parseInt(b.componentId)
      );
      break;
    case "descriptionAsc":
      sortedComponents = components.sort((a, b) => {
        if (a.descriptions === b.descriptions) return 0;
        return a.descriptions > b.descriptions ? 1 : -1;
      });
      break;
    case "descriptionDesc":
      sortedComponents = components.sort((a, b) => {
        if (a.descriptions === b.descriptions) return 0;
        return a.descriptions < b.descriptions ? 1 : -1;
      });
      break;
  }

  dispatch({ type: FETCH_COMPONENTS_SUCCESS, payload: sortedComponents });
};

const fetchActivities = () => async (dispatch) => {
  dispatch({ type: APP_LOADING });

  
  try {
    const activities = await axiosWithAuth().get(`/activity`);
    dispatch({ type: FETCH_ACTIVITIES, payload: activities.data });

    dispatch({ type: APP_DONE_LOADING });
  } catch (error) {
    return dispatch({ type: APP_ERROR, payload: error.message });
  }
}

export const dispatchers = {
  fetchClients,
  fetchAvailableTechs,
  addNewClient,
  fetchProjects,
  addNewProject,
  updateProjectName,
  fetchJobsheets,
  addNewJobsheet,
  fetchComponents,
  updateComponent,
  fetchActivities,
  assignTechProject,
  sortComponents,
};

export const actions = {
  FETCH_CLIENTS_SUCCESS,
  SET_AVAILABLE_TECHS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET,
  FETCH_COMPONENTS_SUCCESS,
  TOGGLE_COMPONENT_EDIT,
  UPDATE_COMPONENT,
  FETCH_ACTIVITIES,
  ASSIGN_TECH_PROJECT,
  ADD_PROJECT
};
