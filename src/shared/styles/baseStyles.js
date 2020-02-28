import { createGlobalStyle } from "styled-components";

import { color, font, mixin } from "./";

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

table {
  border: 0;
  border-bottom: 1px solid ${color.borderColor};
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
  text-align: left;
}

table tr {
  border: 1px solid ${color.borderColor};
  padding: .35em;
}

table th,
table td {
  padding: .625em;
}

table th {
  font-size: .85em;
  text-align: left;
  opacity: 0.25;
}

.secondary { opacity: 0.5; font-size: 14px; }

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }


  table tr {
    border-bottom: 3px solid ${color.borderColor};
    display: block;
    padding-bottom: 1em;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid ${color.borderColor};
    display: block;
    font-size: .8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

`;
