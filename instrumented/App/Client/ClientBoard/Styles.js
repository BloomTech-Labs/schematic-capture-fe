function cov_1viu3u1zdr() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/ClientBoard/Styles.js";
  var hash = "48350bdf089c4b3031694b74f9c36f7823046ec0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/ClientBoard/Styles.js",
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
          column: 24
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
    hash: "48350bdf089c4b3031694b74f9c36f7823046ec0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1viu3u1zdr = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1viu3u1zdr();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
export const Header = (cov_1viu3u1zdr().s[0]++, styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1rem;
padding-right: 2rem;
`);
export const PageName = (cov_1viu3u1zdr().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_1viu3u1zdr().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const Main = (cov_1viu3u1zdr().s[3]++, styled.main`
  padding: 20px 0 0 80px;
`);
export const Section = (cov_1viu3u1zdr().s[4]++, styled.section`
  margin-top: 3rem;
`);
export const SectionName = (cov_1viu3u1zdr().s[5]++, styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`);
export const StyledLink2 = (cov_1viu3u1zdr().s[6]++, styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiY29sb3IiLCJmb250IiwiYnV0dG9uU3R5bGUiLCJIZWFkZXIiLCJkaXYiLCJQYWdlTmFtZSIsImgxIiwic2l6ZSIsImJvbGQiLCJTdHlsZWRMaW5rIiwiTWFpbiIsIm1haW4iLCJTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb25OYW1lIiwiaDIiLCJncmF5MjAwIiwiU3R5bGVkTGluazIiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLFFBQTRCLHdCQUE1QjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaURBQTVCO0FBRUEsT0FBTyxNQUFNQyxNQUFNLDZCQUFHTCxNQUFNLENBQUNNLEdBQUk7Ozs7O0NBQWQsQ0FBWjtBQU9QLE9BQU8sTUFBTUMsUUFBUSw2QkFBR1AsTUFBTSxDQUFDUSxFQUFHO0lBQzlCTCxJQUFJLENBQUNNLElBQUwsQ0FBVSxDQUFWLENBQWE7SUFDYk4sSUFBSSxDQUFDTyxJQUFLOztDQUZPLENBQWQ7QUFNUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdYLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0lBQ25DRyxXQUFZO0NBRE8sQ0FBaEI7QUFJUCxPQUFPLE1BQU1RLElBQUksNkJBQUdaLE1BQU0sQ0FBQ2EsSUFBSzs7Q0FBZixDQUFWO0FBSVAsT0FBTyxNQUFNQyxPQUFPLDZCQUFHZCxNQUFNLENBQUNlLE9BQVE7O0NBQWxCLENBQWI7QUFJUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUdoQixNQUFNLENBQUNpQixFQUFHO0lBQ2pDZCxJQUFJLENBQUNNLElBQUwsQ0FBVSxHQUFWLENBQWU7SUFDZk4sSUFBSSxDQUFDTyxJQUFLO1dBQ0hSLEtBQUssQ0FBQ2dCLE9BQVE7O0NBSEQsQ0FBakI7QUFPUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUduQixNQUFNLENBQUNDLElBQUQsQ0FBTzs7OzZCQUdYQyxLQUFLLENBQUNrQixXQUFZOzs7O0NBSHZCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzXCI7XG5pbXBvcnQgeyBidXR0b25TdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9TdHlsZXMvQnV0dG9uLVN0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5tYXJnaW4tYm90dG9tOiAxcmVtO1xucGFkZGluZy1yaWdodDogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYWdlTmFtZSA9IHN0eWxlZC5oMWBcbiAgJHtmb250LnNpemUoMyl9XG4gICR7Zm9udC5ib2xkfVxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbiAgJHtidXR0b25TdHlsZX1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIHBhZGRpbmc6IDIwcHggMCAwIDgwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiAzcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25OYW1lID0gc3R5bGVkLmgyYFxuICAke2ZvbnQuc2l6ZSgxLjUpfVxuICAke2ZvbnQuYm9sZH1cbiAgY29sb3I6ICR7Y29sb3IuZ3JheTIwMH07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluazIgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmJvcmRlckNvbG9yfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG5gOyJdfQ==