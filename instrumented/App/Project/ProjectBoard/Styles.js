function cov_1s5n54tqvu() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Project/ProjectBoard/Styles.js";
  var hash = "ebe4b62b8c67ca63426e6799218b412927336861";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Project/ProjectBoard/Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
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
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 26
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "3": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 31,
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
          column: 23
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "6": {
        start: {
          line: 40,
          column: 27
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "7": {
        start: {
          line: 47,
          column: 27
        },
        end: {
          line: 54,
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
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ebe4b62b8c67ca63426e6799218b412927336861"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1s5n54tqvu = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1s5n54tqvu();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
export const Header = (cov_1s5n54tqvu().s[0]++, styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_1s5n54tqvu().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`);
export const StyledLink = (cov_1s5n54tqvu().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_1s5n54tqvu().s[3]++, styled(Input)`
  margin-right: 1rem;
`);
export const Main = (cov_1s5n54tqvu().s[4]++, styled.main`
  padding: 20px 0 0 80px;
`);
export const Section = (cov_1s5n54tqvu().s[5]++, styled.section`
  margin-top: 3rem;
`);
export const SectionName = (cov_1s5n54tqvu().s[6]++, styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`);
export const StyledLink2 = (cov_1s5n54tqvu().s[7]++, styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiZm9udCIsImNvbG9yIiwiYnV0dG9uU3R5bGUiLCJJbnB1dCIsIkhlYWRlciIsImRpdiIsIlBhZ2VOYW1lIiwiaDEiLCJzaXplIiwiYm9sZCIsIlN0eWxlZExpbmsiLCJTdHlsZWRJbnB1dCIsIk1haW4iLCJtYWluIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uTmFtZSIsImgyIiwiZ3JheTIwMCIsIlN0eWxlZExpbmsyIiwiYm9yZGVyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLElBQVQsRUFBZUMsS0FBZixRQUE0Qix3QkFBNUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlEQUE1QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsNkNBQWxCO0FBRUEsT0FBTyxNQUFNQyxNQUFNLDZCQUFHTixNQUFNLENBQUNPLEdBQUk7Ozs7O0NBQWQsQ0FBWjtBQU9QLE9BQU8sTUFBTUMsUUFBUSw2QkFBR1IsTUFBTSxDQUFDUyxFQUFHO0lBQzlCUCxJQUFJLENBQUNRLElBQUwsQ0FBVSxDQUFWLENBQWE7SUFDYlIsSUFBSSxDQUFDUyxJQUFLOzs7Ozs7Q0FGTyxDQUFkO0FBVVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHWixNQUFNLENBQUNDLElBQUQsQ0FBTztJQUNuQ0csV0FBWTtDQURPLENBQWhCO0FBSVAsT0FBTyxNQUFNUyxXQUFXLDZCQUFHYixNQUFNLENBQUNLLEtBQUQsQ0FBUTs7Q0FBakIsQ0FBakI7QUFHUCxPQUFPLE1BQU1TLElBQUksNkJBQUdkLE1BQU0sQ0FBQ2UsSUFBSzs7Q0FBZixDQUFWO0FBSVAsT0FBTyxNQUFNQyxPQUFPLDZCQUFHaEIsTUFBTSxDQUFDaUIsT0FBUTs7Q0FBbEIsQ0FBYjtBQUlQLE9BQU8sTUFBTUMsV0FBVyw2QkFBR2xCLE1BQU0sQ0FBQ21CLEVBQUc7SUFDakNqQixJQUFJLENBQUNRLElBQUwsQ0FBVSxHQUFWLENBQWU7SUFDZlIsSUFBSSxDQUFDUyxJQUFLO1dBQ0hSLEtBQUssQ0FBQ2lCLE9BQVE7O0NBSEQsQ0FBakI7QUFPUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUdyQixNQUFNLENBQUNDLElBQUQsQ0FBTzs7OzZCQUdYRSxLQUFLLENBQUNtQixXQUFZOzs7O0NBSHZCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBmb250LCBjb2xvciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzXCI7XG5pbXBvcnQgeyBidXR0b25TdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9TdHlsZXMvQnV0dG9uLVN0eWxlc1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9Db21wb25lbnRzL0lucHV0XCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUGFnZU5hbWUgPSBzdHlsZWQuaDFgXG4gICR7Zm9udC5zaXplKDMpfVxuICAke2ZvbnQuYm9sZH1cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbiAgJHtidXR0b25TdHlsZX1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZChJbnB1dClgXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbmA7XG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBwYWRkaW5nOiAyMHB4IDAgMCA4MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogM3JlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uTmFtZSA9IHN0eWxlZC5oMmBcbiAgJHtmb250LnNpemUoMS41KX1cbiAgJHtmb250LmJvbGR9XG4gIGNvbG9yOiAke2NvbG9yLmdyYXkyMDB9O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsyID0gc3R5bGVkKExpbmspYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTZweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuYDtcbiJdfQ==