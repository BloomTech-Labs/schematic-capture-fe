import { createGlobalStyle } from "styled-components";

import { color, font } from "../shared/utils/styles";

export default createGlobalStyle`

html { font-size: 62.5% }

body {
    color: ${color.textDark};
    line-height: 1.2;
    ${font.size(1.5)}
    ${font.regular}
}
`;
