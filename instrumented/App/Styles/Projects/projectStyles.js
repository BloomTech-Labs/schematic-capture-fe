function cov_1gxn7qfwxs() {
  var path = "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectStyles.js";
  var hash = "7c67985761c99f7c83944bdb174c769b7091cc9d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectStyles.js",
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
    hash: "7c67985761c99f7c83944bdb174c769b7091cc9d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gxn7qfwxs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1gxn7qfwxs();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
import Fields from "../../../shared/components/Components/Fields";
export const Header = (cov_1gxn7qfwxs().s[0]++, styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_1gxn7qfwxs().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_1gxn7qfwxs().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_1gxn7qfwxs().s[3]++, styled(Input)``);
export const Area = (cov_1gxn7qfwxs().s[4]++, styled.div`
  height: 100vh;
  width: 95vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const Container = (cov_1gxn7qfwxs().s[5]++, styled.div`
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
export const Text = (cov_1gxn7qfwxs().s[6]++, styled.p`
  color: black;
  font-weight: bold;
`);
export const Form = (cov_1gxn7qfwxs().s[7]++, styled.form``);
export const StyledFields = (cov_1gxn7qfwxs().s[8]++, styled(Fields)``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RTdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImZvbnQiLCJjb2xvciIsImJ1dHRvblN0eWxlIiwiSW5wdXQiLCJGaWVsZHMiLCJIZWFkZXIiLCJkaXYiLCJQYWdlTmFtZSIsImgxIiwic2l6ZSIsImJvbGQiLCJTdHlsZWRMaW5rIiwiU3R5bGVkSW5wdXQiLCJBcmVhIiwiQ29udGFpbmVyIiwiYmFja2dyb3VuZExpZ2h0IiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5IiwiVGV4dCIsInAiLCJGb3JtIiwiZm9ybSIsIlN0eWxlZEZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLElBQVQsRUFBZUMsS0FBZixRQUE0Qix3QkFBNUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlEQUE1QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsNkNBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiw4Q0FBbkI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdQLE1BQU0sQ0FBQ1EsR0FBSTs7OztDQUFkLENBQVo7QUFNUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdULE1BQU0sQ0FBQ1UsRUFBRztJQUM5QlIsSUFBSSxDQUFDUyxJQUFMLENBQVUsQ0FBVixDQUFhO0lBQ2JULElBQUksQ0FBQ1UsSUFBSzs7Q0FGTyxDQUFkO0FBTVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHYixNQUFNLENBQUNDLElBQUQsQ0FBTztJQUNuQ0csV0FBWTtDQURPLENBQWhCO0FBSVAsT0FBTyxNQUFNVSxXQUFXLDZCQUFHZCxNQUFNLENBQUNLLEtBQUQsQ0FBUSxFQUFqQixDQUFqQjtBQUVQLE9BQU8sTUFBTVUsSUFBSSw2QkFBR2YsTUFBTSxDQUFDUSxHQUFJOzs7Ozs7OztDQUFkLENBQVY7QUFTUCxPQUFPLE1BQU1RLFNBQVMsNkJBQUdoQixNQUFNLENBQUNRLEdBQUk7Z0JBQ3BCTCxLQUFLLENBQUNjLGVBQWdCO3NCQUNoQmQsS0FBSyxDQUFDZSxXQUFZOzs7Ozs7Ozs7Ozs7YUFZM0JmLEtBQUssQ0FBQ2dCLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZEwsQ0FBZjtBQWlDUCxPQUFPLE1BQU1DLElBQUksNkJBQUdwQixNQUFNLENBQUNxQixDQUFFOzs7Q0FBWixDQUFWO0FBS1AsT0FBTyxNQUFNQyxJQUFJLDZCQUFHdEIsTUFBTSxDQUFDdUIsSUFBSyxFQUFmLENBQVY7QUFFUCxPQUFPLE1BQU1DLFlBQVksNkJBQUd4QixNQUFNLENBQUNNLE1BQUQsQ0FBUyxFQUFsQixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgZm9udCwgY29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBidXR0b25TdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9TdHlsZXMvQnV0dG9uLVN0eWxlc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IEZpZWxkcyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvQ29tcG9uZW50cy9GaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VOYW1lID0gc3R5bGVkLmgxYFxyXG4gICR7Zm9udC5zaXplKDMpfVxyXG4gICR7Zm9udC5ib2xkfVxyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gICR7YnV0dG9uU3R5bGV9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpYGA7XHJcblxyXG5leHBvcnQgY29uc3QgQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogOTV2dztcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDRyZW07XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7Y29sb3IucHJpbWFyeX07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHJpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYGA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRmllbGRzID0gc3R5bGVkKEZpZWxkcylgYDtcclxuIl19