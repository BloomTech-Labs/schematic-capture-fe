function cov_16k60wxfrx() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Projects/projectStyles.js";
  var hash = "ec361f217eef23d9a8380fec0fe524a5048758a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Projects/projectStyles.js",
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
    hash: "ec361f217eef23d9a8380fec0fe524a5048758a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_16k60wxfrx = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_16k60wxfrx();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
// import Fields from "../../../shared/components/Components/Fields";
export const Header = (cov_16k60wxfrx().s[0]++, styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_16k60wxfrx().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_16k60wxfrx().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_16k60wxfrx().s[3]++, styled(Input)``);
export const Area = (cov_16k60wxfrx().s[4]++, styled.div`
  height: 100vh;
  width: 95vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const Container = (cov_16k60wxfrx().s[5]++, styled.div`
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
export const Text = (cov_16k60wxfrx().s[6]++, styled.p`
  color: black;
  font-weight: bold;
`);
export const Form = (cov_16k60wxfrx().s[7]++, styled.form``);
// export const StyledFields = (cov_16k60wxfrx().s[8]++, styled(Fields)``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RTdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImZvbnQiLCJjb2xvciIsImJ1dHRvblN0eWxlIiwiSW5wdXQiLCJGaWVsZHMiLCJIZWFkZXIiLCJkaXYiLCJQYWdlTmFtZSIsImgxIiwic2l6ZSIsImJvbGQiLCJTdHlsZWRMaW5rIiwiU3R5bGVkSW5wdXQiLCJBcmVhIiwiQ29udGFpbmVyIiwiYmFja2dyb3VuZExpZ2h0IiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5IiwiVGV4dCIsInAiLCJGb3JtIiwiZm9ybSIsIlN0eWxlZEZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFFQSxTQUFTQyxJQUFULEVBQWVDLEtBQWYsUUFBNEIsd0JBQTVCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpREFBNUI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLDZDQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsOENBQW5CO0FBRUEsT0FBTyxNQUFNQyxNQUFNLDZCQUFHUCxNQUFNLENBQUNRLEdBQUk7Ozs7Q0FBZCxDQUFaO0FBTVAsT0FBTyxNQUFNQyxRQUFRLDZCQUFHVCxNQUFNLENBQUNVLEVBQUc7SUFDOUJSLElBQUksQ0FBQ1MsSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiVCxJQUFJLENBQUNVLElBQUs7O0NBRk8sQ0FBZDtBQU1QLE9BQU8sTUFBTUMsVUFBVSw2QkFBR2IsTUFBTSxDQUFDQyxJQUFELENBQU87SUFDbkNHLFdBQVk7Q0FETyxDQUFoQjtBQUlQLE9BQU8sTUFBTVUsV0FBVyw2QkFBR2QsTUFBTSxDQUFDSyxLQUFELENBQVEsRUFBakIsQ0FBakI7QUFFUCxPQUFPLE1BQU1VLElBQUksNkJBQUdmLE1BQU0sQ0FBQ1EsR0FBSTs7Ozs7Ozs7Q0FBZCxDQUFWO0FBU1AsT0FBTyxNQUFNUSxTQUFTLDZCQUFHaEIsTUFBTSxDQUFDUSxHQUFJO2dCQUNwQkwsS0FBSyxDQUFDYyxlQUFnQjtzQkFDaEJkLEtBQUssQ0FBQ2UsV0FBWTs7Ozs7Ozs7Ozs7O2FBWTNCZixLQUFLLENBQUNnQixPQUFROzs7Ozs7Ozs7Ozs7Ozs7OztDQWRMLENBQWY7QUFpQ1AsT0FBTyxNQUFNQyxJQUFJLDZCQUFHcEIsTUFBTSxDQUFDcUIsQ0FBRTs7O0NBQVosQ0FBVjtBQUtQLE9BQU8sTUFBTUMsSUFBSSw2QkFBR3RCLE1BQU0sQ0FBQ3VCLElBQUssRUFBZixDQUFWO0FBRVAsT0FBTyxNQUFNQyxZQUFZLDZCQUFHeEIsTUFBTSxDQUFDTSxNQUFELENBQVMsRUFBbEIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7IGZvbnQsIGNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXNcIjtcbmltcG9ydCB7IGJ1dHRvblN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1N0eWxlcy9CdXR0b24tU3R5bGVzXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0NvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCBGaWVsZHMgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0NvbXBvbmVudHMvRmllbGRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhZ2VOYW1lID0gc3R5bGVkLmgxYFxuICAke2ZvbnQuc2l6ZSgzKX1cbiAgJHtmb250LmJvbGR9XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICAke2J1dHRvblN0eWxlfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KWBgO1xuXG5leHBvcnQgY29uc3QgQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA5NXZ3O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtjb2xvci5iYWNrZ3JvdW5kTGlnaHR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiA0cmVtO1xuICB3aWR0aDogNDQwcHg7XG4gIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoMSB7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpZWxkcyA9IHN0eWxlZChGaWVsZHMpYGA7XG4iXX0=