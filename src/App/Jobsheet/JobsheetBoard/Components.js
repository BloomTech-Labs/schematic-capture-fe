import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import {
  Header,
  List,
  importButton,
  Table,
  Wrapper,
  Status,
  ImgWrapper
} from '../../Styles/Jobsheet/ComponetStyle';



import search from './searchIcon.png'
import Picture from './CameraImage.png'
import sort from './Sort.png'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { dispatchers } from "../../../shared/actions/dashboardActions"
import DropboxChooser from "../CreateNew/Dropbox"

const { fetchComponents } = dispatchers

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents))
}

const Components = () => {
  const { getValues, setValue, handleSubmit, watch } = useForm()
  const [components, setComponents] = useState([])
  const [number, setNumber] = useState()
  const [isNew, setIsNew] = useState(false)
  const [modal, setModal] = useState(false)

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


  return (
    
    <section>
      <Status>Incomplete({components.id})</Status>
      
      <Wrapper>
      <List>List</List>
      <ImgWrapper>
      <input class="Img" name="submit" src={search} type="image"></input>
      {/* <img class="Img" src={sort} alt="sort"></img> */}
      <input class="Img" name="submit" src={sort} type="image"></input>
      </ImgWrapper>
      </Wrapper>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <Table class="Table">
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
                    <importButton onClick={() => newToggle(component.componentId)}><img src={Picture} className="image"/></importButton>
                  </td>
                  <td data-label="Resources">{component.resources}</td>
                  <td data-label="Cutsheet">{component.cutsheet}</td>
                  <td data-label="Stores Part #">{component.storesPartNumber}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        
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
