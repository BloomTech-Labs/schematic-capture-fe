function cov_fs6s1h5he() {
  var path = "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Client\\index.js";
  var hash = "30f124cc0e0d2f8d3c3452f1bf0c81adc1031bdf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Client\\index.js",
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
    hash: "30f124cc0e0d2f8d3c3452f1bf0c81adc1031bdf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fs6s1h5he = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_fs6s1h5he();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../Styles/index";
export const Column = (cov_fs6s1h5he().s[0]++, styled.div`
  display: flex;
  flex-direction: column;
`);
export const Section = (cov_fs6s1h5he().s[1]++, styled.section`
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
export const Section2 = (cov_fs6s1h5he().s[2]++, styled.section`
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
export const Projectsh1 = (cov_fs6s1h5he().s[3]++, styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`);
export const Projectsh2 = (cov_fs6s1h5he().s[4]++, styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`);
export const LineBreak = (cov_fs6s1h5he().s[5]++, styled.hr`
  margin-bottom: 5rem;
`);
export const NewProjBtn = (cov_fs6s1h5he().s[6]++, styled(Link)`
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
export const ClientHeaderContain = (cov_fs6s1h5he().s[7]++, styled.div`
  display: flex;
  justify-content: space-between;
`);
export const ProjectsTable = (cov_fs6s1h5he().s[8]++, styled.table`
  border: none;
`);
export const StyledTableHead = (cov_fs6s1h5he().s[9]++, styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`);
export const StyledTableRow = (cov_fs6s1h5he().s[10]++, styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`);
export const StyledTableData = (cov_fs6s1h5he().s[11]++, styled.td`
  padding: 2rem 0;
`);
export const ProjectLink = (cov_fs6s1h5he().s[12]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
  }
`);
export const ProjectLinkName = (cov_fs6s1h5he().s[13]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
    color: ${color.black};
    opacity: 0.5;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJjb2xvciIsImZvbnQiLCJDb2x1bW4iLCJkaXYiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24yIiwiUHJvamVjdHNoMSIsImgxIiwiYmx1ZSIsInRpdGxlIiwiUHJvamVjdHNoMiIsImgyIiwibm9ybWFsIiwiTGluZUJyZWFrIiwiaHIiLCJOZXdQcm9qQnRuIiwic21hbGwiLCJDbGllbnRIZWFkZXJDb250YWluIiwiUHJvamVjdHNUYWJsZSIsInRhYmxlIiwiU3R5bGVkVGFibGVIZWFkIiwidGgiLCJTdHlsZWRUYWJsZVJvdyIsInRyIiwiU3R5bGVkVGFibGVEYXRhIiwidGQiLCJQcm9qZWN0TGluayIsIlByb2plY3RMaW5rTmFtZSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLFFBQTRCLG9CQUE1QjtBQUVBLE9BQU8sTUFBTUMsTUFBTSw0QkFBR0osTUFBTSxDQUFDSyxHQUFJOzs7Q0FBZCxDQUFaO0FBS1AsT0FBTyxNQUFNQyxPQUFPLDRCQUFHTixNQUFNLENBQUNPLE9BQVE7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBYjtBQVlQLE9BQU8sTUFBTUMsUUFBUSw0QkFBR1IsTUFBTSxDQUFDTyxPQUFROzs7Ozs7Ozs7OztDQUFsQixDQUFkO0FBYVAsT0FBTyxNQUFNRSxVQUFVLDRCQUFHVCxNQUFNLENBQUNVLEVBQUc7V0FDekJSLEtBQUssQ0FBQ1MsSUFBSztlQUNQUixJQUFJLENBQUNTLEtBQU07Q0FGSCxDQUFoQjtBQUtQLE9BQU8sTUFBTUMsVUFBVSw0QkFBR2IsTUFBTSxDQUFDYyxFQUFHO1dBQ3pCWixLQUFLLENBQUNTLElBQUs7ZUFDUFIsSUFBSSxDQUFDWSxNQUFPOztDQUZKLENBQWhCO0FBTVAsT0FBTyxNQUFNQyxTQUFTLDRCQUFHaEIsTUFBTSxDQUFDaUIsRUFBRzs7Q0FBYixDQUFmO0FBSVAsT0FBTyxNQUFNQyxVQUFVLDRCQUFHbEIsTUFBTSxDQUFDQyxJQUFELENBQU87O3NCQUVqQkMsS0FBSyxDQUFDUyxJQUFLOzs7Ozs7ZUFNbEJSLElBQUksQ0FBQ2dCLEtBQU07Ozs7Ozs7Q0FSSCxDQUFoQjtBQWlCUCxPQUFPLE1BQU1DLG1CQUFtQiw0QkFBR3BCLE1BQU0sQ0FBQ0ssR0FBSTs7O0NBQWQsQ0FBekI7QUFLUCxPQUFPLE1BQU1nQixhQUFhLDRCQUFHckIsTUFBTSxDQUFDc0IsS0FBTTs7Q0FBaEIsQ0FBbkI7QUFJUCxPQUFPLE1BQU1DLGVBQWUsNEJBQUd2QixNQUFNLENBQUN3QixFQUFHOzs7Ozs7Q0FBYixDQUFyQjtBQVFQLE9BQU8sTUFBTUMsY0FBYyw2QkFBR3pCLE1BQU0sQ0FBQzBCLEVBQUc7Ozs7O0NBQWIsQ0FBcEI7QUFPUCxPQUFPLE1BQU1DLGVBQWUsNkJBQUczQixNQUFNLENBQUM0QixFQUFHOztDQUFiLENBQXJCO0FBSVAsT0FBTyxNQUFNQyxXQUFXLDZCQUFHN0IsTUFBTSxDQUFDQyxJQUFELENBQU87V0FDN0JDLEtBQUssQ0FBQ1MsSUFBSzs7OztDQURFLENBQWpCO0FBT1AsT0FBTyxNQUFNbUIsZUFBZSw2QkFBRzlCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO1dBQ2pDQyxLQUFLLENBQUNTLElBQUs7OzthQUdUVCxLQUFLLENBQUM2QixLQUFNOzs7Q0FKRyxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gXCIuLi8uLi9TdHlsZXMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDI1cmVtO1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbjogMCAyMHJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgbWFyZ2luOiAwIDE2cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uMiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCAyNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogNzAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbjogMCAyMHJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgbWFyZ2luOiAwIDE2cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c2gxID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIGZvbnQtc2l6ZTogJHtmb250LnRpdGxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c2gyID0gc3R5bGVkLmgyYFxyXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZUJyZWFrID0gc3R5bGVkLmhyYFxyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3UHJvakJ0biA9IHN0eWxlZChMaW5rKWBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZm9udC1zaXplOiAke2ZvbnQuc21hbGx9O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDMzLCAzNiwgNDQsIDAuNik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudEhlYWRlckNvbnRhaW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzVGFibGUgPSBzdHlsZWQudGFibGVgXHJcbiAgYm9yZGVyOiBub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlSGVhZCA9IHN0eWxlZC50aGBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkLnRyYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMzLCAzNiwgNDQsIDAuMSk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVEYXRhID0gc3R5bGVkLnRkYFxyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0TGluayA9IHN0eWxlZChMaW5rKWBcclxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlua05hbWUgPSBzdHlsZWQoTGluaylgXHJcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAke2NvbG9yLmJsYWNrfTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbmA7XHJcbiJdfQ==