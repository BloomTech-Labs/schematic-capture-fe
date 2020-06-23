import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import SortDropDown from "../../../shared/components/Components/SortDropDown.js";
import { headerKeys } from "../../../shared/utils/componentMap";

import EditComponents from "./EditComponents.js";

import { CSVLink } from "react-csv";

import { CSVButton } from "../../Styles/Jobsheet/ComponetStyle";

import {
  Table,
  Wrapper,
  ImgWrapper,
  Sorticon,
  Buttin,
} from "../../Styles/Jobsheet/ComponetStyle";

import sort from "./Sort.png";
import { dispatchers, actions } from "../../../shared/actions/dashboardActions";
import DropboxChooser from "../CreateNew/Dropbox";

const { fetchComponents, updateComponent, sortComponents } = dispatchers;
const fetchComponentsSideEffect = async (dispatch, id) => {
  await dispatch(fetchComponents(id));
};

const updateComponentSideEffect = async (dispatch, id, changes) => {
  await dispatch(updateComponent(id, changes));
};

const sortComponentsSideEffect = (dispatch, sortType, components) => {
  dispatch(sortComponents(sortType, components));
};

const Components = (props) => {
  const { register, getValues, setValue, handleSubmit, watch } = useForm();
  const components = useSelector((state) => state.dashboard.components);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, history);
  }, []);

  useEffect(() => {
    const file = watch("jpg");
    if (file) {
      console.log({ file });
      if (file.length > 0) {
        setValue("name", file[0].name);
      }
    }
  }, [watch("jpg")]);

  const edit = {
    marginLeft: "40px",
    width: "1rem",
  }

  return (
    <section style={{ margin: "0 20rem"}}>
      {/* <Status>Complete: {currentJobsheet.tally}</Status> */}
      <Wrapper >
        <CSVButton style={{position: "relative", left: "40rem", top: "-3.8rem"}}>
          <CSVLink data={components} headers={headerKeys}>Download CSV</CSVLink>
        </CSVButton>
        <ImgWrapper>
          <Sorticon>
            <Buttin className="Sort">
              <img src={sort} />
              <SortDropDown
                sortAscending={() =>
                  sortComponentsSideEffect(
                    dispatch,
                    "descriptionAsc",
                    components
                  )
                }
                sortDescending={() =>
                  sortComponentsSideEffect(
                    dispatch,
                    "descriptionDesc",
                    components
                  )
                }
                sortNone={() =>
                  sortComponentsSideEffect(dispatch, "idDesc", components)
                }
              />
            </Buttin>
          </Sorticon>
        </ImgWrapper>
      </Wrapper>
      <div>
        <Table className="Table" sorting={true} style={{ color: "black" }}>
          <thead style={{ color: "black", opacity: "0.8"}}>
            <tr>
              <th scope="col">Component</th>
              <th scope="col">Description</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Part Number</th>
              <th scope="col">Stock Code</th>
              <th scope="col">Image</th>
              <th scope="col">Resources</th>
              <th scope="col">Cutsheet</th>
              <th scope="col">Stores Part #</th>
            </tr>
          </thead>
          {props.search.length > 0 ? (
            <tbody>
              {props.component.length &&
                props.component.map((component) => (
                  <tr key={component.id}>
                    <td data-label="Description">{component.descriptions}</td>
                    <td data-label="Manufacturer">{component.manufacturer}</td>
                    <td data-label="Part Number">{component.partNumber}</td>
                    <td data-label="Stock Code">{component.stockCode}</td>

                    <td data-label="Select Image">
                      {component.image ? (
                        <a href={component.image}>View Image</a>
                      ) : (
                        <DropboxChooser
                          inPopup={false}
                          handleSelected={updateComponentSideEffect}
                          componentId={component.id}
                          dispatch={dispatch}
                        />
                      )}
                    </td>
                    <td data-label="Resources">{component.resources}</td>
                    <td data-label="Cutsheet">{component.cutsheet}</td>
                    <td data-label="Stores Part #">
                      {component.storesPartNumber}
                    </td>
                  </tr>
                ))}
            </tbody>
          ) : (
            <tbody>
              {components.length &&
                components.map((component) => (
                  <tr data-cy={`component-${component.id}`} key={component.id} style={{height: "9.3rem"}}>
                    <td data-label="Component">{component.componentId}</td>
                    <td data-label="Description">{component.descriptions}</td>
                    <td data-label="Manufacturer">{component.manufacturer}</td>
                    <td data-label="Part Number">{component.partNumber}</td>
                    <td data-label="Stock Code">{component.stockCode}</td>
                    <td data-label="Select Image">
                      {component.image ? (
                        <a href={component.image}>View Image</a>
                      ) : (
                        <DropboxChooser
                          inPopup={false}
                          handleSelected={updateComponentSideEffect}
                          componentId={component.id}
                          dispatch={dispatch}
                        />
                      )}
                    </td>
                    <td data-label="Resources">{component.resources}</td>
                    <td data-label="Cutsheet">{component.cutsheet}</td>
                    <td data-label="Stores Part #">
                      {component.storesPartNumber}
                    </td>

                    {user.roleId !== 3 && (
                      <EditComponents
                        style={edit}
                        buttonLabel="Update"
                        component={component}
                        
                      />
                    )}
                  </tr>
                ))}
            </tbody>
          )}
        </Table>
      </div>
    </section>
  );
};

export default Components;
