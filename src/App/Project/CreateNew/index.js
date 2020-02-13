import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { schema } from "./schema";

import { StyledFields } from "./Styles";
import { axiosWithAuth } from "../../../shared/utils";

const CreateNewProject = () => {
  const { handleSubmit, register, error } = useForm();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/clients")
      .then(response => {
        console.log(response);
        setOptions(response.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <select>
        {options.map(option => {
          const { name, id } = option;
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
