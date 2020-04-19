import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
// import styled from '../JobsheetBoard/Styles.js';
import styled from "styled-components";


import Picture from './CameraImage.png'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { dispatchers } from "../../../shared/actions/dashboardActions"
import DropboxChooser from "../CreateNew/Dropbox"

const { fetchComponents } = dispatchers

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents))
};

const Components = () => {
  const { getValues, setValue, handleSubmit, watch } = useForm()
  const [components, setComponents] = useState([])
  const [number, setNumber] = useState()
  const [isNew, setIsNew] = useState(false)
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
    
  }, []);

  useEffect(() => {
    const file = watch("jpg")
    if(file) {
      console.log({file})
      if(file.length>0){
        setValue("name", file[0].name)
      }
    } 
  }, [watch("jpg")])

  const newToggle = id => {
    setNumber(id)
    toggle()
  }
  const toggle = () => {
    setModal(!modal)
  }

  const onSubmit = e => {
    console.log('hello there')
  }
// Styles => Start Here 

  const Header = styled.h2`
  color: #3079BC ; 
  top: 10px;
  position: absolute;
  padding: 2px;
  `;

  const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  `;

  const Text = styled.h4`
  color: #3079BC;
  `;

  const Button = styled.button `
  background-color: white;
  height: 12%;
  width: 12%;
  `;
  

  return (
    
    <section>
      <Header>Schematic Capture</Header>
      <TextWrapper>
      <component style={{ color: '#3079BC', }}>List</component>
      <Text>Schematic </Text>
      </TextWrapper>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <table>
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
                    <Button onClick={() => newToggle(component.componentId)}><img src={Picture} className="image"/></Button>
                  </td>
                  <td data-label="Resources">{component.resources}</td>
                  <td data-label="Cutsheet">{component.cutsheet}</td>
                  <td data-label="Stores Part #">{component.storesPartNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
        
        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle}>
          <ModalHeader toggle={toggle}><h3>Select Image for Component</h3></ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DropboxChooser />
              {/* <label
                type="button"
                htmlFor="jpg"
                onClick={() => setIsNew(true)}
              >
                <ImgSel>Import from Computer</ImgSel>
              </label>
              <label htmlFor="jpg">
                <input
                  hidden
                  id="jpg"
                  name="jpg"
                  multiple={false}
                  type="file"
                  accept=".jpg"
                  ref={register}
                />
              </label> */}
              <label htmlFor="selectcomp">
                <select 
                  name="selectcomp"
                  id="selectcomp"
                >
                  <option value={number}>{number}</option>
                </select>
              </label>
              {/* <label htmlFor="name">
                <StyledInput
                  id="name"
                  name="name"
                  placeholder="Image"
                  disabled={!isNew}
                  hidden={!isNew}
                  ref={register({ required: true })}
                />
              </label> */}
              <button type="submit" hidden={!getValues().name}>Submit</button>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Exit</Button>
          </ModalFooter>
      </Modal>

      </div>
    </section>
  )
}

export default Components
