import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  NewProjBtn,
  MBody,
  MH1,
  ModalCont,
  Container,
  Mod,
  NewProjBtn3
} from "../../Styles/Jobsheets";
import { dispatchers } from "../../../shared/actions/dashboardActions";

import { useForm } from "react-hook-form";
import DropboxChooser from "../CreateNew/Dropbox";

const EditComponents = ({ buttonLabel, component }) => {
  // console.log(component);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const [editInfo, setEditInfo] = useState({
    id: "",
    descriptions: "",
    manufacturer: "",
    partNumber: "",
    stockCode: "",
    image: "",
    resources: "",
    cutsheet: "",
    storesPartNumber: "",
  });
  const { updateComponent } = dispatchers;

  useEffect(() => {
    setEditInfo({
      id: component.id,
      descriptions: component.descriptions,
      manufacturer: component.manufacturer,
      partNumber: component.partNumber,
      stockCode: component.stockCode,
      image: component.image,
      resources: component.resources,
      cutsheet: component.cutsheet,
      storesPartNumber: component.storesPartNumber,
    });
  }, []);

  const { register } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(editInfo, "DATA!!!");

    dispatch(updateComponent(editInfo.id, editInfo));
    toggle();
  };

  const handleChange = (e) => {
    setEditInfo({ ...editInfo, [e.target.name]: e.target.value });
  };

  const handleImageChange = (url) => {
    setEditInfo({ ...editInfo, image: url });
  };

  const Update = () => {
    return (
      <>
        <MH1>Update Components</MH1>
        <MBody>
          {editInfo.descriptions === null || editInfo.manufacturer === null ? (
            <Container>
              {/* <FieldError>All Fields Required.</FieldError> */}
            </Container>
          ) : (
            <></>
          )}
          <Form onSubmit={onSubmit} 
              style={{
                width: "90%",
                marginRight: "30px",
                marginLeft: "180px",
                marginTop: "30rem"
                }}>
            <FormGroup >
              <Label for="descriptions">Description</Label>

              <Input
                   style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                    
                  }} 
                type="text"
                value={editInfo.descriptions}
                id="descriptions"
                placeholder="Type Description"
                name="descriptions"
                onChange={handleChange}
                autoComplete="off"
                ref={register({})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="manufacturer">Manufacturer</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.manufacturer}
                id="manufacturer"
                placeholder="Type Manufacturer"
                name="manufacturer"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="partNumber">Part Number</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.partNumber}
                id="partNumber"
                placeholder="Type Part Number"
                name="partNumber"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>

            <FormGroup>
              <Label for="stockCode">Stock Code</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.stockCode}
                id="stockCode"
                placeholder="Type Stock Code"
                name="stockCode"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>

            <FormGroup>
              <Label for="image">Image</Label>
              {/* display the last part of the image URL which is the name of the image */}
              <p>
                Currently:{" "}
                {editInfo.image &&
                  editInfo.image.split("/").slice(-1)[0].split("?")[0]}
              </p>
              <DropboxChooser
                inPopup={true}
                handleSelected={handleImageChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="resources">Resource</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.resources}
                id="resources"
                placeholder="Type Resource"
                name="resources"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>

            <FormGroup>
              <Label for="cutsheet">Cutsheet</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.cutsheet}
                id="cutsheet"
                placeholder="Type Cutsheet"
                name="cutsheet"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="storespart#">Stores Part #</Label>

              <Input
                  style={{
                    height: "4rem",
                    width: "30rem",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    paddingLeft: "0.9rem",
                    color: "black",
                    fontWeight: "",
                    fontSize: "90%",
                  }}
                type="text"
                value={editInfo.storesPartNumber}
                id="storespart#"
                placeholder="Type Stores Part #"
                name="storesPartNumber"
                onChange={handleChange}
                autoComplete="off"
                ref={register}
              />
            </FormGroup>

            <NewProjBtn3
              style={{marginTop: "35px", position: "relative", left: "-8rem"}}
              type="submit"
            >
              Update 
            </NewProjBtn3>
          </Form>
        </MBody>{" "}
      </>
    );
  };

  return (
    <ModalCont>
      <NewProjBtn data-cy="update-component-btn" onClick={toggle} style={{width: "70%", fontSize: "80%"}}>
        {buttonLabel}
      </NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <h2
          data-cy="edit-component-header"
          style={{ textAlign: "center", padding: "2rem 0" }}
        >
          
        </h2>
        <MBody>{Update(editInfo)}</MBody>
      </Mod>
    </ModalCont>
  );
};

export default EditComponents;
