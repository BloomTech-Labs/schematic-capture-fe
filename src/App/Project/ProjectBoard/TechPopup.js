import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { useParams } from "react-router-dom";

const assignTechsSideEffect = async (dispatch, id, setTech) => {
  await dispatch(assignTechProject(id, setTech));
};

const { assignTechProject, fetchAvailableTechs } = dispatchers;
console.log(assignTechProject(), "ASSIGN TECHS");
const TechModal = (props) => {
  const { buttonLabel } = props;
  const dispatch = useDispatch();
  var techNames = [];

  const params = useParams();
  console.log(params, "PARAMS");

  const [modal, setModal] = useState(false);
  const [tech, setTech] = useState({
    name: null,
    date: null,
    project: null,
    email: null
  });
  const toggle = () => setModal(!modal);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchAvailableTechs());
    dispatch(assignTechProject());
  }, []);


  const handleChange = (e) => {
   let techObject = techs.find(technician => technician.firstName == e.target.value);
    setTech({ ...tech, name: e.target.value, email: techObject.email });
    console.log(e.target.value);
    console.log(techObject, "TECHOBJ")
  };
  const handleDateChange = (e) => {
    setTech({ ...tech, date: e.target.value });
    console.log(e.target.value);
  };

  const handleJobChange = (e) => {
    setTech({ ...tech, project: e.target.value });
    console.log(e.target.value);
  };

  const changePage = () => {
    var num = page;
    if (page >= 3) {
      setPage(0);
      toggle();
      console.log(tech);
      assignTechsSideEffect(dispatch, tech.project, tech.email, tech.date);
    } else if (page === 2) {
      if (tech.date === null) {
      } else {
        num += 1;
        setPage(num);
      }
    } else if (page === 1) {
      if (tech.project === null) {
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
  const techs = useSelector((state) => state.dashboard.techs);
  techs.map((tech) => {
    techNames.push(tech.firstName);
  });
  console.log(tech, "TECH")

  // const { currentJobsheets } = useSelector((state) => state.dashboard);
  const { currentProjects } = useSelector((state) => state.dashboard);

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
            <MH1>Select Project</MH1>
            <MBody>
              {tech.project === null ? (
                <Container>
                  <FieldError>Please assign a project</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {currentProjects.map((ele) => {
                if (ele.id === Number(tech.project)) {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.project}
                        value={ele.id}
                        checked={true}
                        onChange={handleJobChange}
                      />
                      <label for={ele}>{ele.name}</label>
                    </TechCont>
                  );
                } else {
                  return (
                    <TechCont>
                      <input
                        type="checkbox"
                        name={tech.project}
                        checked={false}
                        value={ele.id}
                        onChange={handleJobChange}
                      />
                      <label for={ele}>{ele.name}</label>
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
        <MH1>Assign Technician</MH1>
        <MBody>{pageNav(page)}</MBody>
        <NewProjBtn2 onClick={changePage}>Next</NewProjBtn2>
      </Mod>
    </ModalCont>
  );
};

export default TechModal;
