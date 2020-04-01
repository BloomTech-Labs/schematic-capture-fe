function cov_1hrewgel2d() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/NewClientForm/Styles.js";
  var hash = "2a45e82d2e319d4486f536cb6d19c85d63ee44ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/NewClientForm/Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 27
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "2": {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 16,
          column: 44
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
    hash: "2a45e82d2e319d4486f536cb6d19c85d63ee44ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1hrewgel2d = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1hrewgel2d();
import styled from "styled-components";
import { Fields } from "../../../../shared/components";
import { font } from "../../../../shared/styles";
export const Form = (cov_1hrewgel2d().s[0]++, styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`);
export const FormHeading = (cov_1hrewgel2d().s[1]++, styled.div`
  ${font.size(2.25)}
`);
export const StyledFields = (cov_1hrewgel2d().s[2]++, styled(Fields)``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGaWVsZHMiLCJmb250IiwiRm9ybSIsImZvcm0iLCJGb3JtSGVhZGluZyIsImRpdiIsInNpemUiLCJTdHlsZWRGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLE1BQVQsUUFBdUIsK0JBQXZCO0FBRUEsU0FBU0MsSUFBVCxRQUFxQiwyQkFBckI7QUFFQSxPQUFPLE1BQU1DLElBQUksNkJBQUdILE1BQU0sQ0FBQ0ksSUFBSzs7O0NBQWYsQ0FBVjtBQUtQLE9BQU8sTUFBTUMsV0FBVyw2QkFBR0wsTUFBTSxDQUFDTSxHQUFJO0lBQ2xDSixJQUFJLENBQUNLLElBQUwsQ0FBVSxJQUFWLENBQWdCO0NBREksQ0FBakI7QUFJUCxPQUFPLE1BQU1DLFlBQVksNkJBQUdSLE1BQU0sQ0FBQ0MsTUFBRCxDQUFTLEVBQWxCLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgRmllbGRzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IGZvbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybUhlYWRpbmcgPSBzdHlsZWQuZGl2YFxuICAke2ZvbnQuc2l6ZSgyLjI1KX1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWVsZHMgPSBzdHlsZWQoRmllbGRzKWBgO1xuIl19