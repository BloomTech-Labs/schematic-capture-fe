import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import csv from "csvtojson";
import { dispatchers } from "../../../../shared/actions/dashboardActions";
import { csvToApi } from "../../../../shared/utils/componentMap";
import Header from "../Header";

import {
  Container,
  PreviewContainer,
  PreviewTable,
  TableItems,
  PreLoad,
  TopLeft,
  TopRight,
  TopTopRight,
  Top,
  NewBlank,
  SubmitButton,
  ImportCsv,
  AddSchem,
  ImportText,
  CenterDiv,
  TableHeader,
  LineOr
} from "./Styles";

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
    const sanitizedComponents = jsoned.map(component => {
      const entries = Object.entries(component);
      const sanitizedComponent = {};

      entries.forEach(entry => {
        if (entry[0] in csvToApi) {
          sanitizedComponent[csvToApi[entry[0]]] = entry[1];
        } else {
          sanitizedComponent.custom = entry[1];
        }
      });
      // console.log(sanitizedComponent);
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

  const [isNew, setIsNew] = useState(false);
  const [components, setComponents] = useState([]);

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
    delete data.csv;
    data.components = components;
    dispatch(addNewJobsheet(data, history));
  };

  return (
    <Container>
      <Header />
      <Top>
        <TopLeft>
          <h1>Schematic Capture</h1>
        </TopLeft>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TopRight>
            <CenterDiv>
              <TopTopRight>
                <ImportCsv
                  type="button"
                  htmlFor="csv"
                  onClick={() => setIsNew(true)}
                >
                  <ImportText onClick={() => setIsNew(true)}>
                    Import CSV
                  </ImportText>
                </ImportCsv>
                <LineOr hidden={getValues().name}> or </LineOr>
                <NewBlank
                  type="button"
                  hidden={getValues().name}
                  onClick={() => setIsNew(true)}
                >
                  Create A Blank Job Sheet
                </NewBlank>
              </TopTopRight>
              <label htmlFor="name">
                <input
                  name="name"
                  placeholder="JobSheet Name"
                  disabled={!isNew}
                  ref={register({ required: true })}
                />
              </label>
            </CenterDiv>
            <AddSchem type="button" htmlFor="pdf" hidden={!getValues().name}>
              <ImportText>Add Schematic</ImportText>
            </AddSchem>
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

            <SubmitButton type="submit" hidden={!getValues().name}>
              Submit Jobsheet
            </SubmitButton>
          </TopRight>
        </form>
      </Top>
      <PreviewContainer>
        <PreviewTable>
          <PreLoad hidden={getValues().name}>
            <h1>Please import a CSV to render a preview.</h1>
          </PreLoad>
          <TableItems hidden={!getValues().name}>
            <TableHeader>Component</TableHeader>
            <TableHeader>RL Category</TableHeader>
            <TableHeader>RL Number</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Manufacturer</TableHeader>
            <TableHeader>Part Number</TableHeader>
            <TableHeader>Stock Code</TableHeader>
            <TableHeader>Electrical Address</TableHeader>
            <TableHeader>Component Application</TableHeader>
            <TableHeader>Reference Tag</TableHeader>
            <TableHeader>Settings</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Resources</TableHeader>
            <TableHeader>Cutsheet</TableHeader>
            <TableHeader>Maintenance Video</TableHeader>
            <TableHeader>Stores Part #</TableHeader>
          </TableItems>
          {components.map(item => {
            return (
              <TableItems>
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
              </TableItems>
            );
          })}
        </PreviewTable>
      </PreviewContainer>
    </Container>
  );
};

export default CreateNewJobsheet;
