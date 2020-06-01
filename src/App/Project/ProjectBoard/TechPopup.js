import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import {
  NewProjBtn,
  NewProjBtn2,
  TechCont,
  MBody,
  MH1,
  ModalCont,
  Container,
  Mod,
} from "../../Styles/Jobsheets";
import { dispatchers } from "../../../shared/actions/dashboardActions"
import { FieldError } from "../../Styles/FormStyles";

const {fetchAvailableTechs} = dispatchers;

// TODO: currently hard-coded... need to pull from database instead.
// var availableTechs = [
//   "Adam",
//   "Tyler",
//   "Danni",
//   "Vincent"
// ];

const TechModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [tech, setTech] = useState({ name: null, date: null });
  const toggle = () => setModal(!modal);
  const [page, setPage] = useState(0);

  useEffect(() => {
    props.fetchAvailableTechs();
  }, [])

  const handleChange = (e) => {
    setTech({ ...tech, name: e.target.value });
    console.log(e.target.value);
  };

  const handleDateChange = (e) => {
    setTech({ ...tech, date: e.target.value });
    console.log(e.target.value);
  };

  const changePage = () => {
    var num = page;
    if (page >= 2) {
      setPage(0);
      toggle();
      console.log(tech);
    } else if (page === 1) {
      if (tech.date === null) {
      } else {
        num += 1;
        setPage(num);
      }
    } else if (page === 0) {
      if (tech.name === null) {
      } else {
        num += 1;
        setPage(num);
      }
    }
  };

  const pageNav = (num) => {
    switch (num) {
      case 0:
        return (
          <>
            <MH1>Available technicians</MH1>
            <MBody>
              {props.availableTechs.name === null ? (
                <Container>
                  <FieldError>Please assign a technician</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {props.availableTechs.map((ele) => {
                if (ele === tech.name) {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.name}
                        value={ele}
                        checked={true}
                        onChange={handleChange}
                      />
                      <label for={ele}>{ele}</label>
                    </TechCont>
                  );
                } else {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.name}
                        checked={false}
                        value={ele}
                        onChange={handleChange}
                      />
                      <label for={ele}>{ele}</label>
                    </TechCont>
                  );
                }
              })}
            </MBody>
          </>
        );
      case 1:
        return (
          <>
            <MH1>Select Date</MH1>
            <MBody>
              <Container>
                <h1>Enter Date Here</h1>
                {tech.date === null ? (
                  <FieldError>Needs Date</FieldError>
                ) : (
                  <></>
                )}
                <input
                  type="date"
                  value={tech.date}
                  name="Date"
                  onChange={handleDateChange}
                  required={true}
                />
              </Container>
            </MBody>
          </>
        );
      case 2:
        return (
          <>
            <MH1>Finalize</MH1>
            <MBody>
              <Container>
                <h1>Technician: {tech.name}</h1>
                <h2>Date: {tech.date}</h2>
              </Container>
            </MBody>
          </>
        );

      default:
        break;
    }
  };

  return (
    <ModalCont>
      <NewProjBtn onClick={toggle}>{buttonLabel}</NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <MH1>Available technicians</MH1>
        <MBody>{pageNav(page)}</MBody>
        <NewProjBtn2 onClick={changePage}>Assign Technician</NewProjBtn2>
      </Mod>
    </ModalCont>
  );
};

const mapStateToProps = state => {
  return {
      availableTechs: state.availableTechs
  }
}
export default connect(mapStateToProps, { fetchAvailableTechs }) (TechModal);

