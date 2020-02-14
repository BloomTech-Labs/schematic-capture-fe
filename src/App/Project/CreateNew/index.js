import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { schema } from "./schema";

import { StyledFields } from "./Styles";
import { axiosWithAuth } from "../../../shared/utils";
import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const CreateNewProject = () => {
  const { handleSubmit, register, error } = useForm();
  const [clients, setClients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients(setClients));
  }, []);

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <select>
        {clients.map(client => {
          const { name, id } = client;
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
      <StyledFields fields={schema} register={register} errors={error} />
      <button type="submit">Save</button>
      <button>Cancel</button>
    </form>
  );
};

export default CreateNewProject;
