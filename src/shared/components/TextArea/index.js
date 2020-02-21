import React, { forwardRef } from "react";
import { StyledTextArea } from "./Style";

const TextArea = forwardRef((props, ref) => {
  console.log(props);
  return <StyledTextArea {...props} inputRef={ref} />;
});

export default TextArea;
