import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import csv from "csvtojson";

const reader = new FileReader();
const readFile = (file, onload) => {
  reader.onload = onload;
  reader.readAsText(file);
};

const csvComponentsToJson = async (components, setComponents) => {
  try {
    const jsoned = await csv().fromString(components);
    setComponents(jsoned);
  } catch (error) {
    console.error(error);
  }
};

const CreateNewJobsheet = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    errors
  } = useForm();

  const [isNew, setIsNew] = useState(false);
  const [components, setComponents] = useState(null);

  useEffect(() => {
    const [file] = watch("csv");

    if (file) {
      const [fileName] = file.name.split(".");
      readFile(file, () => csvComponentsToJson(reader.result, setComponents));
      setIsNew(false);
      setValue("name", fileName);
    }
  }, [watch("csv")]);

  const onSubmit = data => {
    data.components = components;
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <label htmlFor="csv">Import CSV</label>
          <span>or</span>
          <button type="button" onClick={() => setIsNew(true)}>
            start a blank jobsheet
          </button>
        </div>
        <label>
          name:
          <input
            name="name"
            disabled={!isNew}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor="pdf" hidden={!getValues().name}>
          Add Schematic
        </label>
        <input hidden name="components" ref={register} />
        <input
          hidden
          id="csv"
          name="csv"
          multiple={false}
          type="file"
          accept=".csv"
          ref={register}
        />
        <input
          hidden
          id="pdf"
          name="pdf"
          multiple={false}
          type="file"
          accept=".pdf"
          ref={register}
        />
        <button type="submit">Create Jobsheet</button>
      </form>
    </div>
  );
};

export default CreateNewJobsheet;
