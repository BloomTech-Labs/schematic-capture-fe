import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

// styled components
import { Input, TextArea } from "../";

const Form = props => {
  const { buttonText, onSubmit, fields, ...rest } = props;
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {fields.map((fieldProps, i) => {
        const { ref, options, fieldType, ...rest } = fieldProps;
        switch (fieldType) {
          case "select":
            return (
              <Fragment key={i}>
                <select ref={ref(register)} {...rest}>
                  {options.map(({ value, text }) => (
                    <option key={value} value={value}>
                      {text}
                    </option>
                  ))}
                </select>
                {errors[fieldProps.name] && <span>{fieldProps.error}</span>}
              </Fragment>
            );
          case "textarea":
            return (
              <Fragment key={i}>
                <TextArea ref={ref(register)} {...rest} />
                {errors[fieldProps.name] && <span>{fieldProps.error}</span>}
              </Fragment>
            );
          default:
            return (
              <Fragment key={i}>
                <Input key={i} ref={ref(register)} {...rest} />
                {errors[fieldProps.name] && <span>{fieldProps.error}</span>}
              </Fragment>
            );
        }
      })}
      <button>{buttonText}</button>
    </form>
  );
};

export default Form;
