import React, { useState } from "react";
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

import { FieldError } from "../../Styles/Auth/loginStyles";

var people = [
  "Adam",
  "Tyler",
  "Danni",
  "Vincent",
  "Test1",
  "Test2",
  "Test3",
  "Test4",
  "Test5",
  "Test6",
  "Test7",
  "Test8",
  "Test9",
  "Test10",
  "Test11",
  "Test12",
  "Test13",
  "Test14",
  "Test15",
  "Test16",
  "Test17",
  "Test18",
  "Test19",
  "Test20",
  "Test21",
  "Test22",
  "Test23",
  "Test24",
];

const TechModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [tech, setTech] = useState({ name: null, date: null });
  const toggle = () => setModal(!modal);
  const [page, setPage] = useState(0);

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
              {tech.name === null ? (
                <Container>
                  <FieldError>Please assign a technician</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {people.map((ele) => {
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
        <MBody>
          {people.map((ele) => (
            <TechCont>
              <input type="checkbox" name={ele} value={ele} />
              <label for={ele}>{ele}</label>
            </TechCont>
          ))}
        </MBody>
        <NewProjBtn2 onClick={toggle}>Assign Technician</NewProjBtn2>
      </Mod>
    </ModalCont>
  );
};

export default TechModal;
