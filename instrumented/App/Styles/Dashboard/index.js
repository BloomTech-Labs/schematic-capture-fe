function cov_2khsrwwkfn() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Dashboard/index.js";
  var hash = "073b29ca9ace21d2c01da39ba88375f8ddea846f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/App/Styles/Dashboard/index.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 25
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "3": {
        start: {
          line: 35,
          column: 25
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "4": {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "5": {
        start: {
          line: 60,
          column: 23
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "6": {
        start: {
          line: 70,
          column: 25
        },
        end: {
          line: 73,
          column: 1
        }
      },
      "7": {
        start: {
          line: 75,
          column: 26
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "8": {
        start: {
          line: 84,
          column: 25
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "9": {
        start: {
          line: 93,
          column: 21
        },
        end: {
          line: 98,
          column: 1
        }
      },
      "10": {
        start: {
          line: 100,
          column: 25
        },
        end: {
          line: 102,
          column: 1
        }
      },
      "11": {
        start: {
          line: 104,
          column: 22
        },
        end: {
          line: 133,
          column: 1
        }
      },
      "12": {
        start: {
          line: 135,
          column: 23
        },
        end: {
          line: 170,
          column: 1
        }
      },
      "13": {
        start: {
          line: 172,
          column: 23
        },
        end: {
          line: 178,
          column: 1
        }
      },
      "14": {
        start: {
          line: 180,
          column: 24
        },
        end: {
          line: 185,
          column: 1
        }
      },
      "15": {
        start: {
          line: 187,
          column: 23
        },
        end: {
          line: 189,
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
      "15": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "073b29ca9ace21d2c01da39ba88375f8ddea846f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2khsrwwkfn = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2khsrwwkfn();
import styled from 'styled-components';
import { color, font } from '../index';
import { Link } from 'react-router-dom';
export const Title = (cov_2khsrwwkfn().s[0]++, styled.h1`
    color: ${color.blue};
    font-weight: bold;
    font-size: ${font.normal};
`);
export const Seperate = (cov_2khsrwwkfn().s[1]++, styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 25rem 12rem 25rem;
    @media (max-width: 1500px) {
        margin: 5rem 20rem 12rem 20rem
    }
    @media (max-width: 1200px) {
        margin: 5rem 16rem 12rem 16rem
    }
`);
export const Seperate2 = (cov_2khsrwwkfn().s[2]++, styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 25rem 4rem 25rem;
    @media (max-width: 1500px) {
        margin: 5rem 20rem 12rem 20rem
    }
    @media (max-width: 1200px) {
        margin: 5rem 16rem 12rem 16rem
    }
`);
export const RightSide = (cov_2khsrwwkfn().s[3]++, styled.div`
    max-width:50rem;
    display: flex;
    justify-content: space-between;
    max-height: 2.5rem;
`);
export const Greeting = (cov_2khsrwwkfn().s[4]++, styled.button`
    text-decoration: none;
    color: ${color.black};
    font-size: ${font.normal};
    font-weight: bold;
    padding: 0;
    margin-left: 1rem;
    min-width: 100px;
    :hover{
        text-decoration: none;
        opacity: 0.75;
        div {
            visibility: visible;
            height: 130px;
        }
    }
`);
export const Section = (cov_2khsrwwkfn().s[5]++, styled.section`
    margin: 0 25rem;
    @media (max-width: 1500px) {
        margin: 0 20rem 
    }
    @media (max-width: 1200px) {
        margin: 0 16rem 
    }
`);
export const Clientsh2 = (cov_2khsrwwkfn().s[6]++, styled.h2`
    color: ${color.blue};
    font-size: ${font.normal};
`);
export const ClientCont = (cov_2khsrwwkfn().s[7]++, styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1500px) {
    justify-content: space-around;
    }
`);
export const ClientBox = (cov_2khsrwwkfn().s[8]++, styled(Link)`
    text-align: center;
    font-size: 36px;
    color: rgba(33,36,44,0.5);
    :hover{
        text-decoration: none;
    }
`);
export const Hover = (cov_2khsrwwkfn().s[9]++, styled.img`
    max-height: 2rem;
    :hover{
        opacity: 0.5;
    }
`);
export const LineBreak = (cov_2khsrwwkfn().s[10]++, styled.hr`
    margin-bottom: 5rem;
`);
export const Spacer = (cov_2khsrwwkfn().s[11]++, styled.div`
    width: 40rem;
    height: 40rem;
    border: 2px solid rgba(33,36,44,0.1);
    margin-bottom: 6rem;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1750px) {
        width: 30%;
        height: 37rem;
    }
    @media (max-width: 1650px) {
        width: 30%;
        height: 35rem;
    }
    @media (max-width: 1500px) {
        width: 40%;
        height: 40rem;
    }
    @media (max-width: 1325px) {
        width: 37.5%;
        height: 35rem;
    }
    @media (max-width: 1200px) {
        width: 37.5%;
        height: 30rem;
    }
`);
export const FlexEnd = (cov_2khsrwwkfn().s[12]++, styled.button`
    position: relative;
    top: 15rem;
    left: 29rem;
    background-color: ${color.red};
    padding: .75rem;
    width: 10rem;
    font-size: ${font.small};
    border-radius:15px;
    color: white;
    opacity: 1;
    font-weight: bold;
    :hover{
        color: rgba(33,36,44,0.5);
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
export const Profile = (cov_2khsrwwkfn().s[13]++, styled.img`
    width: 24px;
    height: 24px;
    margin: -5px 0 0 1rem;
    border-radius: 50%;
    border: 1px solid black;
`);
export const SearchIn = (cov_2khsrwwkfn().s[14]++, styled.input`
    border-radius: 15px;
    max-width:10rem;
    text-align:center;
    margin: 0 2rem;
`);
export const Buttion = (cov_2khsrwwkfn().s[15]++, styled.button`
    margin-right: 2rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9yIiwiZm9udCIsIkxpbmsiLCJUaXRsZSIsImgxIiwiYmx1ZSIsIm5vcm1hbCIsIlNlcGVyYXRlIiwiZGl2IiwiU2VwZXJhdGUyIiwiUmlnaHRTaWRlIiwiR3JlZXRpbmciLCJidXR0b24iLCJibGFjayIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiQ2xpZW50c2gyIiwiaDIiLCJDbGllbnRDb250IiwiQ2xpZW50Qm94IiwiSG92ZXIiLCJpbWciLCJMaW5lQnJlYWsiLCJociIsIlNwYWNlciIsIkZsZXhFbmQiLCJyZWQiLCJzbWFsbCIsIlByb2ZpbGUiLCJTZWFyY2hJbiIsImlucHV0IiwiQnV0dGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixRQUE0QixVQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsT0FBTyxNQUFNQyxLQUFLLDZCQUFHSixNQUFNLENBQUNLLEVBQUc7YUFDbEJKLEtBQUssQ0FBQ0ssSUFBSzs7aUJBRVBKLElBQUksQ0FBQ0ssTUFBTztDQUhYLENBQVg7QUFNUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdSLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7Ozs7OztDQUFkLENBQWQ7QUFZUCxPQUFPLE1BQU1DLFNBQVMsNkJBQUdWLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7Ozs7OztDQUFkLENBQWY7QUFZUCxPQUFPLE1BQU1FLFNBQVMsNkJBQUdYLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7Q0FBZCxDQUFmO0FBT1AsT0FBTyxNQUFNRyxRQUFRLDZCQUFHWixNQUFNLENBQUNhLE1BQU87O2FBRXpCWixLQUFLLENBQUNhLEtBQU07aUJBQ1JaLElBQUksQ0FBQ0ssTUFBTzs7Ozs7Ozs7Ozs7OztDQUhSLENBQWQ7QUFrQlAsT0FBTyxNQUFNUSxPQUFPLDZCQUFHZixNQUFNLENBQUNnQixPQUFROzs7Ozs7OztDQUFsQixDQUFiO0FBVVAsT0FBTyxNQUFNQyxTQUFTLDZCQUFHakIsTUFBTSxDQUFDa0IsRUFBRzthQUN0QmpCLEtBQUssQ0FBQ0ssSUFBSztpQkFDUEosSUFBSSxDQUFDSyxNQUFPO0NBRlAsQ0FBZjtBQUtQLE9BQU8sTUFBTVksVUFBVSw2QkFBR25CLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7OztDQUFkLENBQWhCO0FBU1AsT0FBTyxNQUFNVyxTQUFTLDZCQUFHcEIsTUFBTSxDQUFDRyxJQUFELENBQU87Ozs7Ozs7Q0FBaEIsQ0FBZjtBQVNQLE9BQU8sTUFBTWtCLEtBQUssNkJBQUdyQixNQUFNLENBQUNzQixHQUFJOzs7OztDQUFkLENBQVg7QUFPUCxPQUFPLE1BQU1DLFNBQVMsOEJBQUd2QixNQUFNLENBQUN3QixFQUFHOztDQUFiLENBQWY7QUFJUCxPQUFPLE1BQU1DLE1BQU0sOEJBQUd6QixNQUFNLENBQUNTLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWQsQ0FBWjtBQStCUCxPQUFPLE1BQU1pQixPQUFPLDhCQUFHMUIsTUFBTSxDQUFDYSxNQUFPOzs7O3dCQUliWixLQUFLLENBQUMwQixHQUFJOzs7aUJBR2pCekIsSUFBSSxDQUFDMEIsS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQVBSLENBQWI7QUFxQ1AsT0FBTyxNQUFNQyxPQUFPLDhCQUFHN0IsTUFBTSxDQUFDc0IsR0FBSTs7Ozs7O0NBQWQsQ0FBYjtBQVFQLE9BQU8sTUFBTVEsUUFBUSw4QkFBRzlCLE1BQU0sQ0FBQytCLEtBQU07Ozs7O0NBQWhCLENBQWQ7QUFPUCxPQUFPLE1BQU1DLE9BQU8sOEJBQUdoQyxNQUFNLENBQUNhLE1BQU87O0NBQWpCLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAke2ZvbnQubm9ybWFsfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZXBlcmF0ZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA1cmVtIDI1cmVtIDEycmVtIDI1cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDIwcmVtIDEycmVtIDIwcmVtXG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDE2cmVtIDEycmVtIDE2cmVtXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VwZXJhdGUyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDVyZW0gMjVyZW0gNHJlbSAyNXJlbTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAgICAgIG1hcmdpbjogNXJlbSAyMHJlbSAxMnJlbSAyMHJlbVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIG1hcmdpbjogNXJlbSAxNnJlbSAxMnJlbSAxNnJlbVxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZSA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOjUwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEdyZWV0aW5nID0gc3R5bGVkLmJ1dHRvbmBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICR7Y29sb3IuYmxhY2t9O1xuICAgIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIDpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgbWFyZ2luOiAwIDI1cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDIwcmVtIFxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIG1hcmdpbjogMCAxNnJlbSBcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDbGllbnRzaDIgPSBzdHlsZWQuaDJgXG4gICAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XG4gICAgZm9udC1zaXplOiAke2ZvbnQubm9ybWFsfTtcbmBcblxuZXhwb3J0IGNvbnN0IENsaWVudENvbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENsaWVudEJveCA9IHN0eWxlZChMaW5rKWBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGNvbG9yOiByZ2JhKDMzLDM2LDQ0LDAuNSk7XG4gICAgOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgSG92ZXIgPSBzdHlsZWQuaW1nYFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XG4gICAgOmhvdmVye1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGluZUJyZWFrID0gc3R5bGVkLmhyYFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNDByZW07XG4gICAgaGVpZ2h0OiA0MHJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDMzLDM2LDQ0LDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAzN3JlbTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDM1cmVtO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogNDByZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzI1cHgpIHtcbiAgICAgICAgd2lkdGg6IDM3LjUlO1xuICAgICAgICBoZWlnaHQ6IDM1cmVtO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAzNy41JTtcbiAgICAgICAgaGVpZ2h0OiAzMHJlbTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4RW5kID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNXJlbTtcbiAgICBsZWZ0OiAyOXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLnJlZH07XG4gICAgcGFkZGluZzogLjc1cmVtO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIDpob3ZlcntcbiAgICAgICAgY29sb3I6IHJnYmEoMzMsMzYsNDQsMC41KTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xuICAgICAgICB0b3A6IDEzLjVyZW07XG4gICAgICAgIGxlZnQ6IDI1cmVtO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XG4gICAgICAgIHRvcDogMTMuNXJlbTtcbiAgICAgICAgbGVmdDogMjMuNXJlbTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAgICAgICB0b3A6IDM1JTtcbiAgICAgICAgbGVmdDogNjclO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgICAgIHRvcDogMzUlO1xuICAgICAgICBsZWZ0OiA2NSU7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgdG9wOiAzNSU7XG4gICAgICAgIGxlZnQ6IDYxJTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gc3R5bGVkLmltZ2BcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiAtNXB4IDAgMCAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbmBcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEluID0gc3R5bGVkLmlucHV0YFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWF4LXdpZHRoOjEwcmVtO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbjogMCAycmVtO1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dGlvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuYFxuIl19