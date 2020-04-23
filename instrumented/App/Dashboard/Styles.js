function cov_2bsmmry403() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Dashboard/Styles.js";
  var hash = "ad935d536c7b5c857fce3b5ef4b0984879718c75";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Dashboard/Styles.js",
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
          column: 29
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 20,
          column: 26
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 24,
          column: 20
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "4": {
        start: {
          line: 28,
          column: 23
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "5": {
        start: {
          line: 32,
          column: 27
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "6": {
        start: {
          line: 39,
          column: 27
        },
        end: {
          line: 46,
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
    hash: "ad935d536c7b5c857fce3b5ef4b0984879718c75"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2bsmmry403 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2bsmmry403();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../shared/styles";
import { buttonStyle } from "../../shared/components/Styles/Button-Styles";
export const Header = (cov_2bsmmry403().s[0]++, styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const DashboardName = (cov_2bsmmry403().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_2bsmmry403().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const Main = (cov_2bsmmry403().s[3]++, styled.main`
  padding: 20px 0 0 80px;
`);
export const Section = (cov_2bsmmry403().s[4]++, styled.section`
  margin-top: 3rem;
`);
export const SectionName = (cov_2bsmmry403().s[5]++, styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`);
export const StyledLink2 = (cov_2bsmmry403().s[6]++, styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiY29sb3IiLCJmb250IiwiYnV0dG9uU3R5bGUiLCJIZWFkZXIiLCJkaXYiLCJEYXNoYm9hcmROYW1lIiwiaDEiLCJzaXplIiwiYm9sZCIsIlN0eWxlZExpbmsiLCJNYWluIiwibWFpbiIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiU2VjdGlvbk5hbWUiLCJoMiIsImdyYXkyMDAiLCJTdHlsZWRMaW5rMiIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsUUFBNEIscUJBQTVCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw4Q0FBNUI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdMLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFaO0FBT1AsT0FBTyxNQUFNQyxhQUFhLDZCQUFHUCxNQUFNLENBQUNRLEVBQUc7SUFDbkNMLElBQUksQ0FBQ00sSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiTixJQUFJLENBQUNPLElBQUs7O0NBRlksQ0FBbkI7QUFNUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdYLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0lBQ25DRyxXQUFZO0NBRE8sQ0FBaEI7QUFJUCxPQUFPLE1BQU1RLElBQUksNkJBQUdaLE1BQU0sQ0FBQ2EsSUFBSzs7Q0FBZixDQUFWO0FBSVAsT0FBTyxNQUFNQyxPQUFPLDZCQUFHZCxNQUFNLENBQUNlLE9BQVE7O0NBQWxCLENBQWI7QUFJUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUdoQixNQUFNLENBQUNpQixFQUFHO0lBQ2pDZCxJQUFJLENBQUNNLElBQUwsQ0FBVSxHQUFWLENBQWU7SUFDZk4sSUFBSSxDQUFDTyxJQUFLO1dBQ0hSLEtBQUssQ0FBQ2dCLE9BQVE7O0NBSEQsQ0FBakI7QUFPUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUduQixNQUFNLENBQUNDLElBQUQsQ0FBTzs7OzZCQUdYQyxLQUFLLENBQUNrQixXQUFZOzs7O0NBSHZCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3R5bGVzXCI7XG5pbXBvcnQgeyBidXR0b25TdHlsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9TdHlsZXMvQnV0dG9uLVN0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZE5hbWUgPSBzdHlsZWQuaDFgXG4gICR7Zm9udC5zaXplKDMpfVxuICAke2ZvbnQuYm9sZH1cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBwYWRkaW5nOiAyMHB4IDAgMCA4MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogM3JlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uTmFtZSA9IHN0eWxlZC5oMmBcbiAgJHtmb250LnNpemUoMS41KX1cbiAgJHtmb250LmJvbGR9XG4gIGNvbG9yOiAke2NvbG9yLmdyYXkyMDB9O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsyID0gc3R5bGVkKExpbmspYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTZweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuYDsiXX0=