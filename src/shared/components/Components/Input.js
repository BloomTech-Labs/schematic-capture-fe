import React, { forwardRef } from "react";

import { StyledInput, InputField, StyledIcon } from "../Styles/Input-Styles";

const Input = forwardRef((props, ref) => {
  const { icon, className, ...rest } = props;

  return (
    <StyledInput className={className}>
      {icon && <StyledIcon type={icon} size={16} />}
      <InputField ref={ref} {...rest} />
    </StyledInput>
  );
});

export default Input;
