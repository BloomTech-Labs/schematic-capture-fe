function cov_1hkv0zmz0i() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Jobsheet/JobsheetBoard/Styles.js";
  var hash = "49f375750b73c2d4dd040a19bec88ffe2c8ba19e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Jobsheet/JobsheetBoard/Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 27
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "3": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "4": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "5": {
        start: {
          line: 36,
          column: 24
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "6": {
        start: {
          line: 42,
          column: 26
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "7": {
        start: {
          line: 46,
          column: 27
        },
        end: {
          line: 52,
          column: 1
        }
      },
      "8": {
        start: {
          line: 54,
          column: 27
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "9": {
        start: {
          line: 58,
          column: 28
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "10": {
        start: {
          line: 64,
          column: 20
        },
        end: {
          line: 66,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "49f375750b73c2d4dd040a19bec88ffe2c8ba19e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1hkv0zmz0i = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1hkv0zmz0i();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
export const Header = (cov_1hkv0zmz0i().s[0]++, styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const Section = (cov_1hkv0zmz0i().s[1]++, styled.section`
  margin-top: 3rem;
`);
export const SectionName = (cov_1hkv0zmz0i().s[2]++, styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`);
export const ImgSel = (cov_1hkv0zmz0i().s[3]++, styled.p`
  padding: .5rem;
  border: 2px lightgrey solid;
  border-radius: 15px;
  color: grey;
`);
export const PTag = (cov_1hkv0zmz0i().s[4]++, styled.h3`
  color: black;
`);
export const PageName = (cov_1hkv0zmz0i().s[5]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_1hkv0zmz0i().s[6]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_1hkv0zmz0i().s[7]++, styled.input`
  text-content: center;
  padding: 1%;
  border-radius: 15px;
  color: grey;
  
`);
export const StyledImage = (cov_1hkv0zmz0i().s[8]++, styled.img`
  width: 30%;
`);
export const StyledSubmit = (cov_1hkv0zmz0i().s[9]++, styled.button`
  background-color: green;
  padding: 1.5%;
  border-radius: 15px;
`);
export const Main = (cov_1hkv0zmz0i().s[10]++, styled.main`
  padding: 20px 0 0 80px;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiY29sb3IiLCJmb250IiwiYnV0dG9uU3R5bGUiLCJIZWFkZXIiLCJkaXYiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb25OYW1lIiwiaDIiLCJzaXplIiwiYm9sZCIsImdyYXkyMDAiLCJJbWdTZWwiLCJwIiwiUFRhZyIsImgzIiwiUGFnZU5hbWUiLCJoMSIsIlN0eWxlZExpbmsiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiU3R5bGVkSW1hZ2UiLCJpbWciLCJTdHlsZWRTdWJtaXQiLCJidXR0b24iLCJNYWluIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsUUFBNEIsd0JBQTVCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpREFBNUI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdMLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFaO0FBT1AsT0FBTyxNQUFNQyxPQUFPLDZCQUFHUCxNQUFNLENBQUNRLE9BQVE7O0NBQWxCLENBQWI7QUFJUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUdULE1BQU0sQ0FBQ1UsRUFBRztJQUNqQ1AsSUFBSSxDQUFDUSxJQUFMLENBQVUsR0FBVixDQUFlO0lBQ2ZSLElBQUksQ0FBQ1MsSUFBSztXQUNIVixLQUFLLENBQUNXLE9BQVE7O0NBSEQsQ0FBakI7QUFPUCxPQUFPLE1BQU1DLE1BQU0sNkJBQUdkLE1BQU0sQ0FBQ2UsQ0FBRTs7Ozs7Q0FBWixDQUFaO0FBT1AsT0FBTyxNQUFNQyxJQUFJLDZCQUFHaEIsTUFBTSxDQUFDaUIsRUFBRzs7Q0FBYixDQUFWO0FBSVAsT0FBTyxNQUFNQyxRQUFRLDZCQUFHbEIsTUFBTSxDQUFDbUIsRUFBRztJQUM5QmhCLElBQUksQ0FBQ1EsSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiUixJQUFJLENBQUNTLElBQUs7O0NBRk8sQ0FBZDtBQU1QLE9BQU8sTUFBTVEsVUFBVSw2QkFBR3BCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0lBQ25DRyxXQUFZO0NBRE8sQ0FBaEI7QUFJUCxPQUFPLE1BQU1pQixXQUFXLDZCQUFHckIsTUFBTSxDQUFDc0IsS0FBTTs7Ozs7O0NBQWhCLENBQWpCO0FBUVAsT0FBTyxNQUFNQyxXQUFXLDZCQUFHdkIsTUFBTSxDQUFDd0IsR0FBSTs7Q0FBZCxDQUFqQjtBQUlQLE9BQU8sTUFBTUMsWUFBWSw2QkFBR3pCLE1BQU0sQ0FBQzBCLE1BQU87Ozs7Q0FBakIsQ0FBbEI7QUFNUCxPQUFPLE1BQU1DLElBQUksOEJBQUczQixNQUFNLENBQUM0QixJQUFLOztDQUFmLENBQVYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXNcIjtcbmltcG9ydCB7IGJ1dHRvblN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1N0eWxlcy9CdXR0b24tU3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiAzcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25OYW1lID0gc3R5bGVkLmgyYFxuICAke2ZvbnQuc2l6ZSgxLjUpfVxuICAke2ZvbnQuYm9sZH1cbiAgY29sb3I6ICR7Y29sb3IuZ3JheTIwMH07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSW1nU2VsID0gc3R5bGVkLnBgXG4gIHBhZGRpbmc6IC41cmVtO1xuICBib3JkZXI6IDJweCBsaWdodGdyZXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiBncmV5O1xuYFxuXG5leHBvcnQgY29uc3QgUFRhZyA9IHN0eWxlZC5oM2BcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgY29uc3QgUGFnZU5hbWUgPSBzdHlsZWQuaDFgXG4gICR7Zm9udC5zaXplKDMpfVxuICAke2ZvbnQuYm9sZH1cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHRleHQtY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IGdyZXk7XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzAlO1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkU3VibWl0ID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDEuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIHBhZGRpbmc6IDIwcHggMCAwIDgwcHg7XG5gO1xuIl19