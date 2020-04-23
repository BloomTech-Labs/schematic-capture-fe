import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { dispatchers } from "../../../shared/actions/dashboardActions"
import DropboxChooser from "../CreateNew/Dropbox"

const { fetchComponents } = dispatchers

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents))
}

const Components = () => {
  const [components, setComponents] = useState([])

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents)
    
  }, [])

  return (
    <section>
      <h2>All Components</h2>
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
                    <DropboxChooser />
                  </td>
                  <td data-label="Resources">{component.resources}</td>
                  <td data-label="Cutsheet">{component.cutsheet}</td>
                  <td data-label="Stores Part #">{component.storesPartNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Components
