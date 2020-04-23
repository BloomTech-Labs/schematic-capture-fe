function cov_1pzhstke1p() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/DropdownMenu-Styles.js";
  var hash = "4d20f066cb485066586bd49ddb15c55911df8cd8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/DropdownMenu-Styles.js",
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
    hash: "4d20f066cb485066586bd49ddb15c55911df8cd8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1pzhstke1p = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1pzhstke1p();
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, mixin } from "../../utils/styles";
export const Dropdown = (cov_1pzhstke1p().s[0]++, styled.div`
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
export const DropdownItem = (cov_1pzhstke1p().s[1]++, styled(Link)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duTWVudS1TdHlsZXMuanMiXSwibmFtZXMiOlsiTGluayIsInN0eWxlZCIsImNvbG9yIiwiZm9udCIsIm1peGluIiwiRHJvcGRvd24iLCJkaXYiLCJ0ZXh0RGFyayIsImJhY2tncm91bmRMaWdodCIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93TWVkaXVtIiwiRHJvcGRvd25JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQkMsS0FBdEIsUUFBbUMsb0JBQW5DO0FBRUEsT0FBTyxNQUFNQyxRQUFRLDZCQUFHSixNQUFNLENBQUNLLEdBQUk7Ozs7Ozs7Ozs7V0FVeEJILElBQUksQ0FBQ0ksUUFBUzs7O3NCQUdITCxLQUFLLENBQUNNLGVBQWdCOztzQkFFdEJOLEtBQUssQ0FBQ08sV0FBWTs7SUFFcENMLEtBQUssQ0FBQ00sZUFBZ0I7Q0FqQkwsQ0FBZDtBQW9CUCxPQUFPLE1BQU1DLFlBQVksNkJBQUdWLE1BQU0sQ0FBQ0QsSUFBRCxDQUFPOzs7OztXQUs5QkUsS0FBSyxDQUFDSyxRQUFTOzs7OztDQUxELENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgbWl4aW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICR7Zm9udC50ZXh0RGFya307XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmFja2dyb3VuZExpZ2h0fTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICR7bWl4aW4uYm94U2hhZG93TWVkaXVtfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duSXRlbSA9IHN0eWxlZChMaW5rKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDEuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbG9yOiAke2NvbG9yLnRleHREYXJrfTtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbmA7XG4iXX0=