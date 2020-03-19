import React, { Fragment } from "react";

// styled components
import { Input, TextArea } from "..";

const Fields = props => {
  const { fields, errors, register } = props;
  return (
    <>
      {fields.map((fieldProps, i) => {
        const { ref, options, fieldType, error, ...rest } = fieldProps;
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
                <Input ref={ref(register)} {...rest} />
                {errors[fieldProps.name] && <span>{fieldProps.error}</span>}
              </Fragment>
            );
        }
      })}
    </>
  );
};

export default Fields;
