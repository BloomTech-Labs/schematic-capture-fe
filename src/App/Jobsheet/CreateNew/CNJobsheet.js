import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import csv from "csvtojson";
import SchematicChooser from "./DropboxSchematicChooser";

import { dispatchers } from "../../../shared/actions/dashboardActions";
import { csvToApi } from "../../../shared/utils/componentMap";
import Header from "./CNJobsheetHeader";

import {
  NewSection2,
  NewBtnCont,
  NewProjBtn1,
  NewProjBtn2,
  NewProjBtn3,
  ImportAdd,
  JobsheetInput,
  SchematicWrapper,
  SchematicTable,
} from "../../Styles/Jobsheet/NewJobsheetStyle";
// import { NewProjBtn } from "../../Styles/Jobsheets";

const { addNewJobsheet } = dispatchers;

const reader = new FileReader();
const readFile = (file, onload) => {
  console.log(file);
  reader.onload = onload;
  reader.readAsText(file);
};

const csvComponentsToJson = async (components, setComponents) => {
  try {
    const jsoned = await csv().fromString(components);
    const sanitizedComponents = jsoned.map((component) => {
      const entries = Object.entries(component);
      const sanitizedComponent = {};

      entries.forEach((entry) => {
        if (entry[0] in csvToApi) {
          sanitizedComponent[csvToApi[entry[0]]] = entry[1];
        } else {
          sanitizedComponent.custom = entry[1];
        }
      });
      return sanitizedComponent;
    });

    setComponents(sanitizedComponents);
  } catch (error) {
    console.error(error);
  }
};

const CreateNewJobsheet = () => {
  const { register, getValues, setValue, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const [preview, setPreview] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [bananas, setBananas] = useState(false);
  const [components, setComponents] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const [file] = watch("csv");
    if (file) {
      const [fileName] = file.name.split(".");
      readFile(file, () => csvComponentsToJson(reader.result, setComponents));
      setPreview(true);
      setValue("name", fileName);
    }
  }, [watch("csv")]);

  const onSubmit = (data) => {
    delete data.csv;
    data.schematic = imageFile;
    data.components = components;
    dispatch(addNewJobsheet(data, history));
  };

  return (
    <>
      <Header />
      <NewSection2>
        <SchematicWrapper>
          <h1>Schematic Capture</h1>
          <JobsheetInput>
            <input
              hidden
              id="pdf"
              name="pdf"
              multiple={false}
              type="file"
              accept=".pdf"
              ref={register}
            />
          </JobsheetInput>
          {/* <label style={{fontSize: "2rem"}}>Enter New Jobsheet Name: </label> */}
          <input
            style={{
              width: "35vh",
              height: "4rem",
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "0 1.5rem",
              color: "black",
              fontWeight: "",
              fontSize: "100%",
              fontWeight: "",
              letterSpacing: "0.04rem"
            }}
            autoComplete="off"
            name="name"
            placeholder="Enter Jobsheet Name"
            disabled={!isNew}
            hidden={!isNew}
            ref={register({ required: true })}
          />
          
          
        </SchematicWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <NewBtnCont>
            <ImportAdd>
                  <div>
                    <div>
                      <NewProjBtn1 onClick={() => setIsNew(true)}>
                        <label
                          type="button"
                          htmlFor="csv"
                          onClick={() => setIsNew(true)}
                        >
                          Import CSV
                        </label>
                      </NewProjBtn1>
                      {/* <div hidden={getValues().name}> or </div>
                      <button
                        type="button"
                        hidden={getValues().name}
                        onClick={() => setIsNew(true)}
                      >
                        Create A Blank Job Sheet
                      </button> */}
                    </div>
                    <label htmlFor="name"></label>
                  </div>
                
                    <NewProjBtn3 type="button" htmlFor="pdf" hidden={!getValues().name}>
                      <SchematicChooser
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                      />
                    </NewProjBtn3>
              </ImportAdd>
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
            <NewProjBtn2 type="submit" hidden={!getValues().name}>
              Submit Jobsheet
            </NewProjBtn2>
          </NewBtnCont>
        </form>
      </NewSection2>

      <div style={{ margin: "0 20rem"}}>
        <SchematicTable>
          <div
            hidden={preview}
            style={{ textAlign: "center", fontSize: "60%" }}
          >
            <h1 style={{fontWeight: "lighter", marginBottom: "20px"}}>Please import a CSV to render a preview.</h1>
          </div>
          <tr hidden={!preview}>
            <th>Component</th>
            <th>RL Category</th>
            <th>RL Number</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Part Number</th>
            <th>Stock Code</th>
            <th>Electrical Address</th>
            <th>Component Application</th>
            <th>Reference Tag</th>
            <th>Settings</th>
            <th>Image</th>
            <th>Resources</th>
            <th>Cutsheet</th>
            <th>Maintenance Video</th>
            <th>Stores Part #</th>
          </tr>
          {components.map((item) => {
            return (
              <tr style={{borderLeft: "hidden", borderRight: "hidden", height: "7rem"}}>
                <td>{item.componentId}</td>
                <td>{item.rlCategory}</td>
                <td>{item.rlNumber}</td>
                <td>{item.descriptions}</td>
                <td>{item.manufacturer}</td>
                <td>{item.partNumber}</td>
                <td>{item.stockCode}</td>
                <td>{item.electricalAddress}</td>
                <td>{item.componentApplication}</td>
                <td>{item.referenceTag}</td>
                <td>{item.settings}</td>
                <td>{item.image}</td>
                <td>{item.resources}</td>
                <td>{item.cutsheet}</td>
                <td>{item.maintenanceVideo}</td>
                <td>{item.custom}</td>
              </tr>
            );
          })}
        </SchematicTable>
      </div>
    </>
  );
};

export default CreateNewJobsheet;
