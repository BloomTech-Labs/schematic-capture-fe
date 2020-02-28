import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { schema } from "./schema";
import { StyledFields } from "./Styles";

import { dispatchers } from "../../../shared/actions/dashboardActions";

import {
  InviteContainer,
  InviteForm,
  InviteGroup,
  InviteGroupBack,
  InviteTitle
} from "../../../shared/components/Invite/Styles";
import { Button, FieldError, StyledField } from "../../Auth/Styles";
import BackToLink from "../../../shared/components/BackToLink";

const { addNewClient } = dispatchers;

const CreateNewClient = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewClient = data => {
    dispatch(addNewClient(data, history));
  };

  return (
    <InviteContainer>
      {/*<form onSubmit={handleSubmit(onAddNewClient)}>*/}
      {/*  <StyledFields fields={schema} register={register} errors={errors} />*/}
      {/*  <button type="Submit">Save</button>*/}
      {/*  <Link to="/dashboard">Cancel</Link>*/}
      {/*</form>*/}
      <InviteForm>
        <form onSubmit={handleSubmit(onAddNewClient)}>
          <InviteTitle>Create a New Client</InviteTitle>
          <InviteGroup>
            <StyledField
              type="string"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
              aria-label="Company Name"
              ref={register({ required: true })}
            />
            <StyledField
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              aria-label="Phone Number"
              ref={register()}
            />
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
              type="number"
              name="zip"
              id="zip"
              placeholder="Zip Code"
              aria-label="Zip Code"
              ref={register({})}
            />
            <br />
            <br />
            {errors.email && errors.email.type === "required" && (
              <FieldError id="error-email-required">
                Please enter an email address.
              </FieldError>
            )}

            {errors.name && errors.name.type === "required" && (
              <FieldError id="error-name-required">
                Please enter a name.
              </FieldError>
            )}
          </InviteGroup>
          <InviteGroup>
            <Button variant="primary" submit="button" btnBlock>
              Create
            </Button>
          </InviteGroup>
          <InviteGroupBack>
            <BackToLink to="/dashboard" text="Back to Dashboard" />
          </InviteGroupBack>
        </form>
      </InviteForm>
    </InviteContainer>
  );
};

export default CreateNewClient;
