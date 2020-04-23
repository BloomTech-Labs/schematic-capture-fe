function cov_2fn2xxt5ga() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Project/CreateNewProject/Styles.js";
  var hash = "b0211d0f5869d973a03e03055b2df300c145b99e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Project/CreateNewProject/Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 26
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "3": {
        start: {
          line: 25,
          column: 27
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "4": {
        start: {
          line: 27,
          column: 20
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "5": {
        start: {
          line: 36,
          column: 25
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "6": {
        start: {
          line: 69,
          column: 20
        },
        end: {
          line: 72,
          column: 1
        }
      },
      "7": {
        start: {
          line: 74,
          column: 20
        },
        end: {
          line: 74,
          column: 33
        }
      },
      "8": {
        start: {
          line: 76,
          column: 28
        },
        end: {
          line: 76,
          column: 44
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
      "8": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b0211d0f5869d973a03e03055b2df300c145b99e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2fn2xxt5ga = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2fn2xxt5ga();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
import Fields from "../../../shared/components/Components/Fields";
export const Header = (cov_2fn2xxt5ga().s[0]++, styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_2fn2xxt5ga().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_2fn2xxt5ga().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_2fn2xxt5ga().s[3]++, styled(Input)``);
export const Area = (cov_2fn2xxt5ga().s[4]++, styled.div`
height: 100vh;
width: 95vw;
margin-left: 5vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`);
export const Container = (cov_2fn2xxt5ga().s[5]++, styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
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
export const Text = (cov_2fn2xxt5ga().s[6]++, styled.p`
  color: black;
  font-weight: bold;
`);
export const Form = (cov_2fn2xxt5ga().s[7]++, styled.form``);
export const StyledFields = (cov_2fn2xxt5ga().s[8]++, styled(Fields)``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiZm9udCIsImNvbG9yIiwiYnV0dG9uU3R5bGUiLCJJbnB1dCIsIkZpZWxkcyIsIkhlYWRlciIsImRpdiIsIlBhZ2VOYW1lIiwiaDEiLCJzaXplIiwiYm9sZCIsIlN0eWxlZExpbmsiLCJTdHlsZWRJbnB1dCIsIkFyZWEiLCJDb250YWluZXIiLCJiYWNrZ3JvdW5kTGlnaHQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJUZXh0IiwicCIsIkZvcm0iLCJmb3JtIiwiU3R5bGVkRmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLElBQVQsRUFBZUMsS0FBZixRQUE0Qix3QkFBNUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlEQUE1QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsNkNBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiw4Q0FBbkI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdQLE1BQU0sQ0FBQ1EsR0FBSTs7OztDQUFkLENBQVo7QUFNUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdULE1BQU0sQ0FBQ1UsRUFBRztJQUM5QlIsSUFBSSxDQUFDUyxJQUFMLENBQVUsQ0FBVixDQUFhO0lBQ2JULElBQUksQ0FBQ1UsSUFBSzs7Q0FGTyxDQUFkO0FBTVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHYixNQUFNLENBQUNDLElBQUQsQ0FBTztJQUNuQ0csV0FBWTtDQURPLENBQWhCO0FBSVAsT0FBTyxNQUFNVSxXQUFXLDZCQUFHZCxNQUFNLENBQUNLLEtBQUQsQ0FBUSxFQUFqQixDQUFqQjtBQUVQLE9BQU8sTUFBTVUsSUFBSSw2QkFBR2YsTUFBTSxDQUFDUSxHQUFJOzs7Ozs7OztDQUFkLENBQVY7QUFTUCxPQUFPLE1BQU1RLFNBQVMsNkJBQUdoQixNQUFNLENBQUNRLEdBQUk7Z0JBQ3BCTCxLQUFLLENBQUNjLGVBQWdCO3NCQUNoQmQsS0FBSyxDQUFDZSxXQUFZOzs7Ozs7Ozs7Ozs7YUFZM0JmLEtBQUssQ0FBQ2dCLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZEwsQ0FBZjtBQWlDUCxPQUFPLE1BQU1DLElBQUksNkJBQUdwQixNQUFNLENBQUNxQixDQUFFOzs7Q0FBWixDQUFWO0FBS1AsT0FBTyxNQUFNQyxJQUFJLDZCQUFHdEIsTUFBTSxDQUFDdUIsSUFBSyxFQUFmLENBQVY7QUFFUCxPQUFPLE1BQU1DLFlBQVksNkJBQUd4QixNQUFNLENBQUNNLE1BQUQsQ0FBUyxFQUFsQixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgZm9udCwgY29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlc1wiO1xuaW1wb3J0IHsgYnV0dG9uU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvU3R5bGVzL0J1dHRvbi1TdHlsZXNcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQ29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IEZpZWxkcyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQ29tcG9uZW50cy9GaWVsZHNcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUGFnZU5hbWUgPSBzdHlsZWQuaDFgXG4gICR7Zm9udC5zaXplKDMpfVxuICAke2ZvbnQuYm9sZH1cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpYGA7XG5cbmV4cG9ydCBjb25zdCBBcmVhID0gc3R5bGVkLmRpdmBcbmhlaWdodDogMTAwdmg7XG53aWR0aDogOTV2dztcbm1hcmdpbi1sZWZ0OiA1dnc7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtjb2xvci5iYWNrZ3JvdW5kTGlnaHR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiA0cmVtO1xuICB3aWR0aDogNDQwcHg7XG4gIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoMSB7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpZWxkcyA9IHN0eWxlZChGaWVsZHMpYGA7XG4iXX0=