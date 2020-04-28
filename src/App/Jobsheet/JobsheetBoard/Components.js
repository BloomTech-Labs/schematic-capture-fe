import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { Button, Modal, ModalBody} from "reactstrap";

import {
  Header,
  List,
  importButton,
  Table,
  Wrapper,
  Status,
  ImgWrapper,
  Sorticon
} from '../../Styles/Jobsheet/ComponetStyle';

// import {fetchJobsheetsSideEffect , fetchJobsheets, setJobsheets, jobsheets} from '../../Project/ProjectBoard/Jobsheets.js';

import Picture from './CameraImage.png'
import sort from './Sort.png'
import { dispatchers } from "../../../shared/actions/dashboardActions"
import DropboxChooser from "../CreateNew/Dropbox"

const { fetchComponents } = dispatchers
const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents))
}
const Components = props => {
  const { getValues, setValue, handleSubmit, watch } = useForm()
  const [components, setComponents] = useState([])

  const dispatch = useDispatch()
  const params = useParams()

useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents)
  }, [])

useEffect(() => {
    const file = watch("jpg")
    if(file) {
      console.log({file})
      if(file.length>0){
        setValue("name", file[0].name)
      }
    } 
  }, [watch("jpg")])

const onSubmit = e => {
    console.log('hello there')
  }

    const {
      buttonLabel,
      className
    } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);  
  

const [sortingTable, setSortingTable] = useState(false);
const [sortingComponents, setSortingComponents] = useState([]);
const [sortingAsc, setSortingAsc] = useState(false);
const [sortingDesc, setSortingDesc] = useState(false);
const [sortingNone, setSortingNone] = useState(true);

function sortAscending () {
  if (sortingDesc === true) {
    setSortingDesc(!sortingDesc)
  }
  if (sortingNone === true) {
    setSortingNone(!sortingNone)
  } 
  setSortingAsc(!sortingAsc)
  toggle()
  
}

function sortDescending () {
  if (sortingAsc === true) {
    setSortingAsc(!sortingAsc)
  }
  if (sortingNone === true) {
    setSortingNone(!sortingNone)
  }
  setSortingDesc(!sortingDesc)
  toggle()
  
}

function sortNone () {
  if (sortingAsc === true){
    setSortingAsc(!sortingAsc)
  }
  if (sortingDesc === true) {
    setSortingDesc(!sortingDesc)
  }
  setSortingNone(!sortingNone)
  toggle()
  
}


             
useEffect(() => { 
  if (sortingAsc === true) {
    components.sort((a,b) => {
      if (a.descriptions < b.descriptions) {
        return -1 
      } 
      if (a.descriptions > b.descriptions) {
        return 1
      }
    })  
setSortingComponents(components)

  }
},[sortingComponents,sortingAsc,components])

useEffect(() => { 
  if (sortingDesc === true) {
    components.sort((a,b) => {
      if (a.descriptions < b.descriptions) {
        return 1 
      } 
      if (a.descriptions > b.descriptions) {
        return -1
      }
    })  
setSortingComponents(components)

  }
},[sortingComponents,sortingDesc,components])

useEffect(() => { 
  if (sortingNone === true) {
    components.sort((a,b) => {
      if (a.componentId < b.componentId) {
        return -1
      }
      if (a.componentId > b.componentId) {
        return 1
      }
    })
    setSortingComponents(components)

  }
},[sortingComponents,sortingNone,components])

return (
    
    <section>
      <Status>Incomplete({components.id})</Status>
      <Wrapper>
      <List>List</List>
      <ImgWrapper>
      <Sorticon>
      <Button class="Sort" onClick={toggle}> <img src={sort}/> {buttonLabel} </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <button onClick={sortAscending}> Ascending</button>
        <button onClick={sortDescending}> Descening</button>
        <button onClick={sortNone}> None</button>
        </ModalBody>
      </Modal>
      </Sorticon>
      </ImgWrapper>
      </Wrapper>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <Table class="Table" sorting= {true} style={{color: "black"}}>
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
          {props.search.length>0 ? 
            <tbody>
              {props.component.length &&
                props.component.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody> :
            <tbody>
              {components.length &&
                components.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody>
          }

                {sortingAsc ? 
            <tbody>
              {sortingComponents.length &&
                sortingComponents.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody> :
            <tbody>
              {components.length &&
                components.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody>
          }

{sortingDesc ? 
            <tbody>
              {sortingComponents.length &&
                sortingComponents.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody> :
            <tbody>
              {components.length &&
                components.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody>
          }

{/* {sortingNone ? 
            <tbody>
              {!!sortingComponents.length &&
                sortingComponents.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody> :
            <tbody>
              {!!components.length &&
                components.map(component => (
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
                    <td data-label="Stores Part #">{component.storesPartNumber}</td>
                  </tr>
                ))}
            </tbody>
          } */}

        </Table>
      </div>
    </section>
  )
}

export default Components
