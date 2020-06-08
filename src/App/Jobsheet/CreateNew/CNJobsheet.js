import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import csv from "csvtojson"
import SchematicChooser from "./DropboxSchematicChooser"

import { dispatchers } from "../../../shared/actions/dashboardActions"
import { csvToApi } from "../../../shared/utils/componentMap"
import Header from "./CNJobsheetHeader"


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

  const [preview, setPreview] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [bananas, setBananas] = useState(false)
  const [components, setComponents] = useState([])
  const [imageFile, setImageFile] = useState(null)

  useEffect(() => {
    const [file] = watch("csv");
    if (file) {
      const [fileName] = file.name.split(".");
      readFile(file, () => csvComponentsToJson(reader.result, setComponents));
      setPreview(true);
      setValue("name", fileName);
    }
  }, [watch("csv")])

  const onSubmit = data => {
    
    delete data.csv
    data.schematic = imageFile
    data.components = components
    dispatch(addNewJobsheet(data, history))
  }

  return (
    <>
      <Header />
      <div>
        <div>
          <h1>Schematic Capture</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <div>
                <label
                  type="button"
                  htmlFor="csv"
                  onClick={() => setIsNew(true)}
                >
                  <p onClick={() => setIsNew(true)}>Import CSV</p>
                </label>
                <div hidden={getValues().name}> or </div>
                <button
                  type="button"
                  hidden={getValues().name}
                  onClick={() => setIsNew(true)}
                >
                  Create A Blank Job Sheet
                </button>
              </div>
              <label htmlFor="name"></label>
            </div>
            <label type="button" htmlFor="pdf" hidden={!getValues().name}>
               <SchematicChooser imageFile={imageFile} setImageFile={setImageFile}/>
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
            <button type="submit" hidden={!getValues().name}>
              Submit Jobsheet
            </button>
          </div>
        </form>
      </div>
      <input
        hidden
        id="pdf"
        name="pdf"
        multiple={false}
        type="file"
        accept=".pdf"
        ref={register}
      />
      <div>
        <input
            name="name"
            placeholder="JobSheet Name"
            disabled={!isNew}
            hidden={!isNew}
            ref={register({ required: true })}
          />
      </div>
      <div>
        <table>
          <div hidden={preview}>
            <h1>Please import a CSV to render a preview.</h1>
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
              <tr>
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
        </table>
      </div>
    </>
  );
};

export default CreateNewJobsheet;
