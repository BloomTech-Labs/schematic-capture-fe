import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import SortDropDown from "../../../shared/components/Components/SortDropDown.js";

import EditComponents from "./EditComponents.js";

import { CSVLink } from "react-csv";

import {
  List,
  Table,
  Wrapper,
  Status,
  ImgWrapper,
  Sorticon,
  Buttin,
} from "../../Styles/Jobsheet/ComponetStyle";

import sort from "./Sort.png";
import { dispatchers, actions } from "../../../shared/actions/dashboardActions";
import DropboxChooser from "../CreateNew/Dropbox";

const { fetchComponents, updateComponent } = dispatchers;
const fetchComponentsSideEffect = async (dispatch, id) => {
  await dispatch(fetchComponents(id));
};

const updateComponentSideEffect = async (dispatch, id, changes) => {
  await dispatch(updateComponent(id, changes));
};

const Components = (props) => {
  const { register, getValues, setValue, handleSubmit, watch } = useForm();
  const components = useSelector((state) => state.dashboard.components);
  const [sortingComponents, setSortingComponents] = useState([]);
  const [sortingAsc, setSortingAsc] = useState(false);
  const [sortingDesc, setSortingDesc] = useState(false);
  const [sortingNone, setSortingNone] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const [editing, setEditing] = useState(false);

  const [update, setUpdate] = useState([]);
  const [input, setInput] = useState({
    description: "",
    manufacturer: "",
    partNumber: "",
    stockCode: "",
    resources: "",
    cutsheet: "",
    storesPartNumber: "",
  });

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    setUpdate();
    console.log();
  };

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, history);
  }, [sortingNone]);

  useEffect(() => {
    const file = watch("jpg");
    if (file) {
      console.log({ file });
      if (file.length > 0) {
        setValue("name", file[0].name);
      }
    }
  }, [watch("jpg")]);

  useEffect(() => {
    if (sortingAsc === true) {
      components.sort((a, b) => {
        if (a.descriptions < b.descriptions) {
          return -1;
        }
        if (a.descriptions > b.descriptions) {
          return 1;
        }
      });
      setSortingComponents(components);
    }
  }, [sortingComponents, sortingAsc, sortingDesc, components]);
  console.log(components, "HEEY DATA!");

  useEffect(() => {
    if (sortingDesc === true) {
      components.sort((a, b) => {
        if (a.descriptions < b.descriptions) {
          return 1;
        }
        if (a.descriptions > b.descriptions) {
          return -1;
        }
      });
      setSortingComponents(components);
    }
  }, [sortingComponents, sortingDesc, sortingAsc, components]);

  function sortAscending() {
    if (sortingDesc === true) {
      setSortingDesc(!sortingDesc);
    }
    if (sortingNone === true) {
      setSortingNone(!sortingNone);
    }
    setSortingAsc(!sortingAsc);
  }

  function sortDescending() {
    if (sortingAsc === true) {
      setSortingAsc(!sortingAsc);
    }
    if (sortingNone === true) {
      setSortingNone(!sortingNone);
    }
    setSortingDesc(!sortingDesc);
  }

  function sortNone() {
    if (sortingAsc === true) {
      setSortingAsc(!sortingAsc);
    }
    if (sortingDesc === true) {
      setSortingDesc(!sortingDesc);
    }
    setSortingNone(!sortingNone);
  }

  console.log(components);

  return (
    <section>
      {/* <Status>Complete: {currentJobsheet.tally}</Status> */}
      <Wrapper>
        <CSVLink data={components}>Download CSV</CSVLink>
        <ImgWrapper>
          <Sorticon>
            <Buttin className="Sort">
              <img src={sort} />
              <SortDropDown
                sortAscending={sortAscending}
                sortDescending={sortDescending}
                sortNone={sortNone}
              />
            </Buttin>
          </Sorticon>
        </ImgWrapper>
      </Wrapper>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <Table className="Table" sorting={true} style={{ color: "black" }}>
          <thead>
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
                  <tr key={component.id}>
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
