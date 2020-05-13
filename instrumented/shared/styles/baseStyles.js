function cov_dfsfvm3kg() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/styles/baseStyles.js";
  var hash = "afa710cc63d8d9e3fb440fc59c680588531057a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/styles/baseStyles.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "afa710cc63d8d9e3fb440fc59c680588531057a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_dfsfvm3kg = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_dfsfvm3kg();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VTdHlsZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb2xvciIsImZvbnQiLCJtaXhpbiIsImJhY2tncm91bmRCb2R5IiwidGV4dExpZ2h0Iiwic2l6ZSIsInJlZ3VsYXIiLCJib2xkIiwibGluayIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGlCQUFULFFBQWtDLG1CQUFsQztBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QixRQUFtQyxJQUFuQztBQUVBLGVBQWVILGlCQUFrQjs7Ozs7d0JBS1RDLEtBQUssQ0FBQ0csY0FBZTthQUNoQ0gsS0FBSyxDQUFDSSxTQUFVOztNQUV2QkgsSUFBSSxDQUFDSSxJQUFMLENBQVUsR0FBVixDQUFlO01BQ2ZKLElBQUksQ0FBQ0ssT0FBUTs7Ozs7Ozs7SUFRZkwsSUFBSSxDQUFDSyxPQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCYkwsSUFBSSxDQUFDTSxJQUFLOzs7Ozs7Ozs7OztNQVdSTCxLQUFLLENBQUNNLElBQU4sRUFBYTs7Ozs7OzZCQU1VUixLQUFLLENBQUNTLFdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBZ0J6QlQsS0FBSyxDQUFDUyxXQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFtQ1RULEtBQUssQ0FBQ1MsV0FBWTs7Ozs7OzsrQkFPbEJULEtBQUssQ0FBQ1MsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW5IakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgbWl4aW4gfSBmcm9tIFwiLi9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG5cbmh0bWwgeyBmb250LXNpemU6IDYyLjUlIH1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5iYWNrZ3JvdW5kQm9keX07XG4gICAgY29sb3I6ICR7Y29sb3IudGV4dExpZ2h0fTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICR7Zm9udC5zaXplKDEuNSl9XG4gICAgJHtmb250LnJlZ3VsYXJ9XG59XG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICR7Zm9udC5yZWd1bGFyfVxufVxuXG4qLCAqOmFmdGVyLCAqOmJlZm9yZSwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwsIGxpLCBvbCwgZGQsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHN0cm9uZyB7XG4gICR7Zm9udC5ib2xkfVxufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS40Mjg1O1xuICBhIHtcbiAgICAke21peGluLmxpbmsoKX1cbiAgfVxufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGFibGUgY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogLjVlbSAwIC43NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xuICBwYWRkaW5nOiAuMzVlbTtcbn1cblxudGFibGUgdGgsXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IC42MjVlbTtcbn1cblxudGFibGUgdGgge1xuICBmb250LXNpemU6IC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4uc2Vjb25kYXJ5IHsgb3BhY2l0eTogMC41OyBmb250LXNpemU6IDE0cHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIHRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICB9XG5cblxuICB0YWJsZSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjYyNWVtO1xuICB9XG5cbiAgdGFibGUgdGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICB0YWJsZSB0ZDo6YmVmb3JlIHtcbiAgICAvKlxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbn1cblxuYDtcbiJdfQ==