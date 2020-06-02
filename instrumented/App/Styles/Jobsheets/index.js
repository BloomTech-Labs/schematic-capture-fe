function cov_19rpfpqir8() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Jobsheets/index.js";
  var hash = "0df16065c5ef6f5d88e7079cd14b2786be349019";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Jobsheets/index.js",
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
    hash: "0df16065c5ef6f5d88e7079cd14b2786be349019"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_19rpfpqir8 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_19rpfpqir8();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ModalBody, Modal } from "reactstrap";
import { color, font } from "../../Styles/index";
export const Section = (cov_19rpfpqir8().s[0]++, styled.section`
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
export const Projectsh2 = (cov_19rpfpqir8().s[1]++, styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`);
export const LineBreak = (cov_19rpfpqir8().s[2]++, styled.hr`
  margin-bottom: 5rem;
`);
export const ProjectsTable = (cov_19rpfpqir8().s[3]++, styled.table`
  border: none;
`);
export const StyledTableHead = (cov_19rpfpqir8().s[4]++, styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`);
export const StyledTableRow = (cov_19rpfpqir8().s[5]++, styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`);
export const StyledTableData = (cov_19rpfpqir8().s[6]++, styled.td`
  padding: 2rem 0;
`);
export const ProjectLink = (cov_19rpfpqir8().s[7]++, styled(Link)`
  color: #3079bc;
  :hover {
    text-decoration: none;
  }
`);
export const FlexEnd = (cov_19rpfpqir8().s[8]++, styled.button`
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
export const FlexEnd2 = (cov_19rpfpqir8().s[9]++, styled.button`
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
export const NewProjBtn = (cov_19rpfpqir8().s[10]++, styled(Link)`
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
export const NewProjBtn2 = (cov_19rpfpqir8().s[11]++, styled(Link)`
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
export const BtnCont = (cov_19rpfpqir8().s[12]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`);
export const TechCont = (cov_19rpfpqir8().s[13]++, styled.div`
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
export const Container = (cov_19rpfpqir8().s[14]++, styled.div`
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
export const MBody = (cov_19rpfpqir8().s[15]++, styled(ModalBody)`
  height: 20rem;
  overflow-y: scroll;
  
`);
export const ModalCont = (cov_19rpfpqir8().s[16]++, styled.div`
  border-radius: 10rem;
`);
export const Mod = (cov_19rpfpqir8().s[17]++, styled(Modal)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:30%;
`);
export const MH1 = (cov_19rpfpqir8().s[18]++, styled.h1`
  font-family: Open Sans;
  color: black;
  text-align:center;
  margin-top:2rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJNb2RhbEJvZHkiLCJNb2RhbCIsImNvbG9yIiwiZm9udCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiUHJvamVjdHNoMiIsImgyIiwiYmx1ZSIsIm5vcm1hbCIsIkxpbmVCcmVhayIsImhyIiwiUHJvamVjdHNUYWJsZSIsInRhYmxlIiwiU3R5bGVkVGFibGVIZWFkIiwidGgiLCJTdHlsZWRUYWJsZVJvdyIsInRyIiwiU3R5bGVkVGFibGVEYXRhIiwidGQiLCJQcm9qZWN0TGluayIsIkZsZXhFbmQiLCJidXR0b24iLCJyZWQiLCJzbWFsbCIsIkZsZXhFbmQyIiwiTmV3UHJvakJ0biIsIk5ld1Byb2pCdG4yIiwiQnRuQ29udCIsImRpdiIsIlRlY2hDb250IiwiQ29udGFpbmVyIiwiTUJvZHkiLCJNb2RhbENvbnQiLCJNb2QiLCJNSDEiLCJoMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLFFBQWlDLFlBQWpDO0FBQ0EsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsUUFBNEIsb0JBQTVCO0FBRUEsT0FBTyxNQUFNQyxPQUFPLDZCQUFHTixNQUFNLENBQUNPLE9BQVE7Ozs7Ozs7Ozs7Q0FBbEIsQ0FBYjtBQVlQLE9BQU8sTUFBTUMsVUFBVSw2QkFBR1IsTUFBTSxDQUFDUyxFQUFHO1dBQ3pCTCxLQUFLLENBQUNNLElBQUs7ZUFDUEwsSUFBSSxDQUFDTSxNQUFPOztDQUZKLENBQWhCO0FBTVAsT0FBTyxNQUFNQyxTQUFTLDZCQUFHWixNQUFNLENBQUNhLEVBQUc7O0NBQWIsQ0FBZjtBQUlQLE9BQU8sTUFBTUMsYUFBYSw2QkFBR2QsTUFBTSxDQUFDZSxLQUFNOztDQUFoQixDQUFuQjtBQUlQLE9BQU8sTUFBTUMsZUFBZSw2QkFBR2hCLE1BQU0sQ0FBQ2lCLEVBQUc7Ozs7OztDQUFiLENBQXJCO0FBUVAsT0FBTyxNQUFNQyxjQUFjLDZCQUFHbEIsTUFBTSxDQUFDbUIsRUFBRzs7Ozs7Q0FBYixDQUFwQjtBQU9QLE9BQU8sTUFBTUMsZUFBZSw2QkFBR3BCLE1BQU0sQ0FBQ3FCLEVBQUc7O0NBQWIsQ0FBckI7QUFJUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUd0QixNQUFNLENBQUNDLElBQUQsQ0FBTzs7Ozs7Q0FBaEIsQ0FBakI7QUFPUCxPQUFPLE1BQU1zQixPQUFPLDZCQUFHdkIsTUFBTSxDQUFDd0IsTUFBTzs7O3NCQUdmcEIsS0FBSyxDQUFDcUIsR0FBSTs7O2VBR2pCcEIsSUFBSSxDQUFDcUIsS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQU5OLENBQWI7QUFtQ1AsT0FBTyxNQUFNQyxRQUFRLDZCQUFHM0IsTUFBTSxDQUFDd0IsTUFBTzs7O3NCQUdoQnBCLEtBQUssQ0FBQ00sSUFBSzs7O2VBR2xCTCxJQUFJLENBQUNxQixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBTkwsQ0FBZDtBQW9DUCxPQUFPLE1BQU1FLFVBQVUsOEJBQUc1QixNQUFNLENBQUNDLElBQUQsQ0FBTzs7Ozs7OztzQkFPakJHLEtBQUssQ0FBQ00sSUFBSztXQUN0Qk4sS0FBSyxDQUFDTSxJQUFLOzs7Ozs7Ozs7d0JBU0VOLEtBQUssQ0FBQ00sSUFBSzs7Q0FqQlosQ0FBaEI7QUFvQlAsT0FBTyxNQUFNbUIsV0FBVyw4QkFBRzdCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOzs7Ozs7O3NCQU9sQkcsS0FBSyxDQUFDTSxJQUFLO1dBQ3RCTixLQUFLLENBQUNNLElBQUs7Ozs7Ozs7Ozt3QkFTRU4sS0FBSyxDQUFDTSxJQUFLOztDQWpCWCxDQUFqQjtBQXFCUCxPQUFPLE1BQU1vQixPQUFPLDhCQUFHOUIsTUFBTSxDQUFDK0IsR0FBSTs7OztDQUFkLENBQWI7QUFNUCxPQUFPLE1BQU1DLFFBQVEsOEJBQUdoQyxNQUFNLENBQUMrQixHQUFJOzs7Ozs7Ozs7O2FBVXRCM0IsS0FBSyxDQUFDTSxJQUFLOzs7Ozs7YUFNWE4sS0FBSyxDQUFDTSxJQUFLOztDQWhCSCxDQUFkO0FBb0JQLE9BQU8sTUFBTXVCLFNBQVMsOEJBQUdqQyxNQUFNLENBQUMrQixHQUFJO1dBQ3pCM0IsS0FBSyxDQUFDTSxJQUFLOzs7Ozs7Ozs7OztDQURBLENBQWY7QUFjUCxPQUFPLE1BQU13QixLQUFLLDhCQUFHbEMsTUFBTSxDQUFDRSxTQUFELENBQVk7Ozs7Q0FBckIsQ0FBWDtBQU1QLE9BQU8sTUFBTWlDLFNBQVMsOEJBQUduQyxNQUFNLENBQUMrQixHQUFJOztDQUFkLENBQWY7QUFJUCxPQUFPLE1BQU1LLEdBQUcsOEJBQUdwQyxNQUFNLENBQUNHLEtBQUQsQ0FBUTs7Ozs7Q0FBakIsQ0FBVDtBQU9QLE9BQU8sTUFBTWtDLEdBQUcsOEJBQUdyQyxNQUFNLENBQUNzQyxFQUFHOzs7OztDQUFiLENBQVQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBNb2RhbEJvZHksIE1vZGFsIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSBcIi4uLy4uL1N0eWxlcy9pbmRleFwiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDAgMjVyZW07XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgIG1hcmdpbjogMCAyMHJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgbWFyZ2luOiAwIDE2cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHNoMiA9IHN0eWxlZC5oMmBcbiAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmVCcmVhayA9IHN0eWxlZC5ocmBcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c1RhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBib3JkZXI6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGFibGVIZWFkID0gc3R5bGVkLnRoYFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUYWJsZVJvdyA9IHN0eWxlZC50cmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzMsIDM2LCA0NCwgMC4xKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUYWJsZURhdGEgPSBzdHlsZWQudGRgXG4gIHBhZGRpbmc6IDJyZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGluayA9IHN0eWxlZChMaW5rKWBcbiAgY29sb3I6ICMzMDc5YmM7XG4gIDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleEVuZCA9IHN0eWxlZC5idXR0b25gXG4gIHRvcDogMTVyZW07XG4gIGxlZnQ6IDI5cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLnJlZH07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgZm9udC1zaXplOiAke2ZvbnQuc21hbGx9O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDMzLCAzNiwgNDQsIDAuNSk7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xuICAgIHRvcDogMTMuNXJlbTtcbiAgICBsZWZ0OiAyNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XG4gICAgdG9wOiAxMy41cmVtO1xuICAgIGxlZnQ6IDIzLjVyZW07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAgIHRvcDogMzUlO1xuICAgIGxlZnQ6IDY3JTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgdG9wOiAzNSU7XG4gICAgbGVmdDogNjUlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiA2MSU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRmxleEVuZDIgPSBzdHlsZWQuYnV0dG9uYFxuICB0b3A6IDE1cmVtO1xuICBsZWZ0OiAyOXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ibHVlfTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM2LCA0NCwgMC41KTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KSB7XG4gICAgdG9wOiAxMy41cmVtO1xuICAgIGxlZnQ6IDI1cmVtO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcbiAgICB0b3A6IDEzLjVyZW07XG4gICAgbGVmdDogMjMuNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTY1MHB4KSB7XG4gICAgdG9wOiAzNSU7XG4gICAgbGVmdDogNjclO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiA2NSU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIHRvcDogMzUlO1xuICAgIGxlZnQ6IDYxJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5ld1Byb2pCdG4gPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IuYmx1ZX07XG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTmV3UHJvakJ0bjIgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3IuYmx1ZX07XG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdG5Db250ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgVGVjaENvbnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTNyZW07XG4gIG1hcmdpbjogMS41cmVtIGF1dG87XG4gIGhlaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBtYXJnaW46IDAuMnJlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcbiAgICBjb2xvcjogJHtjb2xvci5ibHVlfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcblxuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTUJvZHkgPSBzdHlsZWQoTW9kYWxCb2R5KWBcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBcbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNb2QgPSBzdHlsZWQoTW9kYWwpYFxuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6MzAlO1xuYFxuXG5leHBvcnQgY29uc3QgTUgxID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tdG9wOjJyZW07XG5gO1xuIl19