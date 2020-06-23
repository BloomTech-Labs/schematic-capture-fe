function cov_19oeq1wru5() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\DropdownMenu-Styles.js";
  var hash = "61e97477153c5ebc6687e83a8d8f7406ac3bad5c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\DropdownMenu-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 26,
          column: 28
        },
        end: {
          line: 36,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "61e97477153c5ebc6687e83a8d8f7406ac3bad5c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19oeq1wru5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_19oeq1wru5();
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, mixin } from "../../utils/styles";
export const Dropdown = (cov_19oeq1wru5().s[0]++, styled.div`
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: ${font.textDark};
  text-align: left;
  list-style: none;
  background-color: ${color.backgroundLight};
  background-clip: padding-box;
  border: 1px solid ${color.borderColor};
  border-radius: 0.25rem;
  ${mixin.boxShadowMedium}
`);
export const DropdownItem = (cov_19oeq1wru5().s[1]++, styled(Link)`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  color: ${color.textDark};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duTWVudS1TdHlsZXMuanMiXSwibmFtZXMiOlsiTGluayIsInN0eWxlZCIsImNvbG9yIiwiZm9udCIsIm1peGluIiwiRHJvcGRvd24iLCJkaXYiLCJ0ZXh0RGFyayIsImJhY2tncm91bmRMaWdodCIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93TWVkaXVtIiwiRHJvcGRvd25JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QixRQUFtQyxvQkFBbkM7QUFFQSxPQUFPLE1BQU1DLFFBQVEsNkJBQUdKLE1BQU0sQ0FBQ0ssR0FBSTs7Ozs7Ozs7OztXQVV4QkgsSUFBSSxDQUFDSSxRQUFTOzs7c0JBR0hMLEtBQUssQ0FBQ00sZUFBZ0I7O3NCQUV0Qk4sS0FBSyxDQUFDTyxXQUFZOztJQUVwQ0wsS0FBSyxDQUFDTSxlQUFnQjtDQWpCTCxDQUFkO0FBb0JQLE9BQU8sTUFBTUMsWUFBWSw2QkFBR1YsTUFBTSxDQUFDRCxJQUFELENBQU87Ozs7O1dBSzlCRSxLQUFLLENBQUNLLFFBQVM7Ozs7O0NBTEQsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IGNvbG9yLCBmb250LCBtaXhpbiB9IGZyb20gXCIuLi8uLi91dGlscy9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93biA9IHN0eWxlZC5kaXZgXHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIG1hcmdpbjogMC4xMjVyZW0gMCAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogJHtmb250LnRleHREYXJrfTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5iYWNrZ3JvdW5kTGlnaHR9O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAke21peGluLmJveFNoYWRvd01lZGl1bX1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93bkl0ZW0gPSBzdHlsZWQoTGluaylgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgY29sb3I6ICR7Y29sb3IudGV4dERhcmt9O1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbmA7XHJcbiJdfQ==