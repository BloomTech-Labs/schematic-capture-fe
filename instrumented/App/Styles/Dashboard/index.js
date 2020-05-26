function cov_jpjwrdm39() {
  var path = "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Dashboard\\index.js";
  var hash = "10057cbec7d47c0f56d5f33ac947110373f938f1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Styles\\Dashboard\\index.js",
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
    hash: "10057cbec7d47c0f56d5f33ac947110373f938f1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jpjwrdm39 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jpjwrdm39();
import styled from 'styled-components';
import { color, font } from '../index';
import { Link } from 'react-router-dom';
export const Title = (cov_jpjwrdm39().s[0]++, styled.h1`
    color: ${color.blue};
    font-weight: bold;
    font-size: ${font.normal};
`);
export const Seperate = (cov_jpjwrdm39().s[1]++, styled.div`
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
export const Seperate2 = (cov_jpjwrdm39().s[2]++, styled.div`
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
export const RightSide = (cov_jpjwrdm39().s[3]++, styled.div`
    max-width:50rem;
    display: flex;
    justify-content: space-between;
    max-height: 2.5rem;
`);
export const Greeting = (cov_jpjwrdm39().s[4]++, styled.button`
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
export const Section = (cov_jpjwrdm39().s[5]++, styled.section`
    margin: 0 25rem;
    @media (max-width: 1500px) {
        margin: 0 20rem 
    }
    @media (max-width: 1200px) {
        margin: 0 16rem 
    }
`);
export const Clientsh2 = (cov_jpjwrdm39().s[6]++, styled.h2`
    color: ${color.blue};
    font-size: ${font.normal};
`);
export const ClientCont = (cov_jpjwrdm39().s[7]++, styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1500px) {
    justify-content: space-around;
    }
`);
export const ClientBox = (cov_jpjwrdm39().s[8]++, styled(Link)`
    text-align: center;
    font-size: 36px;
    color: rgba(33,36,44,0.5);
    :hover{
        text-decoration: none;
    }
`);
export const Hover = (cov_jpjwrdm39().s[9]++, styled.img`
    max-height: 2rem;
    :hover{
        opacity: 0.5;
    }
`);
export const LineBreak = (cov_jpjwrdm39().s[10]++, styled.hr`
    margin-bottom: 5rem;
`);
export const Spacer = (cov_jpjwrdm39().s[11]++, styled.div`
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
export const FlexEnd = (cov_jpjwrdm39().s[12]++, styled.button`
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
export const Profile = (cov_jpjwrdm39().s[13]++, styled.img`
    width: 24px;
    height: 24px;
    margin: -5px 0 0 1rem;
    border-radius: 50%;
    border: 1px solid black;
`);
export const SearchIn = (cov_jpjwrdm39().s[14]++, styled.input`
    border-radius: 15px;
    max-width:10rem;
    text-align:center;
    margin: 0 2rem;
`);
export const Buttion = (cov_jpjwrdm39().s[15]++, styled.button`
    margin-right: 2rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9yIiwiZm9udCIsIkxpbmsiLCJUaXRsZSIsImgxIiwiYmx1ZSIsIm5vcm1hbCIsIlNlcGVyYXRlIiwiZGl2IiwiU2VwZXJhdGUyIiwiUmlnaHRTaWRlIiwiR3JlZXRpbmciLCJidXR0b24iLCJibGFjayIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiQ2xpZW50c2gyIiwiaDIiLCJDbGllbnRDb250IiwiQ2xpZW50Qm94IiwiSG92ZXIiLCJpbWciLCJMaW5lQnJlYWsiLCJociIsIlNwYWNlciIsIkZsZXhFbmQiLCJyZWQiLCJzbWFsbCIsIlByb2ZpbGUiLCJTZWFyY2hJbiIsImlucHV0IiwiQnV0dGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLFFBQTRCLFVBQTVCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFFQSxPQUFPLE1BQU1DLEtBQUssNEJBQUdKLE1BQU0sQ0FBQ0ssRUFBRzthQUNsQkosS0FBSyxDQUFDSyxJQUFLOztpQkFFUEosSUFBSSxDQUFDSyxNQUFPO0NBSFgsQ0FBWDtBQU1QLE9BQU8sTUFBTUMsUUFBUSw0QkFBR1IsTUFBTSxDQUFDUyxHQUFJOzs7Ozs7Ozs7O0NBQWQsQ0FBZDtBQVlQLE9BQU8sTUFBTUMsU0FBUyw0QkFBR1YsTUFBTSxDQUFDUyxHQUFJOzs7Ozs7Ozs7O0NBQWQsQ0FBZjtBQVlQLE9BQU8sTUFBTUUsU0FBUyw0QkFBR1gsTUFBTSxDQUFDUyxHQUFJOzs7OztDQUFkLENBQWY7QUFPUCxPQUFPLE1BQU1HLFFBQVEsNEJBQUdaLE1BQU0sQ0FBQ2EsTUFBTzs7YUFFekJaLEtBQUssQ0FBQ2EsS0FBTTtpQkFDUlosSUFBSSxDQUFDSyxNQUFPOzs7Ozs7Ozs7Ozs7O0NBSFIsQ0FBZDtBQWtCUCxPQUFPLE1BQU1RLE9BQU8sNEJBQUdmLE1BQU0sQ0FBQ2dCLE9BQVE7Ozs7Ozs7O0NBQWxCLENBQWI7QUFVUCxPQUFPLE1BQU1DLFNBQVMsNEJBQUdqQixNQUFNLENBQUNrQixFQUFHO2FBQ3RCakIsS0FBSyxDQUFDSyxJQUFLO2lCQUNQSixJQUFJLENBQUNLLE1BQU87Q0FGUCxDQUFmO0FBS1AsT0FBTyxNQUFNWSxVQUFVLDRCQUFHbkIsTUFBTSxDQUFDUyxHQUFJOzs7Ozs7O0NBQWQsQ0FBaEI7QUFTUCxPQUFPLE1BQU1XLFNBQVMsNEJBQUdwQixNQUFNLENBQUNHLElBQUQsQ0FBTzs7Ozs7OztDQUFoQixDQUFmO0FBU1AsT0FBTyxNQUFNa0IsS0FBSyw0QkFBR3JCLE1BQU0sQ0FBQ3NCLEdBQUk7Ozs7O0NBQWQsQ0FBWDtBQU9QLE9BQU8sTUFBTUMsU0FBUyw2QkFBR3ZCLE1BQU0sQ0FBQ3dCLEVBQUc7O0NBQWIsQ0FBZjtBQUlQLE9BQU8sTUFBTUMsTUFBTSw2QkFBR3pCLE1BQU0sQ0FBQ1MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBZCxDQUFaO0FBK0JQLE9BQU8sTUFBTWlCLE9BQU8sNkJBQUcxQixNQUFNLENBQUNhLE1BQU87Ozs7d0JBSWJaLEtBQUssQ0FBQzBCLEdBQUk7OztpQkFHakJ6QixJQUFJLENBQUMwQixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBUFIsQ0FBYjtBQXFDUCxPQUFPLE1BQU1DLE9BQU8sNkJBQUc3QixNQUFNLENBQUNzQixHQUFJOzs7Ozs7Q0FBZCxDQUFiO0FBUVAsT0FBTyxNQUFNUSxRQUFRLDZCQUFHOUIsTUFBTSxDQUFDK0IsS0FBTTs7Ozs7Q0FBaEIsQ0FBZDtBQU9QLE9BQU8sTUFBTUMsT0FBTyw2QkFBR2hDLE1BQU0sQ0FBQ2EsTUFBTzs7Q0FBakIsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNvbG9yLCBmb250IH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gICAgY29sb3I6ICR7Y29sb3IuYmx1ZX07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VwZXJhdGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogNXJlbSAyNXJlbSAxMnJlbSAyNXJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDVyZW0gMjByZW0gMTJyZW0gMjByZW1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDVyZW0gMTZyZW0gMTJyZW0gMTZyZW1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlcGVyYXRlMiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiA1cmVtIDI1cmVtIDRyZW0gMjVyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIDIwcmVtIDEycmVtIDIwcmVtXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIDE2cmVtIDEycmVtIDE2cmVtXHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBSaWdodFNpZGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOjUwcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyZWV0aW5nID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAke2NvbG9yLmJsYWNrfTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250Lm5vcm1hbH07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDAgMjVyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcmVtIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNnJlbSBcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudHNoMiA9IHN0eWxlZC5oMmBcclxuICAgIGNvbG9yOiAke2NvbG9yLmJsdWV9O1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnQubm9ybWFsfTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudEJveCA9IHN0eWxlZChMaW5rKWBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiByZ2JhKDMzLDM2LDQ0LDAuNSk7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSG92ZXIgPSBzdHlsZWQuaW1nYFxyXG4gICAgbWF4LWhlaWdodDogMnJlbTtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lQnJlYWsgPSBzdHlsZWQuaHJgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgzMywzNiw0NCwwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDM3cmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogNDByZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMyNXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM3LjUlO1xyXG4gICAgICAgIGhlaWdodDogMzVyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM3LjUlO1xyXG4gICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGbGV4RW5kID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVyZW07XHJcbiAgICBsZWZ0OiAyOXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IucmVkfTtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250LnNtYWxsfTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmdiYSgzMywzNiw0NCwwLjUpO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgICAgIHRvcDogMTMuNXJlbTtcclxuICAgICAgICBsZWZ0OiAyNXJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgICAgICB0b3A6IDEzLjVyZW07XHJcbiAgICAgICAgbGVmdDogMjMuNXJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICBsZWZ0OiA2NyU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgbGVmdDogNjUlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGxlZnQ6IDYxJTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGUgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IC01cHggMCAwIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEluID0gc3R5bGVkLmlucHV0YFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDoxMHJlbTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDJyZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0aW9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuYFxyXG4iXX0=