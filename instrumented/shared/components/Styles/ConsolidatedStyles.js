function cov_jzv3pugjy() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\ConsolidatedStyles.js";
  var hash = "e950c1b6f649b5e33b5568d892fb0e3e3302fa45";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\ConsolidatedStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "2": {
        start: {
          line: 15,
          column: 31
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 24,
          column: 31
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "4": {
        start: {
          line: 31,
          column: 24
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "5": {
        start: {
          line: 38,
          column: 22
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "6": {
        start: {
          line: 46,
          column: 30
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "7": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 52,
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
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e950c1b6f649b5e33b5568d892fb0e3e3302fa45"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jzv3pugjy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jzv3pugjy();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font } from '../../styles';
export const Main = (cov_jzv3pugjy().s[0]++, styled.main`
  padding: 1rem 10rem;
`);
export const CompleteBadge = (cov_jzv3pugjy().s[1]++, styled.div`
  opacity: 0.5
  width: 10rem;
`);
export const IncompleteBadge = (cov_jzv3pugjy().s[2]++, styled.div`
  background: #FA5656;
  border-radius: 40px;
  color: #FFFFFF;
  width: 35%;
  display: flex;
  justify-content: center;
`);
export const ProjectsContain = (cov_jzv3pugjy().s[3]++, styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
`);
export const PageName = (cov_jzv3pugjy().s[4]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin: 0 auto 4rem auto;
  color: #3079BC;
`);
export const Header = (cov_jzv3pugjy().s[5]++, styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`);
export const ProjectsHeader = (cov_jzv3pugjy().s[6]++, styled.div`

`);
export const ProjectLink = (cov_jzv3pugjy().s[7]++, styled(Link)`
  // border: 1px solid red;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnNvbGlkYXRlZFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiZm9udCIsIk1haW4iLCJtYWluIiwiQ29tcGxldGVCYWRnZSIsImRpdiIsIkluY29tcGxldGVCYWRnZSIsIlByb2plY3RzQ29udGFpbiIsIlBhZ2VOYW1lIiwiaDEiLCJzaXplIiwiYm9sZCIsIkhlYWRlciIsIlByb2plY3RzSGVhZGVyIiwiUHJvamVjdExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUVBLE9BQU8sTUFBTUMsSUFBSSw0QkFBR0gsTUFBTSxDQUFDSSxJQUFLOztDQUFmLENBQVY7QUFJUCxPQUFPLE1BQU1DLGFBQWEsNEJBQUdMLE1BQU0sQ0FBQ00sR0FBSTs7O0NBQWQsQ0FBbkI7QUFLUCxPQUFPLE1BQU1DLGVBQWUsNEJBQUdQLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7OztDQUFkLENBQXJCO0FBU1AsT0FBTyxNQUFNRSxlQUFlLDRCQUFHUixNQUFNLENBQUNNLEdBQUk7Ozs7O0NBQWQsQ0FBckI7QUFPUCxPQUFPLE1BQU1HLFFBQVEsNEJBQUdULE1BQU0sQ0FBQ1UsRUFBRztJQUM5QlIsSUFBSSxDQUFDUyxJQUFMLENBQVUsQ0FBVixDQUFhO0lBQ2JULElBQUksQ0FBQ1UsSUFBSzs7O0NBRk8sQ0FBZDtBQU9QLE9BQU8sTUFBTUMsTUFBTSw0QkFBR2IsTUFBTSxDQUFDTSxHQUFJOzs7Ozs7Q0FBZCxDQUFaO0FBUVAsT0FBTyxNQUFNUSxjQUFjLDRCQUFHZCxNQUFNLENBQUNNLEdBQUk7O0NBQWQsQ0FBcEI7QUFJUCxPQUFPLE1BQU1TLFdBQVcsNEJBQUdmLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOztDQUFoQixDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgZm9udCB9IGZyb20gJy4uLy4uL3N0eWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLm1haW5gXHJcbiAgcGFkZGluZzogMXJlbSAxMHJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wbGV0ZUJhZGdlID0gc3R5bGVkLmRpdmBcclxuICBvcGFjaXR5OiAwLjVcclxuICB3aWR0aDogMTByZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5jb21wbGV0ZUJhZGdlID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjRkE1NjU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzQ29udGFpbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VOYW1lID0gc3R5bGVkLmgxYFxyXG4gICR7Zm9udC5zaXplKDMpfVxyXG4gICR7Zm9udC5ib2xkfVxyXG4gIG1hcmdpbjogMCBhdXRvIDRyZW0gYXV0bztcclxuICBjb2xvcjogIzMwNzlCQztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuYDtcclxuIl19