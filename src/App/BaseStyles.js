import { createGlobalStyle } from "styled-components";

import { color, font } from "../shared/utils/styles";

export default createGlobalStyle`

body {
    color: ${color.textDark};
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
}
`;
