import React, { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
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
import { dispatchers } from "../../../shared/actions/dashboardActions";
import { FieldError } from "../../Styles/FormStyles";

const { fetchAvailableTechs } = dispatchers;

const TechModal = (props) => {
  const { buttonLabel } = props;
  const dispatch = useDispatch();
  var techNames = [];

  const [modal, setModal] = useState(false);
  const [tech, setTech] = useState({ name: null, date: null, jobsheet: null });
  const toggle = () => setModal(!modal);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchAvailableTechs());
  }, []);

  const techs = useSelector((state) => state.dashboard.techs);

  techs.map((tech) => {
    techNames.push(tech.firstName);
  });

  const handleChange = (e) => {
    setTech({ ...tech, name: e.target.value });
    console.log(e.target.value);
  };

  const handleDateChange = (e) => {
    setTech({ ...tech, date: e.target.value });
    console.log(e.target.value);
  };

  const handleJobChange = (e) => {
    setTech({ ...tech, jobsheet: e.target.value });
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
  const { currentJobsheets } = useSelector((state) => state.dashboard);

  const pageNav = (num) => {
    switch (num) {
      case 0:
        return (
          <>
            <MBody>
              {techNames.name === null ? (
                <Container>
                  <FieldError>Please assign a technician</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {techNames.map((ele) => {
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
            <MBody>
              {tech.jobsheet === null ? (
                <Container>
                  <FieldError>Please assign a jobsheet</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {currentJobsheets.map((ele) => {
                if (ele === tech.jobsheet) {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.jobsheet}
                        value={ele}
                        checked={true}
                        onChange={handleJobChange}
                      />
                      <label for={ele}>{ele}</label>
                    </TechCont>
                  );
                } else {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.jobsheet}
                        checked={false}
                        value={ele}
                        onChange={handleJobChange}
                      />
                      <label for={ele}>{ele}</label>
                    </TechCont>
                  );
                }
              })}
            </MBody>
          </>
        );
      case 2:
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
      case 3:
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

export default TechModal;
