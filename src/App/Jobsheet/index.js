import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchComponents } = dispatchers;

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents));
};

const Jobsheet = () => {
  const [components, setComponents] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
  }, [dispatch, params.id, setComponents]);

  return (
    <div>
      {!!components.length &&
        components.map(component => (
          <pre key={component.id}>{JSON.stringify(component, null, 2)}</pre>
        ))}
    </div>
  );
};

export default Jobsheet;
