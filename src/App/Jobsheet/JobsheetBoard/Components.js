import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import SortDropDown from "../../../shared/components/Components/SortDropDown.js";

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

const { fetchComponents } = dispatchers;
const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents));
};
const Components = (props) => {
  const { getValues, setValue, handleSubmit, watch } = useForm();
  const [components, setComponents] = useState([]);
  const [sortingComponents, setSortingComponents] = useState([]);
  const [sortingAsc, setSortingAsc] = useState(false);
  const [sortingDesc, setSortingDesc] = useState(false);
  const [sortingNone, setSortingNone] = useState(true);
  // const [update, setUpdate] = useState([])
  const [editing, setEditing] = useSelector(state => state.edit)
  const [formData, setFormData] = useState({
    
  })
 

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
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

  return (
    <section>
      <Status>Incomplete({components.id})</Status>
      <Wrapper>
        <List>List</List>
        <ImgWrapper>
          <Sorticon>
            <Buttin class="Sort">
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
        <Table class="Table" sorting={true} style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">Component</th>
              <th scope="col">Description</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Part Number</th>
              <th scope="col">Stock Code</th>
              <th scope="col">Select Image</th>
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

                {!editing ? <td data-label="Component" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.componentId}</td> : <input type="text" ></input> }



                    <td data-label="Description" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.descriptions}</td>
                    <td data-label="Manufacturer" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.manufacturer}</td>
                    <td data-label="Part Number" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.partNumber}</td>
                    <td data-label="Stock Code" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.stockCode}</td>
                    <td data-label="Select Image">
                      <DropboxChooser />
                    </td>
                    <td data-label="Resources" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.resources}</td>
                    <td data-label="Cutsheet" onClick={() => dispatch(dispatchers.toggleEditing)}>{component.cutsheet}</td>
                    <td data-label="Stores Part #" >
                      {component.storesPartNumber}
                    </td>
                  </tr>
                )) 
                }
              
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
                      <DropboxChooser />
                    </td>
                    <td data-label="Resources">{component.resources}</td>
                    <td data-label="Cutsheet">{component.cutsheet}</td>
                    <td data-label="Stores Part #">
                      {component.storesPartNumber}
                    </td>
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
