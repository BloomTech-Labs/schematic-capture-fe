function cov_1mfbilmftm() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Jobsheets\\index.js";
  var hash = "01480aa70019f56923637e8e6a224648fd47acb4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Jobsheets\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 26
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 25
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "3": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "4": {
        start: {
          line: 32,
          column: 31
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "5": {
        start: {
          line: 40,
          column: 30
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "6": {
        start: {
          line: 47,
          column: 31
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "7": {
        start: {
          line: 51,
          column: 27
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "8": {
        start: {
          line: 58,
          column: 23
        },
        end: {
          line: 92,
          column: 1
        }
      },
      "9": {
        start: {
          line: 93,
          column: 24
        },
        end: {
          line: 127,
          column: 1
        }
      },
      "10": {
        start: {
          line: 129,
          column: 26
        },
        end: {
          line: 148,
          column: 1
        }
      },
      "11": {
        start: {
          line: 149,
          column: 27
        },
        end: {
          line: 168,
          column: 1
        }
      },
      "12": {
        start: {
          line: 170,
          column: 23
        },
        end: {
          line: 174,
          column: 1
        }
      },
      "13": {
        start: {
          line: 176,
          column: 24
        },
        end: {
          line: 194,
          column: 1
        }
      },
      "14": {
        start: {
          line: 196,
          column: 25
        },
        end: {
          line: 208,
          column: 1
        }
      },
      "15": {
        start: {
          line: 210,
          column: 21
        },
        end: {
          line: 214,
          column: 1
        }
      },
      "16": {
        start: {
          line: 216,
          column: 25
        },
        end: {
          line: 218,
          column: 1
        }
      },
      "17": {
        start: {
          line: 220,
          column: 19
        },
        end: {
          line: 225,
          column: 1
        }
      },
      "18": {
        start: {
          line: 227,
          column: 19
        },
        end: {
          line: 232,
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
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "01480aa70019f56923637e8e6a224648fd47acb4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1mfbilmftm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1mfbilmftm();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ModalBody, Modal } from "reactstrap";
import { color, font } from "../../Styles/index";
export const Section = (cov_1mfbilmftm().s[0]++, styled.section`
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
export const Projectsh2 = (cov_1mfbilmftm().s[1]++, styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`);
export const LineBreak = (cov_1mfbilmftm().s[2]++, styled.hr`
  margin-bottom: 5rem;
`);
export const ProjectsTable = (cov_1mfbilmftm().s[3]++, styled.table`
  border: none;
`);
export const StyledTableHead = (cov_1mfbilmftm().s[4]++, styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`);
export const StyledTableRow = (cov_1mfbilmftm().s[5]++, styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`);
export const StyledTableData = (cov_1mfbilmftm().s[6]++, styled.td`
  padding: 2rem 0;
`);
export const ProjectLink = (cov_1mfbilmftm().s[7]++, styled(Link)`
  color: #3079bc;
  :hover {
    text-decoration: none;
  }
`);
export const FlexEnd = (cov_1mfbilmftm().s[8]++, styled.button`
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
export const FlexEnd2 = (cov_1mfbilmftm().s[9]++, styled.button`
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
export const NewProjBtn = (cov_1mfbilmftm().s[10]++, styled(Link)`
  display: flex;
  margin: 1.5rem;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 15rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`);
export const NewProjBtn2 = (cov_1mfbilmftm().s[11]++, styled(Link)`
  display: flex;
  margin: 2rem auto;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 15rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`);
export const BtnCont = (cov_1mfbilmftm().s[12]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`);
export const TechCont = (cov_1mfbilmftm().s[13]++, styled.div`
  width: 13rem;
  margin: 1.5rem auto;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  label {
    color: ${color.blue};
    width: 10rem;
    margin: 0.2rem;
  }
  input {
    margin: 0 0.3rem;
    color: ${color.blue};
  }
`);
export const Container = (cov_1mfbilmftm().s[14]++, styled.div`
  color: ${color.blue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    margin: 2rem;
  }
`);
export const MBody = (cov_1mfbilmftm().s[15]++, styled(ModalBody)`
  height: 20rem;
  overflow-y: scroll;
  
`);
export const ModalCont = (cov_1mfbilmftm().s[16]++, styled.div`
  border-radius: 10rem;
`);
export const Mod = (cov_1mfbilmftm().s[17]++, styled(Modal)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:30%;
`);
export const MH1 = (cov_1mfbilmftm().s[18]++, styled.h1`
  font-family: Open Sans;
  color: black;
  text-align:center;
  margin-top:2rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJNb2RhbEJvZHkiLCJNb2RhbCIsImNvbG9yIiwiZm9udCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiUHJvamVjdHNoMiIsImgyIiwiYmx1ZSIsIm5vcm1hbCIsIkxpbmVCcmVhayIsImhyIiwiUHJvamVjdHNUYWJsZSIsInRhYmxlIiwiU3R5bGVkVGFibGVIZWFkIiwidGgiLCJTdHlsZWRUYWJsZVJvdyIsInRyIiwiU3R5bGVkVGFibGVEYXRhIiwidGQiLCJQcm9qZWN0TGluayIsIkZsZXhFbmQiLCJidXR0b24iLCJyZWQiLCJzbWFsbCIsIkZsZXhFbmQyIiwiTmV3UHJvakJ0biIsIk5ld1Byb2pCdG4yIiwiQnRuQ29udCIsImRpdiIsIlRlY2hDb250IiwiQ29udGFpbmVyIiwiTUJvZHkiLCJNb2RhbENvbnQiLCJNb2QiLCJNSDEiLCJoMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsS0FBcEIsUUFBaUMsWUFBakM7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixRQUE0QixvQkFBNUI7QUFFQSxPQUFPLE1BQU1DLE9BQU8sNkJBQUdOLE1BQU0sQ0FBQ08sT0FBUTs7Ozs7Ozs7OztDQUFsQixDQUFiO0FBWVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHUixNQUFNLENBQUNTLEVBQUc7V0FDekJMLEtBQUssQ0FBQ00sSUFBSztlQUNQTCxJQUFJLENBQUNNLE1BQU87O0NBRkosQ0FBaEI7QUFNUCxPQUFPLE1BQU1DLFNBQVMsNkJBQUdaLE1BQU0sQ0FBQ2EsRUFBRzs7Q0FBYixDQUFmO0FBSVAsT0FBTyxNQUFNQyxhQUFhLDZCQUFHZCxNQUFNLENBQUNlLEtBQU07O0NBQWhCLENBQW5CO0FBSVAsT0FBTyxNQUFNQyxlQUFlLDZCQUFHaEIsTUFBTSxDQUFDaUIsRUFBRzs7Ozs7O0NBQWIsQ0FBckI7QUFRUCxPQUFPLE1BQU1DLGNBQWMsNkJBQUdsQixNQUFNLENBQUNtQixFQUFHOzs7OztDQUFiLENBQXBCO0FBT1AsT0FBTyxNQUFNQyxlQUFlLDZCQUFHcEIsTUFBTSxDQUFDcUIsRUFBRzs7Q0FBYixDQUFyQjtBQUlQLE9BQU8sTUFBTUMsV0FBVyw2QkFBR3RCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOzs7OztDQUFoQixDQUFqQjtBQU9QLE9BQU8sTUFBTXNCLE9BQU8sNkJBQUd2QixNQUFNLENBQUN3QixNQUFPOzs7c0JBR2ZwQixLQUFLLENBQUNxQixHQUFJOzs7ZUFHakJwQixJQUFJLENBQUNxQixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBTk4sQ0FBYjtBQW1DUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUczQixNQUFNLENBQUN3QixNQUFPOzs7c0JBR2hCcEIsS0FBSyxDQUFDTSxJQUFLOzs7ZUFHbEJMLElBQUksQ0FBQ3FCLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FOTCxDQUFkO0FBb0NQLE9BQU8sTUFBTUUsVUFBVSw4QkFBRzVCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOzs7Ozs7O3NCQU9qQkcsS0FBSyxDQUFDTSxJQUFLO1dBQ3RCTixLQUFLLENBQUNNLElBQUs7Ozs7Ozs7Ozt3QkFTRU4sS0FBSyxDQUFDTSxJQUFLOztDQWpCWixDQUFoQjtBQW9CUCxPQUFPLE1BQU1tQixXQUFXLDhCQUFHN0IsTUFBTSxDQUFDQyxJQUFELENBQU87Ozs7Ozs7c0JBT2xCRyxLQUFLLENBQUNNLElBQUs7V0FDdEJOLEtBQUssQ0FBQ00sSUFBSzs7Ozs7Ozs7O3dCQVNFTixLQUFLLENBQUNNLElBQUs7O0NBakJYLENBQWpCO0FBcUJQLE9BQU8sTUFBTW9CLE9BQU8sOEJBQUc5QixNQUFNLENBQUMrQixHQUFJOzs7O0NBQWQsQ0FBYjtBQU1QLE9BQU8sTUFBTUMsUUFBUSw4QkFBR2hDLE1BQU0sQ0FBQytCLEdBQUk7Ozs7Ozs7Ozs7YUFVdEIzQixLQUFLLENBQUNNLElBQUs7Ozs7OzthQU1YTixLQUFLLENBQUNNLElBQUs7O0NBaEJILENBQWQ7QUFvQlAsT0FBTyxNQUFNdUIsU0FBUyw4QkFBR2pDLE1BQU0sQ0FBQytCLEdBQUk7V0FDekIzQixLQUFLLENBQUNNLElBQUs7Ozs7Ozs7Ozs7O0NBREEsQ0FBZjtBQWNQLE9BQU8sTUFBTXdCLEtBQUssOEJBQUdsQyxNQUFNLENBQUNFLFNBQUQsQ0FBWTs7OztDQUFyQixDQUFYO0FBTVAsT0FBTyxNQUFNaUMsU0FBUyw4QkFBR25DLE1BQU0sQ0FBQytCLEdBQUk7O0NBQWQsQ0FBZjtBQUlQLE9BQU8sTUFBTUssR0FBRyw4QkFBR3BDLE1BQU0sQ0FBQ0csS0FBRCxDQUFROzs7OztDQUFqQixDQUFUO0FBT1AsT0FBTyxNQUFNa0MsR0FBRyw4QkFBR3JDLE1BQU0sQ0FBQ3NDLEVBQUc7Ozs7O0NBQWIsQ0FBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNb2RhbEJvZHksIE1vZGFsIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tIFwiLi4vLi4vU3R5bGVzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCAyNXJlbTtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMjByZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIG1hcmdpbjogMCAxNnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNoMiA9IHN0eWxlZC5oMmBcclxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBmb250LXNpemU6ICR7Zm9udC5ub3JtYWx9O1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVCcmVhayA9IHN0eWxlZC5ocmBcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzVGFibGUgPSBzdHlsZWQudGFibGVgXHJcbiAgYm9yZGVyOiBub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlSGVhZCA9IHN0eWxlZC50aGBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkLnRyYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMzLCAzNiwgNDQsIDAuMSk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVEYXRhID0gc3R5bGVkLnRkYFxyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0TGluayA9IHN0eWxlZChMaW5rKWBcclxuICBjb2xvcjogIzMwNzliYztcclxuICA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGbGV4RW5kID0gc3R5bGVkLmJ1dHRvbmBcclxuICB0b3A6IDE1cmVtO1xyXG4gIGxlZnQ6IDI5cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IucmVkfTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC41KTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgdG9wOiAxMy41cmVtO1xyXG4gICAgbGVmdDogMjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHRvcDogMTMuNXJlbTtcclxuICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbGVmdDogNjclO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmxleEVuZDIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHRvcDogMTVyZW07XHJcbiAgbGVmdDogMjlyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC41KTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgdG9wOiAxMy41cmVtO1xyXG4gICAgbGVmdDogMjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHRvcDogMTMuNXJlbTtcclxuICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbGVmdDogNjclO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld1Byb2pCdG4gPSBzdHlsZWQoTGluaylgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHtjb2xvci5ibHVlfTtcclxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBoZWlnaHQ6IDQuNXJlbTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE5ld1Byb2pCdG4yID0gc3R5bGVkKExpbmspYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IuYmx1ZX07XHJcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnRuQ29udCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlY2hDb250ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTNyZW07XHJcbiAgbWFyZ2luOiAxLjVyZW0gYXV0bztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgbWFyZ2luOiAwLjJyZW07XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbjogMCAwLjNyZW07XHJcbiAgICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTUJvZHkgPSBzdHlsZWQoTW9kYWxCb2R5KWBcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbENvbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOjMwJTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1IMSA9IHN0eWxlZC5oMWBcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjJyZW07XHJcbmA7XHJcbiJdfQ==