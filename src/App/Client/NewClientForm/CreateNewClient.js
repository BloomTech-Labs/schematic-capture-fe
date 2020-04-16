import React, { useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import { dispatchers } from "../../../shared/actions/dashboardActions"
import { Fields } from "../../../shared/components"

import BackToLink from "../../../shared/components/Components/BackToLink"

const { addNewClient } = dispatchers

const CreateNewClient = () => {
  const { handleSubmit, register, errors } = useForm()
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
    <>
      <div>
        {/*<form onSubmit={handleSubmit(onAddNewClient)}>*/}
        {/*  <StyledFields fields={schema} register={register} errors={errors} />*/}
        {/*  <button type="Submit">Save</button>*/}
        {/*  <Link to="/dashboard">Cancel</Link>*/}
        {/*</form>*/}
        <div>
          <form onSubmit={handleSubmit(onAddNewClient)}>
            <h1>Create a New Client</h1>
            <div>
              <Fields
                type="string"
                name="companyName"
                id="companyName"
                placeholder="Company Name"
                aria-label="Company Name"
                ref={register({ required: true })}
              />
              <Fields
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                ref={register()}
              />
              <Fields
                type="string"
                name="street"
                id="street"
                placeholder="Street"
                aria-label="Street"
                ref={register({})}
              />
              <Fields
                type="string"
                name="city"
                id="city"
                placeholder="City"
                aria-label="City"
                ref={register({})}
              />
              <Fields
                type="string"
                name="state"
                id="state"
                placeholder="State"
                aria-label="State"
                ref={register({})}
              />
              <Fields
                type="string"
                name="zip"
                id="zip"
                placeholder="Zip Code"
                aria-label="Zip Code"
                ref={register({})}
              />
              <br />
              <br />
              {errors.email && errors.email.type === "required" && (
                <div id="error-email-required">
                  Please enter an email address.
                </div>
              )}

              {errors.name && errors.name.type === "required" && (
                <div id="error-name-required">
                  Please enter a name.
                </div>
              )}
            </div>
            <div>
              <button variant="primary" submit="button" btnBlock>
                Create
              </button>
            </div>
            <div>
              <BackToLink to="/dashboard" text="Back to Dashboard" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateNewClient
