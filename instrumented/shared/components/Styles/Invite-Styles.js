function cov_r8lamaboy() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/Invite-Styles.js";
  var hash = "4c6c1cfac8321226b3a6efe9394eb69cf6e7ffa0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/Invite-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 31
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 26
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "2": {
        start: {
          line: 47,
          column: 28
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "3": {
        start: {
          line: 66,
          column: 27
        },
        end: {
          line: 72,
          column: 1
        }
      },
      "4": {
        start: {
          line: 74,
          column: 31
        },
        end: {
          line: 74,
          column: 43
        }
      },
      "5": {
        start: {
          line: 76,
          column: 27
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "6": {
        start: {
          line: 81,
          column: 26
        },
        end: {
          line: 83,
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
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c6c1cfac8321226b3a6efe9394eb69cf6e7ffa0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_r8lamaboy = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_r8lamaboy();
import styled from "styled-components";
import { color, mixin } from "../../styles";
export const InviteContainer = (cov_r8lamaboy().s[0]++, styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`);
export const InviteForm = (cov_r8lamaboy().s[1]++, styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 4rem;
  width: 440px;
  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  a {
    color: ${color.primary};
  }
  @media (min-width: 1200px) {
    right: 100px;
  }
  @media (max-width: 500px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
    border: none;
    h1 {
      margin-top: 3rem;
    }
  }
`);
export const StyledSelect = (cov_r8lamaboy().s[2]++, styled.select`
  background: ${color.inputBackground};
  cursor: pointer;
  margin: 1rem;
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 66%;
  padding: 9.7px 11.7px;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
  }
`);
export const InviteGroup = (cov_r8lamaboy().s[3]++, styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const InviteGroupBack = (cov_r8lamaboy().s[4]++, styled.div``);
export const InviteTitle = (cov_r8lamaboy().s[5]++, styled.h1`
  text-align: center;
  color: black;
`);
export const AccessText = (cov_r8lamaboy().s[6]++, styled.h4`
  color: black;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkludml0ZS1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiY29sb3IiLCJtaXhpbiIsIkludml0ZUNvbnRhaW5lciIsImRpdiIsIkludml0ZUZvcm0iLCJiYWNrZ3JvdW5kTGlnaHQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJTdHlsZWRTZWxlY3QiLCJzZWxlY3QiLCJpbnB1dEJhY2tncm91bmQiLCJncmF5MTAwIiwiaW5wdXRDb2xvciIsImRhcmtlbiIsInNlY29uZGFyeSIsIkludml0ZUdyb3VwIiwiSW52aXRlR3JvdXBCYWNrIiwiSW52aXRlVGl0bGUiLCJoMSIsIkFjY2Vzc1RleHQiLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxLQUFoQixRQUE2QixjQUE3QjtBQUVBLE9BQU8sTUFBTUMsZUFBZSw0QkFBR0gsTUFBTSxDQUFDSSxHQUFJOzs7Ozs7Q0FBZCxDQUFyQjtBQVFQLE9BQU8sTUFBTUMsVUFBVSw0QkFBR0wsTUFBTSxDQUFDSSxHQUFJO2dCQUNyQkgsS0FBSyxDQUFDSyxlQUFnQjtzQkFDaEJMLEtBQUssQ0FBQ00sV0FBWTs7Ozs7Ozs7Ozs7Ozs7YUFjM0JOLEtBQUssQ0FBQ08sT0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FoQkosQ0FBaEI7QUFtQ1AsT0FBTyxNQUFNQyxZQUFZLDRCQUFHVCxNQUFNLENBQUNVLE1BQU87Z0JBQzFCVCxLQUFLLENBQUNVLGVBQWdCOzs7c0JBR2hCVixLQUFLLENBQUNXLE9BQVE7OztXQUd6QlgsS0FBSyxDQUFDWSxVQUFXOzs7OztvQkFLUlgsS0FBSyxDQUFDWSxNQUFOLENBQWFiLEtBQUssQ0FBQ2MsU0FBbkIsRUFBOEIsR0FBOUIsQ0FBbUM7OztvQkFHbkNkLEtBQUssQ0FBQ08sT0FBUTs7Q0FmVCxDQUFsQjtBQW1CUCxPQUFPLE1BQU1RLFdBQVcsNEJBQUdoQixNQUFNLENBQUNJLEdBQUk7Ozs7OztDQUFkLENBQWpCO0FBUVAsT0FBTyxNQUFNYSxlQUFlLDRCQUFHakIsTUFBTSxDQUFDSSxHQUFJLEVBQWQsQ0FBckI7QUFFUCxPQUFPLE1BQU1jLFdBQVcsNEJBQUdsQixNQUFNLENBQUNtQixFQUFHOzs7Q0FBYixDQUFqQjtBQUtQLE9BQU8sTUFBTUMsVUFBVSw0QkFBR3BCLE1BQU0sQ0FBQ3FCLEVBQUc7O0NBQWIsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIG1peGluIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgSW52aXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnZpdGVGb3JtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtjb2xvci5iYWNrZ3JvdW5kTGlnaHR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA4cHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiA1cHggOHB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogNHJlbTtcbiAgd2lkdGg6IDQ0MHB4O1xuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICR7Y29sb3IucHJpbWFyeX07XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaDEge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmlucHV0QmFja2dyb3VuZH07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmdyYXkxMDB9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGNvbG9yOiAke2NvbG9yLmlucHV0Q29sb3J9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDY2JTtcbiAgcGFkZGluZzogOS43cHggMTEuN3B4O1xuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICR7bWl4aW4uZGFya2VuKGNvbG9yLnNlY29uZGFyeSwgMC4xKX07XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yLnByaW1hcnl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW52aXRlR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnZpdGVHcm91cEJhY2sgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBJbnZpdGVUaXRsZSA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgQWNjZXNzVGV4dCA9IHN0eWxlZC5oNGBcbiAgY29sb3I6IGJsYWNrO1xuYDtcbiJdfQ==