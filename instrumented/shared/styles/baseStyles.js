function cov_2ppj4d39ee() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\styles\\baseStyles.js";
  var hash = "e1fa0aeb5bb0af2f03198796de4bea1d031076f6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\styles\\baseStyles.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e1fa0aeb5bb0af2f03198796de4bea1d031076f6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ppj4d39ee = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ppj4d39ee();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VTdHlsZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb2xvciIsImZvbnQiLCJtaXhpbiIsImJhY2tncm91bmRCb2R5IiwidGV4dExpZ2h0Iiwic2l6ZSIsInJlZ3VsYXIiLCJib2xkIiwibGluayIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsaUJBQVQsUUFBa0MsbUJBQWxDO0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLFFBQW1DLElBQW5DO0FBRUEsZUFBZUgsaUJBQWtCOzs7Ozt3QkFLVEMsS0FBSyxDQUFDRyxjQUFlO2FBQ2hDSCxLQUFLLENBQUNJLFNBQVU7O01BRXZCSCxJQUFJLENBQUNJLElBQUwsQ0FBVSxHQUFWLENBQWU7TUFDZkosSUFBSSxDQUFDSyxPQUFROzs7Ozs7OztJQVFmTCxJQUFJLENBQUNLLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJiTCxJQUFJLENBQUNNLElBQUs7Ozs7Ozs7Ozs7O01BV1JMLEtBQUssQ0FBQ00sSUFBTixFQUFhOzs7Ozs7NkJBTVVSLEtBQUssQ0FBQ1MsV0FBWTs7Ozs7Ozs7Ozs7Ozs7OztzQkFnQnpCVCxLQUFLLENBQUNTLFdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQW1DVFQsS0FBSyxDQUFDUyxXQUFZOzs7Ozs7OytCQU9sQlQsS0FBSyxDQUFDUyxXQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbkhqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgbWl4aW4gfSBmcm9tIFwiLi9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuaHRtbCB7IGZvbnQtc2l6ZTogNjIuNSUgfVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmJhY2tncm91bmRCb2R5fTtcclxuICAgIGNvbG9yOiAke2NvbG9yLnRleHRMaWdodH07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgJHtmb250LnNpemUoMS41KX1cclxuICAgICR7Zm9udC5yZWd1bGFyfVxyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgJHtmb250LnJlZ3VsYXJ9XHJcbn1cclxuXHJcbiosICo6YWZ0ZXIsICo6YmVmb3JlLCBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwsIGxpLCBvbCwgZGQsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzdHJvbmcge1xyXG4gICR7Zm9udC5ib2xkfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1O1xyXG4gIGEge1xyXG4gICAgJHttaXhpbi5saW5rKCl9XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRhYmxlIGNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbWFyZ2luOiAuNWVtIDAgLjc1ZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGFibGUgdHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xyXG4gIHBhZGRpbmc6IC4zNWVtO1xyXG59XHJcblxyXG50YWJsZSB0aCxcclxudGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IC42MjVlbTtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvcGFjaXR5OiAwLjI1O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5IHsgb3BhY2l0eTogMC41OyBmb250LXNpemU6IDE0cHg7IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGhlYWQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIHRhYmxlIHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC42MjVlbTtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZDo6YmVmb3JlIHtcclxuICAgIC8qXHJcbiAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICovXHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5gO1xyXG4iXX0=