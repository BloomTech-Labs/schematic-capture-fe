function cov_sflbd7hou() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectStyles.js";
  var hash = "76119aabb0ebadef29b7020a19cbdab807c8a892";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "3": {
        start: {
          line: 26,
          column: 27
        },
        end: {
          line: 26,
          column: 42
        }
      },
      "4": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "5": {
        start: {
          line: 37,
          column: 25
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "6": {
        start: {
          line: 70,
          column: 20
        },
        end: {
          line: 73,
          column: 1
        }
      },
      "7": {
        start: {
          line: 75,
          column: 20
        },
        end: {
          line: 75,
          column: 33
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
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "76119aabb0ebadef29b7020a19cbdab807c8a892"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_sflbd7hou = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_sflbd7hou();
// @TODO: form styling in this file AND FormStyles.js. Need to DRY.
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
export const Header = (cov_sflbd7hou().s[0]++, styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_sflbd7hou().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_sflbd7hou().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_sflbd7hou().s[3]++, styled(Input)``);
export const Area = (cov_sflbd7hou().s[4]++, styled.div`
  height: 100vh;
  width: 95vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const Container = (cov_sflbd7hou().s[5]++, styled.div`
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
export const Text = (cov_sflbd7hou().s[6]++, styled.p`
  color: black;
  font-weight: bold;
`);
export const Form = (cov_sflbd7hou().s[7]++, styled.form``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RTdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImZvbnQiLCJjb2xvciIsImJ1dHRvblN0eWxlIiwiSW5wdXQiLCJIZWFkZXIiLCJkaXYiLCJQYWdlTmFtZSIsImgxIiwic2l6ZSIsImJvbGQiLCJTdHlsZWRMaW5rIiwiU3R5bGVkSW5wdXQiLCJBcmVhIiwiQ29udGFpbmVyIiwiYmFja2dyb3VuZExpZ2h0IiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5IiwiVGV4dCIsInAiLCJGb3JtIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaO0FBRUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLElBQVQsRUFBZUMsS0FBZixRQUE0Qix3QkFBNUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlEQUE1QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsNkNBQWxCO0FBRUEsT0FBTyxNQUFNQyxNQUFNLDRCQUFHTixNQUFNLENBQUNPLEdBQUk7Ozs7Q0FBZCxDQUFaO0FBTVAsT0FBTyxNQUFNQyxRQUFRLDRCQUFHUixNQUFNLENBQUNTLEVBQUc7SUFDOUJQLElBQUksQ0FBQ1EsSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiUixJQUFJLENBQUNTLElBQUs7O0NBRk8sQ0FBZDtBQU1QLE9BQU8sTUFBTUMsVUFBVSw0QkFBR1osTUFBTSxDQUFDQyxJQUFELENBQU87SUFDbkNHLFdBQVk7Q0FETyxDQUFoQjtBQUlQLE9BQU8sTUFBTVMsV0FBVyw0QkFBR2IsTUFBTSxDQUFDSyxLQUFELENBQVEsRUFBakIsQ0FBakI7QUFFUCxPQUFPLE1BQU1TLElBQUksNEJBQUdkLE1BQU0sQ0FBQ08sR0FBSTs7Ozs7Ozs7Q0FBZCxDQUFWO0FBU1AsT0FBTyxNQUFNUSxTQUFTLDRCQUFHZixNQUFNLENBQUNPLEdBQUk7Z0JBQ3BCSixLQUFLLENBQUNhLGVBQWdCO3NCQUNoQmIsS0FBSyxDQUFDYyxXQUFZOzs7Ozs7Ozs7Ozs7YUFZM0JkLEtBQUssQ0FBQ2UsT0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FkTCxDQUFmO0FBaUNQLE9BQU8sTUFBTUMsSUFBSSw0QkFBR25CLE1BQU0sQ0FBQ29CLENBQUU7OztDQUFaLENBQVY7QUFLUCxPQUFPLE1BQU1DLElBQUksNEJBQUdyQixNQUFNLENBQUNzQixJQUFLLEVBQWYsQ0FBViIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBUT0RPOiBmb3JtIHN0eWxpbmcgaW4gdGhpcyBmaWxlIEFORCBGb3JtU3R5bGVzLmpzLiBOZWVkIHRvIERSWS5cclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgZm9udCwgY29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBidXR0b25TdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9TdHlsZXMvQnV0dG9uLVN0eWxlc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0NvbXBvbmVudHMvSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VOYW1lID0gc3R5bGVkLmgxYFxyXG4gICR7Zm9udC5zaXplKDMpfVxyXG4gICR7Zm9udC5ib2xkfVxyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gICR7YnV0dG9uU3R5bGV9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpYGA7XHJcblxyXG5leHBvcnQgY29uc3QgQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogOTV2dztcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDRyZW07XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7Y29sb3IucHJpbWFyeX07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHJpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYGA7XHJcbiJdfQ==