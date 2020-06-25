import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
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

const assignTechsSideEffect = async (dispatch, id, email, date) => {
  await dispatch(assignTechProject(id, email, date));
};

const { assignTechProject, fetchAvailableTechs } = dispatchers;
// console.log(assignTechProject(), "ASSIGN TECHS");
const TechModal = (props) => {
  const { buttonLabel } = props;
  const dispatch = useDispatch();
  const today = `${moment(new Date()).format("YYYY-MM-DD")}T00:00:00.000Z`;
  var techEmails = [];

  const params = useParams();
  // console.log(params, "PARAMS");

  const [modal, setModal] = useState(false);
  const [tech, setTech] = useState({
    name: null,
    date: null,
    project: null,
    email: null,
  });
  const toggle = () => {
    setModal(!modal);
    setTech({
      name: null,
      date: null,
      project: null,
      email: null,
    });
    setPage(0);
  };
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchAvailableTechs());
  }, []);

  const handleChange = (e) => {
    if (e.target.value === tech.email) {
      setTech({
        ...tech,
        name: null,
        email: null,
      });
    } else {
      let techObject = techs.find(
        (technician) => technician.email == e.target.value
      );
      // console.log(techObject.firstName, ' techObject.firstName')
      // console.log(techObject, "TECHOBJ")
      setTech({
        ...tech,
        name: `${techObject.firstName} ${techObject.lastName}`,
        email: e.target.value,
      });
      // console.log(e.target.value, ' e.target.value in handleChange');
    }
  };

  const handleDateChange = (e) => {
    setTech({ ...tech, date: e.target.value });
    console.log(e.target.value);
  };

  const handleJobChange = (e) => {
    const newProject = e.target.value === tech.project ? null : e.target.value;
    setTech({ ...tech, project: newProject });
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
    techEmails.push(tech.email);
  });
  // console.log(tech, "TECH")

  // const { currentJobsheets } = useSelector((state) => state.dashboard);
  const { currentProjects } = useSelector((state) => state.dashboard);

  const pageNav = (num) => {
    switch (num) {
      case 0:
        return (
          <>
            <MBody>
              {tech.name === null ? (
                <Container>
                  <FieldError>Please assign a technician</FieldError>
                </Container>
              ) : (
                <></>
              )}
              {techs.map((techi) => {
                let techColor = "#3079BC";
                if (techi.hasOwnProperty("assignedDates")) {
                  techColor = techi.assignedDates.includes(today)
                    ? "#FA5656"
                    : "#3079BC";
                }
                if (techi.email === tech.email) {
                  return (
                    <TechCont data-cy="checkboxes-for-techs">
                      <input
                        type="checkbox"
                        name={tech.name}
                        value={techi.email}
                        checked={true}
                        onChange={handleChange}
                      />
                      <label
                        style={{
                          color: techColor,
                        }}
                        htmlFor={tech.name}
                      >
                        {tech.name}
                      </label>
                    </TechCont>
                  );
                } else {
                  return (
                    <TechCont data-cy="checkboxes-for-techs">
                      <input
                        type="checkbox"
                        name={tech.name}
                        checked={false}
                        value={techi.email}
                        onChange={handleChange}
                      />
                      <label
                        style={{
                          color: techColor,
                        }}
                        htmlFor={tech.name}
                      >
                        {techi.email}
                      </label>
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
            <MH1 style={{ marginLeft: "100px" }}>Select Project</MH1>
            <MBody style={{ marginLeft: "100px" }}>
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
            <MH1 style={{ marginLeft: "100px" }}>Select Date</MH1>
            <MBody style={{ marginLeft: "100px" }}>
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
            <MH1 style={{ marginLeft: "100px" }}>Finalize</MH1>
            <MBody style={{ marginLeft: "100px" }}>
              <Container>
                <h1 style={{ marginLeft: "10px" }}>Technician - {tech.name}</h1>
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
      <NewProjBtn data-cy="assign-techs" onClick={toggle}>
        {buttonLabel}
      </NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <MH1 data-cy="assign-tech-header">Assign Technician</MH1>
        <MBody style={{ marginLeft: "-100px" }}>{pageNav(page)}</MBody>
        <NewProjBtn2 data-cy="next-button" onClick={changePage}>
          Next
        </NewProjBtn2>
      </Mod>
    </ModalCont>
  );
};

export default TechModal;
