function cov_2j3dc5natq() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectBoardStyles.js";
  var hash = "e7d5ae9f101ae8d3c592448471176440e37a2fbb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\Projects\\projectBoardStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 26
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "3": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "4": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "5": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "6": {
        start: {
          line: 40,
          column: 27
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "7": {
        start: {
          line: 47,
          column: 27
        },
        end: {
          line: 54,
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
    hash: "e7d5ae9f101ae8d3c592448471176440e37a2fbb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2j3dc5natq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2j3dc5natq();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
import Input from "../../../shared/components/Components/Input";
export const Header = (cov_2j3dc5natq().s[0]++, styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_2j3dc5natq().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`);
export const StyledLink = (cov_2j3dc5natq().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const StyledInput = (cov_2j3dc5natq().s[3]++, styled(Input)`
  margin-right: 1rem;
`);
export const Main = (cov_2j3dc5natq().s[4]++, styled.main`
  padding: 20px 0 0 80px;
`);
export const Section = (cov_2j3dc5natq().s[5]++, styled.section`
  margin-top: 3rem;
`);
export const SectionName = (cov_2j3dc5natq().s[6]++, styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`);
export const StyledLink2 = (cov_2j3dc5natq().s[7]++, styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RCb2FyZFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiZm9udCIsImNvbG9yIiwiYnV0dG9uU3R5bGUiLCJJbnB1dCIsIkhlYWRlciIsImRpdiIsIlBhZ2VOYW1lIiwiaDEiLCJzaXplIiwiYm9sZCIsIlN0eWxlZExpbmsiLCJTdHlsZWRJbnB1dCIsIk1haW4iLCJtYWluIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uTmFtZSIsImgyIiwiZ3JheTIwMCIsIlN0eWxlZExpbmsyIiwiYm9yZGVyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FBU0MsSUFBVCxFQUFlQyxLQUFmLFFBQTRCLHdCQUE1QjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaURBQTVCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQiw2Q0FBbEI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNkJBQUdOLE1BQU0sQ0FBQ08sR0FBSTs7Ozs7Q0FBZCxDQUFaO0FBT1AsT0FBTyxNQUFNQyxRQUFRLDZCQUFHUixNQUFNLENBQUNTLEVBQUc7SUFDOUJQLElBQUksQ0FBQ1EsSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiUixJQUFJLENBQUNTLElBQUs7Ozs7OztDQUZPLENBQWQ7QUFVUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdaLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0lBQ25DRyxXQUFZO0NBRE8sQ0FBaEI7QUFJUCxPQUFPLE1BQU1TLFdBQVcsNkJBQUdiLE1BQU0sQ0FBQ0ssS0FBRCxDQUFROztDQUFqQixDQUFqQjtBQUdQLE9BQU8sTUFBTVMsSUFBSSw2QkFBR2QsTUFBTSxDQUFDZSxJQUFLOztDQUFmLENBQVY7QUFJUCxPQUFPLE1BQU1DLE9BQU8sNkJBQUdoQixNQUFNLENBQUNpQixPQUFROztDQUFsQixDQUFiO0FBSVAsT0FBTyxNQUFNQyxXQUFXLDZCQUFHbEIsTUFBTSxDQUFDbUIsRUFBRztJQUNqQ2pCLElBQUksQ0FBQ1EsSUFBTCxDQUFVLEdBQVYsQ0FBZTtJQUNmUixJQUFJLENBQUNTLElBQUs7V0FDSFIsS0FBSyxDQUFDaUIsT0FBUTs7Q0FIRCxDQUFqQjtBQU9QLE9BQU8sTUFBTUMsV0FBVyw2QkFBR3JCLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOzs7NkJBR1hFLEtBQUssQ0FBQ21CLFdBQVk7Ozs7Q0FIdkIsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IGZvbnQsIGNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXNcIjtcclxuaW1wb3J0IHsgYnV0dG9uU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvU3R5bGVzL0J1dHRvbi1TdHlsZXNcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9Db21wb25lbnRzL0lucHV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZU5hbWUgPSBzdHlsZWQuaDFgXHJcbiAgJHtmb250LnNpemUoMyl9XHJcbiAgJHtmb250LmJvbGR9XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gICR7YnV0dG9uU3R5bGV9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcclxuICBwYWRkaW5nOiAyMHB4IDAgMCA4MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25OYW1lID0gc3R5bGVkLmgyYFxyXG4gICR7Zm9udC5zaXplKDEuNSl9XHJcbiAgJHtmb250LmJvbGR9XHJcbiAgY29sb3I6ICR7Y29sb3IuZ3JheTIwMH07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rMiA9IHN0eWxlZChMaW5rKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIH1cclxuYDtcclxuIl19