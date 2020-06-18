function cov_ndoiy8hyj() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Client\\index.js";
  var hash = "81daece82253579f773101afdcad32dfb360f13b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Client\\index.js",
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
          line: 66,
          column: 26
        },
        end: {
          line: 81,
          column: 1
        }
      },
      "8": {
        start: {
          line: 83,
          column: 35
        },
        end: {
          line: 86,
          column: 1
        }
      },
      "9": {
        start: {
          line: 88,
          column: 29
        },
        end: {
          line: 90,
          column: 1
        }
      },
      "10": {
        start: {
          line: 92,
          column: 31
        },
        end: {
          line: 98,
          column: 1
        }
      },
      "11": {
        start: {
          line: 100,
          column: 30
        },
        end: {
          line: 105,
          column: 1
        }
      },
      "12": {
        start: {
          line: 107,
          column: 31
        },
        end: {
          line: 109,
          column: 1
        }
      },
      "13": {
        start: {
          line: 111,
          column: 27
        },
        end: {
          line: 116,
          column: 1
        }
      },
      "14": {
        start: {
          line: 118,
          column: 31
        },
        end: {
          line: 125,
          column: 1
        }
      },
      "15": {
        start: {
          line: 127,
          column: 23
        },
        end: {
          line: 161,
          column: 1
        }
      },
      "16": {
        start: {
          line: 162,
          column: 24
        },
        end: {
          line: 196,
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
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "81daece82253579f773101afdcad32dfb360f13b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ndoiy8hyj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ndoiy8hyj();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../Styles/index";
export const Column = (cov_ndoiy8hyj().s[0]++, styled.div`
  display: flex;
  flex-direction: column;
`);
export const Section = (cov_ndoiy8hyj().s[1]++, styled.section`
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
export const Section2 = (cov_ndoiy8hyj().s[2]++, styled.section`
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
export const Projectsh1 = (cov_ndoiy8hyj().s[3]++, styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`);
export const Projectsh2 = (cov_ndoiy8hyj().s[4]++, styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`);
export const LineBreak = (cov_ndoiy8hyj().s[5]++, styled.hr`
  margin-bottom: 5rem;
`);
export const NewProjBtn = (cov_ndoiy8hyj().s[6]++, styled(Link)`
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
export const NewUserBtn = (cov_ndoiy8hyj().s[7]++, styled(Link)`
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
export const ClientHeaderContain = (cov_ndoiy8hyj().s[8]++, styled.div`
  display: flex;
  justify-content: space-between;
`);
export const ProjectsTable = (cov_ndoiy8hyj().s[9]++, styled.table`
  border: none;
`);
export const StyledTableHead = (cov_ndoiy8hyj().s[10]++, styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`);
export const StyledTableRow = (cov_ndoiy8hyj().s[11]++, styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`);
export const StyledTableData = (cov_ndoiy8hyj().s[12]++, styled.td`
  padding: 2rem 0;
`);
export const ProjectLink = (cov_ndoiy8hyj().s[13]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
  }
`);
export const ProjectLinkName = (cov_ndoiy8hyj().s[14]++, styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
    color: ${color.black};
    opacity: 0.5;
  }
`);
export const FlexEnd = (cov_ndoiy8hyj().s[15]++, styled.button`
  top: 15rem;
  left: 29rem;
  background-color: ${color.red};
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  border-radius: 15px;
  color: white;
  opacity: 1;
  font-weight: bold;
  :hover {
    color: rgba(33, 36, 44, 0.5);
  }
  @media (max-width: 1750px) {
    top: 13.5rem;
    left: 25rem;
  }
  @media (max-width: 1700px) {
    top: 13.5rem;
    left: 23.5rem;
  }
  @media (max-width: 1650px) {
    top: 35%;
    left: 67%;
  }
  @media (max-width: 1600px) {
    top: 35%;
    left: 65%;
  }
  @media (max-width: 1300px) {
    top: 35%;
    left: 61%;
  }
`);
export const FlexEnd2 = (cov_ndoiy8hyj().s[16]++, styled.button`
  top: 15rem;
  left: 29rem;
  background-color: ${color.blue};
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  border-radius: 15px;
  color: white;
  opacity: 1;
  font-weight: bold;
  :hover {
    color: rgba(33, 36, 44, 0.5);
  }
  @media (max-width: 1750px) {
    top: 13.5rem;
    left: 25rem;
  }
  @media (max-width: 1700px) {
    top: 13.5rem;
    left: 23.5rem;
  }
  @media (max-width: 1650px) {
    top: 35%;
    left: 67%;
  }
  @media (max-width: 1600px) {
    top: 35%;
    left: 65%;
  }
  @media (max-width: 1300px) {
    top: 35%;
    left: 61%;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJjb2xvciIsImZvbnQiLCJDb2x1bW4iLCJkaXYiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24yIiwiUHJvamVjdHNoMSIsImgxIiwiYmx1ZSIsInRpdGxlIiwiUHJvamVjdHNoMiIsImgyIiwibm9ybWFsIiwiTGluZUJyZWFrIiwiaHIiLCJOZXdQcm9qQnRuIiwic21hbGwiLCJOZXdVc2VyQnRuIiwiQ2xpZW50SGVhZGVyQ29udGFpbiIsIlByb2plY3RzVGFibGUiLCJ0YWJsZSIsIlN0eWxlZFRhYmxlSGVhZCIsInRoIiwiU3R5bGVkVGFibGVSb3ciLCJ0ciIsIlN0eWxlZFRhYmxlRGF0YSIsInRkIiwiUHJvamVjdExpbmsiLCJQcm9qZWN0TGlua05hbWUiLCJibGFjayIsIkZsZXhFbmQiLCJidXR0b24iLCJyZWQiLCJGbGV4RW5kMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixRQUE0QixvQkFBNUI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNEJBQUdKLE1BQU0sQ0FBQ0ssR0FBSTs7O0NBQWQsQ0FBWjtBQUtQLE9BQU8sTUFBTUMsT0FBTyw0QkFBR04sTUFBTSxDQUFDTyxPQUFROzs7Ozs7Ozs7O0NBQWxCLENBQWI7QUFZUCxPQUFPLE1BQU1DLFFBQVEsNEJBQUdSLE1BQU0sQ0FBQ08sT0FBUTs7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBZDtBQWFQLE9BQU8sTUFBTUUsVUFBVSw0QkFBR1QsTUFBTSxDQUFDVSxFQUFHO1dBQ3pCUixLQUFLLENBQUNTLElBQUs7ZUFDUFIsSUFBSSxDQUFDUyxLQUFNO0NBRkgsQ0FBaEI7QUFLUCxPQUFPLE1BQU1DLFVBQVUsNEJBQUdiLE1BQU0sQ0FBQ2MsRUFBRztXQUN6QlosS0FBSyxDQUFDUyxJQUFLO2VBQ1BSLElBQUksQ0FBQ1ksTUFBTzs7Q0FGSixDQUFoQjtBQU1QLE9BQU8sTUFBTUMsU0FBUyw0QkFBR2hCLE1BQU0sQ0FBQ2lCLEVBQUc7O0NBQWIsQ0FBZjtBQUlQLE9BQU8sTUFBTUMsVUFBVSw0QkFBR2xCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOztzQkFFakJDLEtBQUssQ0FBQ1MsSUFBSzs7Ozs7O2VBTWxCUixJQUFJLENBQUNnQixLQUFNOzs7Ozs7O0NBUkgsQ0FBaEI7QUFnQlAsT0FBTyxNQUFNQyxVQUFVLDRCQUFHcEIsTUFBTSxDQUFDQyxJQUFELENBQU87O3NCQUVqQkMsS0FBSyxDQUFDUyxJQUFLOzs7Ozs7ZUFNbEJSLElBQUksQ0FBQ2dCLEtBQU07Ozs7Ozs7Q0FSSCxDQUFoQjtBQWlCUCxPQUFPLE1BQU1FLG1CQUFtQiw0QkFBR3JCLE1BQU0sQ0FBQ0ssR0FBSTs7O0NBQWQsQ0FBekI7QUFLUCxPQUFPLE1BQU1pQixhQUFhLDRCQUFHdEIsTUFBTSxDQUFDdUIsS0FBTTs7Q0FBaEIsQ0FBbkI7QUFJUCxPQUFPLE1BQU1DLGVBQWUsNkJBQUd4QixNQUFNLENBQUN5QixFQUFHOzs7Ozs7Q0FBYixDQUFyQjtBQVFQLE9BQU8sTUFBTUMsY0FBYyw2QkFBRzFCLE1BQU0sQ0FBQzJCLEVBQUc7Ozs7O0NBQWIsQ0FBcEI7QUFPUCxPQUFPLE1BQU1DLGVBQWUsNkJBQUc1QixNQUFNLENBQUM2QixFQUFHOztDQUFiLENBQXJCO0FBSVAsT0FBTyxNQUFNQyxXQUFXLDZCQUFHOUIsTUFBTSxDQUFDQyxJQUFELENBQU87V0FDN0JDLEtBQUssQ0FBQ1MsSUFBSzs7OztDQURFLENBQWpCO0FBT1AsT0FBTyxNQUFNb0IsZUFBZSw2QkFBRy9CLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO1dBQ2pDQyxLQUFLLENBQUNTLElBQUs7OzthQUdUVCxLQUFLLENBQUM4QixLQUFNOzs7Q0FKRyxDQUFyQjtBQVNQLE9BQU8sTUFBTUMsT0FBTyw2QkFBR2pDLE1BQU0sQ0FBQ2tDLE1BQU87OztzQkFHZmhDLEtBQUssQ0FBQ2lDLEdBQUk7OztlQUdqQmhDLElBQUksQ0FBQ2dCLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FOTixDQUFiO0FBbUNQLE9BQU8sTUFBTWlCLFFBQVEsNkJBQUdwQyxNQUFNLENBQUNrQyxNQUFPOzs7c0JBR2hCaEMsS0FBSyxDQUFDUyxJQUFLOzs7ZUFHbEJSLElBQUksQ0FBQ2dCLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FOTCxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSBcIi4uLy4uL1N0eWxlcy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW46IDAgMjVyZW07XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luOiAwIDIwcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMTZyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24yID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIDI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luOiAwIDIwcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMTZyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzaDEgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgZm9udC1zaXplOiAke2ZvbnQudGl0bGV9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzaDIgPSBzdHlsZWQuaDJgXHJcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgZm9udC1zaXplOiAke2ZvbnQubm9ybWFsfTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lQnJlYWsgPSBzdHlsZWQuaHJgXHJcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdQcm9qQnRuID0gc3R5bGVkKExpbmspYFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC42KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOZXdVc2VyQnRuID0gc3R5bGVkKExpbmspYFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC42KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50SGVhZGVyQ29udGFpbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNUYWJsZSA9IHN0eWxlZC50YWJsZWBcclxuICBib3JkZXI6IG5vbmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVIZWFkID0gc3R5bGVkLnRoYFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVSb3cgPSBzdHlsZWQudHJgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzMsIDM2LCA0NCwgMC4xKTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUYWJsZURhdGEgPSBzdHlsZWQudGRgXHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RMaW5rTmFtZSA9IHN0eWxlZChMaW5rKWBcclxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICR7Y29sb3IuYmxhY2t9O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGbGV4RW5kID0gc3R5bGVkLmJ1dHRvbmBcclxuICB0b3A6IDE1cmVtO1xyXG4gIGxlZnQ6IDI5cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IucmVkfTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC41KTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgdG9wOiAxMy41cmVtO1xyXG4gICAgbGVmdDogMjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHRvcDogMTMuNXJlbTtcclxuICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbGVmdDogNjclO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmxleEVuZDIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHRvcDogMTVyZW07XHJcbiAgbGVmdDogMjlyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC41KTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgdG9wOiAxMy41cmVtO1xyXG4gICAgbGVmdDogMjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHRvcDogMTMuNXJlbTtcclxuICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbGVmdDogNjclO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgfVxyXG5gO1xyXG4iXX0=