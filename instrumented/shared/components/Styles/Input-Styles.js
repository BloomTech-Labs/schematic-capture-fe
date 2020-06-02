function cov_27a0gdm9xo() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/Input-Styles.js";
  var hash = "611b127a694affca5eb8bf50b04c73a60399eb6e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/Input-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "1": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 7,
          column: 36
        }
      },
      "2": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 28,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "611b127a694affca5eb8bf50b04c73a60399eb6e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_27a0gdm9xo = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_27a0gdm9xo();
import styled from "styled-components";
import { color, mixin } from "../../styles";
export const StyledInput = (cov_27a0gdm9xo().s[0]++, styled.div``);
export const StyledIcon = (cov_27a0gdm9xo().s[1]++, styled.i``);
export const InputField = (cov_27a0gdm9xo().s[2]++, styled.input`
  background: ${color.inputBackground};
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
    &::placeholder {
      color: ${color.gray100};
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LVN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjb2xvciIsIm1peGluIiwiU3R5bGVkSW5wdXQiLCJkaXYiLCJTdHlsZWRJY29uIiwiaSIsIklucHV0RmllbGQiLCJpbnB1dCIsImlucHV0QmFja2dyb3VuZCIsImdyYXkxMDAiLCJpbnB1dENvbG9yIiwiZGFya2VuIiwic2Vjb25kYXJ5IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsS0FBaEIsUUFBNkIsY0FBN0I7QUFFQSxPQUFPLE1BQU1DLFdBQVcsNkJBQUdILE1BQU0sQ0FBQ0ksR0FBSSxFQUFkLENBQWpCO0FBRVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHTCxNQUFNLENBQUNNLENBQUUsRUFBWixDQUFoQjtBQUVQLE9BQU8sTUFBTUMsVUFBVSw2QkFBR1AsTUFBTSxDQUFDUSxLQUFNO2dCQUN2QlAsS0FBSyxDQUFDUSxlQUFnQjtzQkFDaEJSLEtBQUssQ0FBQ1MsT0FBUTs7O1dBR3pCVCxLQUFLLENBQUNVLFVBQVc7Ozs7OztvQkFNUlQsS0FBSyxDQUFDVSxNQUFOLENBQWFYLEtBQUssQ0FBQ1ksU0FBbkIsRUFBOEIsR0FBOUIsQ0FBbUM7OztvQkFHbkNaLEtBQUssQ0FBQ2EsT0FBUTs7ZUFFbkJiLEtBQUssQ0FBQ1MsT0FBUTs7O0NBaEJOLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgY29sb3IsIG1peGluIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmlgYDtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQgPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuaW5wdXRCYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ncmF5MTAwfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjb2xvcjogJHtjb2xvci5pbnB1dENvbG9yfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHttaXhpbi5kYXJrZW4oY29sb3Iuc2Vjb25kYXJ5LCAwLjEpfTtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICR7Y29sb3IucHJpbWFyeX07XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7Y29sb3IuZ3JheTEwMH07XG4gICAgfVxuICB9XG5gO1xuIl19