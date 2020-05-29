import styled from "styled-components";
import { color, font, mixin } from "../../shared/styles";
import Input from "../../shared/components/Components/Input";

export const FormContainer = styled.div`
background: ${color.backgroundLight};
border-radius: 0.5rem;
color: ${color.gray300};
padding: 4rem;
width: 95%;
h1 {
  margin-top: 0;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 2rem;
}
a {
  color: ${color.primary};
}
@media (min-width: 500px) {
  width: 440px;
}
`;

export const FormRow = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -5px;
margin-left: -5px;
`;

export const FormColumn = styled.div`
width: 100%;
padding-right: 5px;
padding-left: 5px;
flex-basis: 0;
flex-grow: 1;
max-width: 100%;
`;

export const FormGroup = styled.div`
margin-bottom: 1rem;
`;

export const StyledField = styled.input`
background: ${color.inputBackground};
border: 1px solid ${color.gray100};
box-sizing: border-box;
border-radius: 0.5rem;
color: ${color.inputColor};
display: block;
width: 100%;
padding: 14px 16px;
&:hover {
  border-color: ${mixin.darken(color.secondary, 0.1)};
  }
}
&:focus {
  border-color: ${color.primary};
  &::placeholder {
    color: ${color.gray100};
  }
}
`;

export const StyledSelect = styled.select`
background: ${color.inputBackground};
border: 1px solid ${color.gray100};
box-sizing: border-box;
border-radius: 0.5rem;
color: ${color.inputColor};
display: block;
width: 100%;
padding: 14px 16px;
&:hover {
  border-color: ${mixin.darken(color.secondary, 0.1)};
  }
}
&:focus {
  border-color: ${color.primary};
  &::placeholder {
    color: ${color.gray100};
  }
}
`;

export const LineOr = styled.div`
overflow: hidden;
text-align: center;
&:before,
&:after {
  background-color: #eaeaea;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
&:before {
  top: 1.15em;
  right: 1em;
  margin-left: -50%;
}
&:after {
  bottom: 2.8em;
  left: 1em;
  margin-right: -50%;
}
`;

export const FieldError = styled.div`
margin-top: 8px;
color: ${color.danger};
${font.size(1.25)}
`;



export const Form = styled.form``;
export const StyledInput = styled(Input)``;
