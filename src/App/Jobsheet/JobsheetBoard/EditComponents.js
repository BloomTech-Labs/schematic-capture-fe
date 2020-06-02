import React, { useState, useEffect } from "react";
import { Modal, Form, FormGroup, Input, Label } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  NewProjBtn2,
  NewProjBtn,
  TechCont,
  MBody,
  MH1,
  ModalCont,
  Container,
  Mod,
  BtnCont,
} from "../../Styles/Jobsheets";
import { dispatchers } from "../../../shared/actions/dashboardActions";

import { FieldError } from "../../Styles/Auth/loginStyles";
import { useForm } from "react-hook-form";

const EditComponents = ({ buttonLabel, component, setComponents }) => {
  console.log(component);
  const { id } = useParams();
  // const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const history = useHistory();
  const [editInfo, setEditInfo] = useState({
    id: "",
    descriptions: "",
    manufacturer: "",
    partNumber: "",
    stockCode: "",
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
      resources: component.resources,
      cutsheet: component.cutsheet,
      storesPartNumber: component.storesPartNumber,
    });
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(editInfo, "DATA!!!");
    dispatch(updateComponent(editInfo.id, editInfo, setEditInfo, setComponents, history))
  };

  //   const handleSubmit = e => {
  //     e.preventDefault()
  //     axios
  //         .put(`http://localhost:5000/api/movies/${id}`, item)
  //         .then(res => {
  //             console.log(res.data)
  //             props.setMovieList([res.data].concat(props.movieList.filter(item => `${item.id}` !== id)))
  //             push(`/`)
  //         })

  // }

  const handleChange = (e) => {
    setEditInfo({ ...editInfo, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const Update = () => {
    return (
      <>
        <MH1></MH1>
        <MBody>
          {editInfo.descriptions === null || editInfo.manufacturer === null ? (
            <Container>
              {/* <FieldError>All Fields Required.</FieldError> */}
            </Container>
          ) : (
            <></>
          )}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="descriptions">Description</Label>

              <Input
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
              <Label for="resources">Resource</Label>

              <Input
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

            <button
              type="submit"
              style={{ border: "1px solid gray", borderRadius: "5px" }}
            >
              Update Component
            </button>
          </Form>
        </MBody>{" "}
      </>
    );
  };

  return (
    <ModalCont>
      <NewProjBtn onClick={toggle}>{buttonLabel}</NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <h2 style={{ textAlign: "center", padding: "2rem 0" }}>
          Edit Component
        </h2>
        <MBody>{Update(editInfo)}</MBody>
      </Mod>
    </ModalCont>
  );
};

export default EditComponents;
