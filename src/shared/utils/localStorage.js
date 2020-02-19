import throttle from "lodash.throttle";

export const saveState = throttle(
  store => next => action => {
    const { dashboard } = store.getState();
    const serialized = JSON.stringify(dashboard);

    try {
      localStorage.setItem("state", serialized);
    } catch (error) {}

    next(action);
  },
  1000
);

export const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return undefined;
    }
    const dashboard = JSON.parse(state);
    return { dashboard };
  } catch (error) {
    return undefined;
  }
};
