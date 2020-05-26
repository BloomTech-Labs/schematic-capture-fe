function cov_1xz5q6evir() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Client/index.js";
  var hash = "f3ede310428ca5aa3c5c90da66d7c271b4eddedc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Client/index.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 23
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "3": {
        start: {
          line: 35,
          column: 26
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "4": {
        start: {
          line: 40,
          column: 26
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "5": {
        start: {
          line: 46,
          column: 25
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "6": {
        start: {
          line: 50,
          column: 26
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "7": {
        start: {
          line: 67,
          column: 35
        },
        end: {
          line: 70,
          column: 1
        }
      },
      "8": {
        start: {
          line: 72,
          column: 29
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "9": {
        start: {
          line: 76,
          column: 31
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "10": {
        start: {
          line: 84,
          column: 30
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "11": {
        start: {
          line: 91,
          column: 31
        },
        end: {
          line: 93,
          column: 1
        }
      },
      "12": {
        start: {
          line: 95,
          column: 27
        },
        end: {
          line: 100,
          column: 1
        }
      },
      "13": {
        start: {
          line: 102,
          column: 31
        },
        end: {
          line: 109,
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f3ede310428ca5aa3c5c90da66d7c271b4eddedc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1xz5q6evir = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1xz5q6evir();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../Styles/index";
export const Column = (cov_1xz5q6evir().s[0]++, styled.div`
  display: flex;
  flex-direction: column;
`);
export const Section = (cov_1xz5q6evir().s[1]++, styled.section`
  margin: 0 25rem;
  // display: flex;
  // justify-content: space-between;
  @media (max-width: 1500px) {
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`);
export const Section2 = (cov_1xz5q6evir().s[2]++, styled.section`
  margin: 0 25rem;
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1500px) {
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`);
export const Projectsh1 = (cov_1xz5q6evir().s[3]++, styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`);
export const Projectsh2 = (cov_1xz5q6evir().s[4]++, styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`);
export const LineBreak = (cov_1xz5q6evir().s[5]++, styled.hr`
  margin-bottom: 5rem;
`);
export const NewProjBtn = (cov_1xz5q6evir().s[6]++, styled(Link)`
  text-decoration: none;
  background-color: ${color.blue};
  border-radius: 25px;
  text-align: center;
  color: white;
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  opacity: 1;
  font-weight: bold;
  :hover {
    color: rgba(33, 36, 44, 0.6);
    text-decoration: none;
  }
`);
export const ClientHeaderContain = (cov_1xz5q6evir().s[7]++, styled.div`
  display: flex;
  justify-content: space-between;
`);
export const ProjectsTable = (cov_1xz5q6evir().s[8]++, styled.table`
  border: none;
`);
export const StyledTableHead = (cov_1xz5q6evir().s[9]++, styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`);
export const StyledTableRow = (cov_1xz5q6evir().s[10]++, styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`);
export const StyledTableData = (cov_1xz5q6evir().s[11]++, styled.td`
  padding: 2rem 0;
`);
export const ProjectLink = (cov_1xz5q6evir().s[12]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
  }
`);
export const ProjectLinkName = (cov_1xz5q6evir().s[13]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
    color: ${color.black};
    opacity: 0.5;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJjb2xvciIsImZvbnQiLCJDb2x1bW4iLCJkaXYiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24yIiwiUHJvamVjdHNoMSIsImgxIiwiYmx1ZSIsInRpdGxlIiwiUHJvamVjdHNoMiIsImgyIiwibm9ybWFsIiwiTGluZUJyZWFrIiwiaHIiLCJOZXdQcm9qQnRuIiwic21hbGwiLCJDbGllbnRIZWFkZXJDb250YWluIiwiUHJvamVjdHNUYWJsZSIsInRhYmxlIiwiU3R5bGVkVGFibGVIZWFkIiwidGgiLCJTdHlsZWRUYWJsZVJvdyIsInRyIiwiU3R5bGVkVGFibGVEYXRhIiwidGQiLCJQcm9qZWN0TGluayIsIlByb2plY3RMaW5rTmFtZSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixRQUE0QixvQkFBNUI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdKLE1BQU0sQ0FBQ0ssR0FBSTs7O0NBQWQsQ0FBWjtBQUtQLE9BQU8sTUFBTUMsT0FBTyw2QkFBR04sTUFBTSxDQUFDTyxPQUFROzs7Ozs7Ozs7O0NBQWxCLENBQWI7QUFZUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdSLE1BQU0sQ0FBQ08sT0FBUTs7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBZDtBQWFQLE9BQU8sTUFBTUUsVUFBVSw2QkFBR1QsTUFBTSxDQUFDVSxFQUFHO1dBQ3pCUixLQUFLLENBQUNTLElBQUs7ZUFDUFIsSUFBSSxDQUFDUyxLQUFNO0NBRkgsQ0FBaEI7QUFLUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdiLE1BQU0sQ0FBQ2MsRUFBRztXQUN6QlosS0FBSyxDQUFDUyxJQUFLO2VBQ1BSLElBQUksQ0FBQ1ksTUFBTzs7Q0FGSixDQUFoQjtBQU1QLE9BQU8sTUFBTUMsU0FBUyw2QkFBR2hCLE1BQU0sQ0FBQ2lCLEVBQUc7O0NBQWIsQ0FBZjtBQUlQLE9BQU8sTUFBTUMsVUFBVSw2QkFBR2xCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOztzQkFFakJDLEtBQUssQ0FBQ1MsSUFBSzs7Ozs7O2VBTWxCUixJQUFJLENBQUNnQixLQUFNOzs7Ozs7O0NBUkgsQ0FBaEI7QUFpQlAsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUdwQixNQUFNLENBQUNLLEdBQUk7OztDQUFkLENBQXpCO0FBS1AsT0FBTyxNQUFNZ0IsYUFBYSw2QkFBR3JCLE1BQU0sQ0FBQ3NCLEtBQU07O0NBQWhCLENBQW5CO0FBSVAsT0FBTyxNQUFNQyxlQUFlLDZCQUFHdkIsTUFBTSxDQUFDd0IsRUFBRzs7Ozs7O0NBQWIsQ0FBckI7QUFRUCxPQUFPLE1BQU1DLGNBQWMsOEJBQUd6QixNQUFNLENBQUMwQixFQUFHOzs7OztDQUFiLENBQXBCO0FBT1AsT0FBTyxNQUFNQyxlQUFlLDhCQUFHM0IsTUFBTSxDQUFDNEIsRUFBRzs7Q0FBYixDQUFyQjtBQUlQLE9BQU8sTUFBTUMsV0FBVyw4QkFBRzdCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO1dBQzdCQyxLQUFLLENBQUNTLElBQUs7Ozs7Q0FERSxDQUFqQjtBQU9QLE9BQU8sTUFBTW1CLGVBQWUsOEJBQUc5QixNQUFNLENBQUNDLElBQUQsQ0FBTztXQUNqQ0MsS0FBSyxDQUFDUyxJQUFLOzs7YUFHVFQsS0FBSyxDQUFDNkIsS0FBTTs7O0NBSkcsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gXCIuLi8uLi9TdHlsZXMvaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDAgMjVyZW07XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgIG1hcmdpbjogMCAyMHJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgbWFyZ2luOiAwIDE2cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbjIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwIDI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3MCU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICBtYXJnaW46IDAgMjByZW07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIG1hcmdpbjogMCAxNnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzaDEgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICBmb250LXNpemU6ICR7Zm9udC50aXRsZX07XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHNoMiA9IHN0eWxlZC5oMmBcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmVCcmVhayA9IHN0eWxlZC5ocmBcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdQcm9qQnRuID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB3aWR0aDogMTByZW07XG4gIGZvbnQtc2l6ZTogJHtmb250LnNtYWxsfTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC42KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbGllbnRIZWFkZXJDb250YWluID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGJvcmRlcjogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUYWJsZUhlYWQgPSBzdHlsZWQudGhgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZm9udC1zaXplOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkLnRyYFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzMywgMzYsIDQ0LCAwLjEpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlRGF0YSA9IHN0eWxlZC50ZGBcbiAgcGFkZGluZzogMnJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RMaW5rID0gc3R5bGVkKExpbmspYFxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcbiAgOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlua05hbWUgPSBzdHlsZWQoTGluaylgXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICA6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHtjb2xvci5ibGFja307XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuIl19