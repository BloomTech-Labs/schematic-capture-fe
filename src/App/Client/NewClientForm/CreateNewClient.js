import React, { useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { dispatchers } from "../../../shared/actions/dashboardActions"

import BackToLink from "../../../shared/components/Components/BackToLink"
import { 
  StyledField, 
  FormContainer, 
  FormGroup, 
  Form, 
  FieldError 
} from "../../Styles/FormStyles"

import { Section } from "../../Styles/Dashboard"
import { NewProjBtn, CreateNewClientBtn, BorderedDiv2 } from "../../Styles/Jobsheets"

const { addNewClient } = dispatchers

const CreateNewClient = () => {
  const { handleSubmit, register, errors } = useForm()

  console.log(errors, ' errors')

  const dispatch = useDispatch()
  const history = useHistory()
  let inputElement

  useEffect(() => {
    inputElement = document.getElementById("phone")
    inputElement.addEventListener("keyup", formatToPhone)

    inputElement = document.getElementById("zip")
    inputElement.addEventListener("keyup", formatToZip)
  })

  const onAddNewClient = data => {
    dispatch(addNewClient(data, history))
  }

  const formatToZip = event => {
    const target = event.target
    let input = target.value.replace(/\D/g, "").substring(0, 9)
    const zip = input.substring(0, 5)
    const addon = input.substring(5, 9)

    if (input.length > 5) {
      target.value = `${zip} - ${addon}`
    } else {
      target.value = `${zip}`
    }
  }

  const formatToPhone = event => {
    const target = event.target;
    const input = target.value.replace(/\D/g, "").substring(0, 10)
    const zip = input.substring(0, 3)
    const middle = input.substring(3, 6)
    const last = input.substring(6, 10)

    if (input.length > 6) {
      target.value = `(${zip}) ${middle}-${last}`
    } else if (input.length > 3) {
      target.value = `(${zip}) ${middle}`
    } else if (input.length > 0) {
      target.value = `(${zip}`
    }
  }

  return (
    <Section>
        <Form onSubmit={handleSubmit(onAddNewClient)}>
         <NewProjBtn type="Submit">Save</NewProjBtn>
         <NewProjBtn to="/dashboard">Cancel</NewProjBtn>
        </Form>
      <Form onSubmit={handleSubmit(onAddNewClient)}>
          <h1>Create a New Client</h1>
        <BorderedDiv2>

          <FormContainer>
            <FormGroup>
              <StyledField
                type="string"
                name="companyName"
                id="companyName"
                placeholder="Company Name*"
                aria-label="Company Name"
                ref={register({ required: true })}
              />
              <StyledField
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number*"
                aria-label="Phone Number"
                ref={register({ required: true })}
              />
            </FormGroup>
            <br></br>
            <FormGroup>
              <StyledField
                type="string"
                name="street"
                id="street"
                placeholder="Street"
                aria-label="Street"
                ref={register({})}
              />
              <StyledField
                type="string"
                name="city"
                id="city"
                placeholder="City"
                aria-label="City"
                ref={register({})}
              />
              <StyledField
                type="string"
                name="state"
                id="state"
                placeholder="State"
                aria-label="State"
                ref={register({})}
              />
              <StyledField
                type="string"
                name="zip"
                id="zip"
                placeholder="Zip Code"
                aria-label="Zip Code"
                ref={register({})}
              />
            </FormGroup>
            <br></br>
            <FormGroup>
              <StyledField
                type="string"
                name="contactName"
                id="contactName"
                placeholder="Contact Name"
                aria-label="Company Name"
                ref={register({})}
              />
              <StyledField
                type="tel"
                name="contactEmail"
                id="contactEmail"
                placeholder="Contact's Email"
                aria-label="Contact's Email"
                ref={register({})}
              />
            </FormGroup>
          <br />
          <br />
          {errors.companyName && errors.companyName.type === "required" && (
              <FieldError id="error-name-required">
                <p> NAME IS REQUIRED </p>
              </FieldError>
          )}
          {errors.phone && errors.phone.type === "required" && (
            <FieldError id="error-phone-required">
              <p> PHONE NUMBER IS REQUIRED. </p>
            </FieldError>
          )}
        </FormContainer>
             </BorderedDiv2>
        <div>
          <CreateNewClientBtn variant="primary" submit="button">
            Create
          </CreateNewClientBtn>
        </div>
        <div>
          <BackToLink to="/dashboard" text="Back to Dashboard" />
        </div>
      </Form>
    </Section>
  )
}

export default CreateNewClient
