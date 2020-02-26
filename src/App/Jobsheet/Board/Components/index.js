import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Section, SectionName } from "./Styles";

import { dispatchers } from "../../../../shared/actions/dashboardActions";

const { fetchComponents } = dispatchers;

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents));
};

const Components = () => {
  const [components, setComponents] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
  }, []);
  return (
    <Section>
      <SectionName>All Components</SectionName>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th scope="col">Component</th>
              <th scope="col">Description</th>
              <th scope="col">Part Number</th>
              <th scope="col">Stock Code</th>
            </tr>
          </thead>
          <tbody>
            {!!components.length &&
              components.map(component => (
                <tr key={component.id}>
                  <td data-label="Component">{component.id}</td>
                  <td data-label="Description">{component.descriptions}</td>
                  <td data-label="Part Number">{component.partNumber}</td>
                  <td data-label="Stock Code">{component.stockCode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Components;
