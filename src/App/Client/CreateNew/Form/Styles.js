import styled from "styled-components";

import { Fields } from "../../../../shared/components";

import { font } from "../../../../shared/styles";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FormHeading = styled.div`
  ${font.size(2.25)}
`;

export const StyledFields = styled(Fields)``;
