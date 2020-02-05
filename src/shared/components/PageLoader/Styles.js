import styled from "styled-components";

import { color, mixin } from "../../utils/styles";

export default styled.div`
  ${mixin.cover}
  background-color: ${color.backgroundLight};
  z-index: 1;
  padding: 225px 0;
`;
