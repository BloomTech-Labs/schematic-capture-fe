function cov_1uv0nq9vm5() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Dashboard\\index.js";
  var hash = "e6c4279db30a004175af1133622eae7f06a3850e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Dashboard\\index.js",
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
          line: 41,
          column: 28
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "5": {
        start: {
          line: 58,
          column: 24
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "6": {
        start: {
          line: 76,
          column: 23
        },
        end: {
          line: 84,
          column: 1
        }
      },
      "7": {
        start: {
          line: 86,
          column: 25
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "8": {
        start: {
          line: 91,
          column: 26
        },
        end: {
          line: 98,
          column: 1
        }
      },
      "9": {
        start: {
          line: 100,
          column: 25
        },
        end: {
          line: 107,
          column: 1
        }
      },
      "10": {
        start: {
          line: 109,
          column: 21
        },
        end: {
          line: 114,
          column: 1
        }
      },
      "11": {
        start: {
          line: 116,
          column: 25
        },
        end: {
          line: 118,
          column: 1
        }
      },
      "12": {
        start: {
          line: 120,
          column: 22
        },
        end: {
          line: 149,
          column: 1
        }
      },
      "13": {
        start: {
          line: 151,
          column: 23
        },
        end: {
          line: 186,
          column: 1
        }
      },
      "14": {
        start: {
          line: 187,
          column: 24
        },
        end: {
          line: 222,
          column: 1
        }
      },
      "15": {
        start: {
          line: 224,
          column: 23
        },
        end: {
          line: 230,
          column: 1
        }
      },
      "16": {
        start: {
          line: 232,
          column: 24
        },
        end: {
          line: 237,
          column: 1
        }
      },
      "17": {
        start: {
          line: 239,
          column: 23
        },
        end: {
          line: 241,
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
      "17": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e6c4279db30a004175af1133622eae7f06a3850e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uv0nq9vm5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1uv0nq9vm5();
import styled from 'styled-components';
import { color, font } from '../index';
import { Link } from 'react-router-dom';
export const Title = (cov_1uv0nq9vm5().s[0]++, styled.h1`
    color: ${color.blue};
    font-weight: bold;
    font-size: ${font.normal};
`);
export const Seperate = (cov_1uv0nq9vm5().s[1]++, styled.div`
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
export const Seperate2 = (cov_1uv0nq9vm5().s[2]++, styled.div`
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
export const RightSide = (cov_1uv0nq9vm5().s[3]++, styled.div`
    max-width:50rem;
    display: flex;
    justify-content: space-between;
    max-height: 2.5rem;
`);
export const NewClientBtn = (cov_1uv0nq9vm5().s[4]++, styled(Link)`
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
export const Greeting = (cov_1uv0nq9vm5().s[5]++, styled.button`
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
export const Section = (cov_1uv0nq9vm5().s[6]++, styled.section`
    margin: 0 25rem;
    @media (max-width: 1500px) {
        margin: 0 20rem 
    }
    @media (max-width: 1200px) {
        margin: 0 16rem 
    }
`);
export const Clientsh2 = (cov_1uv0nq9vm5().s[7]++, styled.h2`
    color: ${color.blue};
    font-size: ${font.normal};
`);
export const ClientCont = (cov_1uv0nq9vm5().s[8]++, styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1500px) {
    justify-content: space-around;
    }
`);
export const ClientBox = (cov_1uv0nq9vm5().s[9]++, styled(Link)`
    text-align: center;
    font-size: 36px;
    color: rgba(33,36,44,0.5);
    :hover{
        text-decoration: none;
    }
`);
export const Hover = (cov_1uv0nq9vm5().s[10]++, styled.img`
    max-height: 2rem;
    :hover{
        opacity: 0.5;
    }
`);
export const LineBreak = (cov_1uv0nq9vm5().s[11]++, styled.hr`
    margin-bottom: 5rem;
`);
export const Spacer = (cov_1uv0nq9vm5().s[12]++, styled.div`
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
export const FlexEnd = (cov_1uv0nq9vm5().s[13]++, styled.button`
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
export const FlexEnd2 = (cov_1uv0nq9vm5().s[14]++, styled.button`
    position: relative;
    top: 15rem;
    left: 29rem;
    background-color: ${color.blue};
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
export const Profile = (cov_1uv0nq9vm5().s[15]++, styled.img`
    width: 24px;
    height: 24px;
    margin: -5px 0 0 1rem;
    border-radius: 50%;
    border: 1px solid black;
`);
export const SearchIn = (cov_1uv0nq9vm5().s[16]++, styled.input`
    border-radius: 15px;
    max-width:10rem;
    text-align:center;
    margin: 0 2rem;
`);
export const Buttion = (cov_1uv0nq9vm5().s[17]++, styled.button`
    margin-right: 2rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9yIiwiZm9udCIsIkxpbmsiLCJUaXRsZSIsImgxIiwiYmx1ZSIsIm5vcm1hbCIsIlNlcGVyYXRlIiwiZGl2IiwiU2VwZXJhdGUyIiwiUmlnaHRTaWRlIiwiTmV3Q2xpZW50QnRuIiwic21hbGwiLCJHcmVldGluZyIsImJ1dHRvbiIsImJsYWNrIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJDbGllbnRzaDIiLCJoMiIsIkNsaWVudENvbnQiLCJDbGllbnRCb3giLCJIb3ZlciIsImltZyIsIkxpbmVCcmVhayIsImhyIiwiU3BhY2VyIiwiRmxleEVuZCIsInJlZCIsIkZsZXhFbmQyIiwiUHJvZmlsZSIsIlNlYXJjaEluIiwiaW5wdXQiLCJCdXR0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLFFBQTRCLFVBQTVCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFFQSxPQUFPLE1BQU1DLEtBQUssNkJBQUdKLE1BQU0sQ0FBQ0ssRUFBRzthQUNsQkosS0FBSyxDQUFDSyxJQUFLOztpQkFFUEosSUFBSSxDQUFDSyxNQUFPO0NBSFgsQ0FBWDtBQU1QLE9BQU8sTUFBTUMsUUFBUSw2QkFBR1IsTUFBTSxDQUFDUyxHQUFJOzs7Ozs7Ozs7O0NBQWQsQ0FBZDtBQVlQLE9BQU8sTUFBTUMsU0FBUyw2QkFBR1YsTUFBTSxDQUFDUyxHQUFJOzs7Ozs7Ozs7O0NBQWQsQ0FBZjtBQVlQLE9BQU8sTUFBTUUsU0FBUyw2QkFBR1gsTUFBTSxDQUFDUyxHQUFJOzs7OztDQUFkLENBQWY7QUFNUCxPQUFPLE1BQU1HLFlBQVksNkJBQUdaLE1BQU0sQ0FBQ0csSUFBRCxDQUFPOztzQkFFbkJGLEtBQUssQ0FBQ0ssSUFBSzs7Ozs7O2VBTWxCSixJQUFJLENBQUNXLEtBQU07Ozs7Ozs7Q0FSRCxDQUFsQjtBQWlCUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdkLE1BQU0sQ0FBQ2UsTUFBTzs7YUFFekJkLEtBQUssQ0FBQ2UsS0FBTTtpQkFDUmQsSUFBSSxDQUFDSyxNQUFPOzs7Ozs7Ozs7Ozs7O0NBSFIsQ0FBZDtBQWtCUCxPQUFPLE1BQU1VLE9BQU8sNkJBQUdqQixNQUFNLENBQUNrQixPQUFROzs7Ozs7OztDQUFsQixDQUFiO0FBVVAsT0FBTyxNQUFNQyxTQUFTLDZCQUFHbkIsTUFBTSxDQUFDb0IsRUFBRzthQUN0Qm5CLEtBQUssQ0FBQ0ssSUFBSztpQkFDUEosSUFBSSxDQUFDSyxNQUFPO0NBRlAsQ0FBZjtBQUtQLE9BQU8sTUFBTWMsVUFBVSw2QkFBR3JCLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7OztDQUFkLENBQWhCO0FBU1AsT0FBTyxNQUFNYSxTQUFTLDZCQUFHdEIsTUFBTSxDQUFDRyxJQUFELENBQU87Ozs7Ozs7Q0FBaEIsQ0FBZjtBQVNQLE9BQU8sTUFBTW9CLEtBQUssOEJBQUd2QixNQUFNLENBQUN3QixHQUFJOzs7OztDQUFkLENBQVg7QUFPUCxPQUFPLE1BQU1DLFNBQVMsOEJBQUd6QixNQUFNLENBQUMwQixFQUFHOztDQUFiLENBQWY7QUFJUCxPQUFPLE1BQU1DLE1BQU0sOEJBQUczQixNQUFNLENBQUNTLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWQsQ0FBWjtBQStCUCxPQUFPLE1BQU1tQixPQUFPLDhCQUFHNUIsTUFBTSxDQUFDZSxNQUFPOzs7O3dCQUliZCxLQUFLLENBQUM0QixHQUFJOzs7aUJBR2pCM0IsSUFBSSxDQUFDVyxLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBUFIsQ0FBYjtBQW9DUCxPQUFPLE1BQU1pQixRQUFRLDhCQUFHOUIsTUFBTSxDQUFDZSxNQUFPOzs7O3dCQUlkZCxLQUFLLENBQUNLLElBQUs7OztpQkFHbEJKLElBQUksQ0FBQ1csS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQVBQLENBQWQ7QUFxQ1AsT0FBTyxNQUFNa0IsT0FBTyw4QkFBRy9CLE1BQU0sQ0FBQ3dCLEdBQUk7Ozs7OztDQUFkLENBQWI7QUFRUCxPQUFPLE1BQU1RLFFBQVEsOEJBQUdoQyxNQUFNLENBQUNpQyxLQUFNOzs7OztDQUFoQixDQUFkO0FBT1AsT0FBTyxNQUFNQyxPQUFPLDhCQUFHbEMsTUFBTSxDQUFDZSxNQUFPOztDQUFqQixDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnQubm9ybWFsfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXBlcmF0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiA1cmVtIDI1cmVtIDEycmVtIDI1cmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgIG1hcmdpbjogNXJlbSAyMHJlbSAxMnJlbSAyMHJlbVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIG1hcmdpbjogNXJlbSAxNnJlbSAxMnJlbSAxNnJlbVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VwZXJhdGUyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDVyZW0gMjVyZW0gNHJlbSAyNXJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDVyZW0gMjByZW0gMTJyZW0gMjByZW1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDVyZW0gMTZyZW0gMTJyZW0gMTZyZW1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6NTByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWF4LWhlaWdodDogMi41cmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBOZXdDbGllbnRCdG4gPSBzdHlsZWQoTGluaylgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGZvbnQtc2l6ZTogJHtmb250LnNtYWxsfTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgzMywgMzYsIDQ0LCAwLjYpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmVldGluZyA9IHN0eWxlZC5idXR0b25gXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHtjb2xvci5ibGFja307XHJcbiAgICBmb250LXNpemU6ICR7Zm9udC5ub3JtYWx9O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgbWFyZ2luOiAwIDI1cmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHJlbSBcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDAgMTZyZW0gXHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRzaDIgPSBzdHlsZWQuaDJgXHJcbiAgICBjb2xvcjogJHtjb2xvci5ibHVlfTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb250ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRCb3ggPSBzdHlsZWQoTGluaylgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgzMywzNiw0NCwwLjUpO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEhvdmVyID0gc3R5bGVkLmltZ2BcclxuICAgIG1heC1oZWlnaHQ6IDJyZW07XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGluZUJyZWFrID0gc3R5bGVkLmhyYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgaGVpZ2h0OiA0MHJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzMsMzYsNDQsMC4xKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3JlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMzVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMjVweCkge1xyXG4gICAgICAgIHdpZHRoOiAzNy41JTtcclxuICAgICAgICBoZWlnaHQ6IDM1cmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzNy41JTtcclxuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRmxleEVuZCA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cmVtO1xyXG4gICAgbGVmdDogMjlyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLnJlZH07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzMsMzYsNDQsMC41KTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcclxuICAgICAgICB0b3A6IDEzLjVyZW07XHJcbiAgICAgICAgbGVmdDogMjVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgICAgICAgdG9wOiAxMy41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTY1MHB4KSB7XHJcbiAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgbGVmdDogNjclO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGxlZnQ6IDY1JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICBsZWZ0OiA2MSU7XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEZsZXhFbmQyID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVyZW07XHJcbiAgICBsZWZ0OiAyOXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzMsMzYsNDQsMC41KTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcclxuICAgICAgICB0b3A6IDEzLjVyZW07XHJcbiAgICAgICAgbGVmdDogMjVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgICAgICAgdG9wOiAxMy41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDIzLjVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTY1MHB4KSB7XHJcbiAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgbGVmdDogNjclO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGxlZnQ6IDY1JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICBsZWZ0OiA2MSU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogLTVweCAwIDAgMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSW4gPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOjEwcmVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRpb24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG5gXHJcbiJdfQ==