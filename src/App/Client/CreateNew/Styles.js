import styled from "styled-components";

import Fields from "../../../shared/components/Fields";

import { font } from "../../../shared/utils/styles";

export const Form = styled.form`
  display: grid;
  grid-template-colums: 1fr 1fr;
`;

export const FormHeading = styled.div`
  ${font.size(2.25)}
`;

export const StyledFields = styled(Fields)``;
