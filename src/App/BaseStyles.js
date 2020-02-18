import { createGlobalStyle } from "styled-components";

import { color, font, mixin } from "../shared/utils/styles";

export default createGlobalStyle`

html { font-size: 62.5% }

body {
    background-color: ${color.backgroundBody};
    color: ${color.textLight};
    line-height: 1.2;
    ${font.size(1.5)}
    ${font.regular}
}

button,
input,
optgroup,
select,
textarea {
  ${font.regular}
}

*, *:after, *:before, input[type="search"] {
  box-sizing: border-box;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6, strong {
  ${font.bold}
}

button {
  background: none;
  border: none;
}

p {
  line-height: 1.4285;
  a {
    ${mixin.link()}
  }
}
`;
