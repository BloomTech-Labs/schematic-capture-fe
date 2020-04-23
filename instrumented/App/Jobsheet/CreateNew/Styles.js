function cov_ln4rb9dkb() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Jobsheet/CreateNew/Styles.js";
  var hash = "889f9fa37a928a9bef5097cf7e487f0f01c8ba79";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Jobsheet/CreateNew/Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 20,
          column: 26
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 24,
          column: 25
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "4": {
        start: {
          line: 33,
          column: 32
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "5": {
        start: {
          line: 48,
          column: 28
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "6": {
        start: {
          line: 55,
          column: 26
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "7": {
        start: {
          line: 60,
          column: 27
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "8": {
        start: {
          line: 65,
          column: 23
        },
        end: {
          line: 70,
          column: 1
        }
      },
      "9": {
        start: {
          line: 72,
          column: 19
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "10": {
        start: {
          line: 79,
          column: 23
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "11": {
        start: {
          line: 84,
          column: 22
        },
        end: {
          line: 90,
          column: 1
        }
      },
      "12": {
        start: {
          line: 93,
          column: 21
        },
        end: {
          line: 101,
          column: 1
        }
      },
      "13": {
        start: {
          line: 103,
          column: 24
        },
        end: {
          line: 108,
          column: 1
        }
      },
      "14": {
        start: {
          line: 110,
          column: 27
        },
        end: {
          line: 114,
          column: 1
        }
      },
      "15": {
        start: {
          line: 116,
          column: 24
        },
        end: {
          line: 123,
          column: 1
        }
      },
      "16": {
        start: {
          line: 125,
          column: 28
        },
        end: {
          line: 133,
          column: 1
        }
      },
      "17": {
        start: {
          line: 135,
          column: 25
        },
        end: {
          line: 142,
          column: 1
        }
      },
      "18": {
        start: {
          line: 144,
          column: 24
        },
        end: {
          line: 150,
          column: 1
        }
      },
      "19": {
        start: {
          line: 152,
          column: 25
        },
        end: {
          line: 157,
          column: 1
        }
      },
      "20": {
        start: {
          line: 159,
          column: 26
        },
        end: {
          line: 166,
          column: 1
        }
      },
      "21": {
        start: {
          line: 168,
          column: 22
        },
        end: {
          line: 170,
          column: 1
        }
      },
      "22": {
        start: {
          line: 172,
          column: 22
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
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "889f9fa37a928a9bef5097cf7e487f0f01c8ba79"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_ln4rb9dkb = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_ln4rb9dkb();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font, color } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";
export const Header = (cov_ln4rb9dkb().s[0]++, styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`);
export const PageName = (cov_ln4rb9dkb().s[1]++, styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`);
export const StyledLink = (cov_ln4rb9dkb().s[2]++, styled(Link)`
  ${buttonStyle}
`);
export const Container = (cov_ln4rb9dkb().s[3]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`);
export const PreviewContainer = (cov_ln4rb9dkb().s[4]++, styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  -webkit-box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.5);
  height: 50vh;
  width: 75vw;
  min-width: 600px;
  border: 1px black solid;
  background: rgb(213, 216, 220);
  overflow: auto;
`);
export const PreviewTable = (cov_ln4rb9dkb().s[5]++, styled.table`
  display: table;
  white-space: nowrap;
  margin: auto;
  width: auto;
`);
export const TableItems = (cov_ln4rb9dkb().s[6]++, styled.tr`
  background: ghostwhite;
  color: black;
`);
export const TableHeader = (cov_ln4rb9dkb().s[7]++, styled.th`
  background: ghostwhite;
  font-size: 12px;
`);
export const PreLoad = (cov_ln4rb9dkb().s[8]++, styled.div`
  color: black;
  @media (max-width: 850px) {
    transform: scale(0.5);
  }
`);
export const Top = (cov_ln4rb9dkb().s[9]++, styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`);
export const TopLeft = (cov_ln4rb9dkb().s[10]++, styled.div`
  font-size: 16px;
  padding-bottom: 25%;
`);
export const Inputs = (cov_ln4rb9dkb().s[11]++, styled.div`
display: flex;
margin: 0.3;
flex-wrap: wrap;
justify-content: space-between;

`);
export const Input = (cov_ln4rb9dkb().s[12]++, styled.input`
font-size: 26px;
background: transparent;
outline: 0;
color: white;
bottom-padding: 12px;
border-radius: 8px;
margin:5px
`);
export const TopRight = (cov_ln4rb9dkb().s[13]++, styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
`);
export const TopTopRight = (cov_ln4rb9dkb().s[14]++, styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`);
export const NewBlank = (cov_ln4rb9dkb().s[15]++, styled.button`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
  font-weight: bold;
`);
export const SubmitButton = (cov_ln4rb9dkb().s[16]++, styled.button`
  border: 1px black solid;
  border-radius: 4px;
  background: ${color.primary};
  width: 200px;
  height: 40px;
  font-weight: bold;
  right: 320px
`);
export const ImportCsv = (cov_ln4rb9dkb().s[17]++, styled.label`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
  display: block;
`);
export const AddSchem = (cov_ln4rb9dkb().s[18]++, styled.label`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
`);
export const CenterDiv = (cov_ln4rb9dkb().s[19]++, styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`);
export const ImportText = (cov_ln4rb9dkb().s[20]++, styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  line-height: 2.4285;
`);
export const OrSpan = (cov_ln4rb9dkb().s[21]++, styled.span`
  font-size: 18px;
`);
export const LineOr = (cov_ln4rb9dkb().s[22]++, styled.div`
  overflow: hidden;
  text-align: center;
  font-size: 26px;
  &:before,
  &:after {
    background-color: #eaeaea;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    top: 1.15em;
    right: 1em;
    margin-left: -50%;
  }
  &:after {
    bottom: 2.8em;
    left: 1em;
    margin-right: -50%;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiZm9udCIsImNvbG9yIiwiYnV0dG9uU3R5bGUiLCJIZWFkZXIiLCJkaXYiLCJQYWdlTmFtZSIsImgxIiwic2l6ZSIsImJvbGQiLCJTdHlsZWRMaW5rIiwiQ29udGFpbmVyIiwiUHJldmlld0NvbnRhaW5lciIsIlByZXZpZXdUYWJsZSIsInRhYmxlIiwiVGFibGVJdGVtcyIsInRyIiwiVGFibGVIZWFkZXIiLCJ0aCIsIlByZUxvYWQiLCJUb3AiLCJUb3BMZWZ0IiwiSW5wdXRzIiwiSW5wdXQiLCJpbnB1dCIsIlRvcFJpZ2h0IiwiVG9wVG9wUmlnaHQiLCJOZXdCbGFuayIsImJ1dHRvbiIsIlN1Ym1pdEJ1dHRvbiIsInByaW1hcnkiLCJJbXBvcnRDc3YiLCJsYWJlbCIsIkFkZFNjaGVtIiwiQ2VudGVyRGl2IiwiSW1wb3J0VGV4dCIsInAiLCJPclNwYW4iLCJzcGFuIiwiTGluZU9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFFQSxTQUFTQyxJQUFULEVBQWVDLEtBQWYsUUFBNEIsd0JBQTVCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpREFBNUI7QUFFQSxPQUFPLE1BQU1DLE1BQU0sNEJBQUdMLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFaO0FBT1AsT0FBTyxNQUFNQyxRQUFRLDRCQUFHUCxNQUFNLENBQUNRLEVBQUc7SUFDOUJOLElBQUksQ0FBQ08sSUFBTCxDQUFVLENBQVYsQ0FBYTtJQUNiUCxJQUFJLENBQUNRLElBQUs7O0NBRk8sQ0FBZDtBQU1QLE9BQU8sTUFBTUMsVUFBVSw0QkFBR1gsTUFBTSxDQUFDQyxJQUFELENBQU87SUFDbkNHLFdBQVk7Q0FETyxDQUFoQjtBQUlQLE9BQU8sTUFBTVEsU0FBUyw0QkFBR1osTUFBTSxDQUFDTSxHQUFJOzs7Ozs7O0NBQWQsQ0FBZjtBQVNQLE9BQU8sTUFBTU8sZ0JBQWdCLDRCQUFHYixNQUFNLENBQUNNLEdBQUk7Ozs7Ozs7Ozs7Ozs7Q0FBZCxDQUF0QjtBQWVQLE9BQU8sTUFBTVEsWUFBWSw0QkFBR2QsTUFBTSxDQUFDZSxLQUFNOzs7OztDQUFoQixDQUFsQjtBQU9QLE9BQU8sTUFBTUMsVUFBVSw0QkFBR2hCLE1BQU0sQ0FBQ2lCLEVBQUc7OztDQUFiLENBQWhCO0FBS1AsT0FBTyxNQUFNQyxXQUFXLDRCQUFHbEIsTUFBTSxDQUFDbUIsRUFBRzs7O0NBQWIsQ0FBakI7QUFLUCxPQUFPLE1BQU1DLE9BQU8sNEJBQUdwQixNQUFNLENBQUNNLEdBQUk7Ozs7O0NBQWQsQ0FBYjtBQU9QLE9BQU8sTUFBTWUsR0FBRyw0QkFBR3JCLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFUO0FBT1AsT0FBTyxNQUFNZ0IsT0FBTyw2QkFBR3RCLE1BQU0sQ0FBQ00sR0FBSTs7O0NBQWQsQ0FBYjtBQUtQLE9BQU8sTUFBTWlCLE1BQU0sNkJBQUd2QixNQUFNLENBQUNNLEdBQUk7Ozs7OztDQUFkLENBQVo7QUFTUCxPQUFPLE1BQU1rQixLQUFLLDZCQUFHeEIsTUFBTSxDQUFDeUIsS0FBTTs7Ozs7Ozs7Q0FBaEIsQ0FBWDtBQVVQLE9BQU8sTUFBTUMsUUFBUSw2QkFBRzFCLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFkO0FBT1AsT0FBTyxNQUFNcUIsV0FBVyw2QkFBRzNCLE1BQU0sQ0FBQ00sR0FBSTs7OztDQUFkLENBQWpCO0FBTVAsT0FBTyxNQUFNc0IsUUFBUSw2QkFBRzVCLE1BQU0sQ0FBQzZCLE1BQU87Ozs7Ozs7Q0FBakIsQ0FBZDtBQVNQLE9BQU8sTUFBTUMsWUFBWSw2QkFBRzlCLE1BQU0sQ0FBQzZCLE1BQU87OztnQkFHMUIxQixLQUFLLENBQUM0QixPQUFROzs7OztDQUhMLENBQWxCO0FBVVAsT0FBTyxNQUFNQyxTQUFTLDZCQUFHaEMsTUFBTSxDQUFDaUMsS0FBTTs7Ozs7OztDQUFoQixDQUFmO0FBU1AsT0FBTyxNQUFNQyxRQUFRLDZCQUFHbEMsTUFBTSxDQUFDaUMsS0FBTTs7Ozs7O0NBQWhCLENBQWQ7QUFRUCxPQUFPLE1BQU1FLFNBQVMsNkJBQUduQyxNQUFNLENBQUNNLEdBQUk7Ozs7O0NBQWQsQ0FBZjtBQU9QLE9BQU8sTUFBTThCLFVBQVUsNkJBQUdwQyxNQUFNLENBQUNxQyxDQUFFOzs7Ozs7O0NBQVosQ0FBaEI7QUFTUCxPQUFPLE1BQU1DLE1BQU0sNkJBQUd0QyxNQUFNLENBQUN1QyxJQUFLOztDQUFmLENBQVo7QUFJUCxPQUFPLE1BQU1DLE1BQU0sNkJBQUd4QyxNQUFNLENBQUNNLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFkLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7IGZvbnQsIGNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXNcIjtcbmltcG9ydCB7IGJ1dHRvblN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1N0eWxlcy9CdXR0b24tU3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUGFnZU5hbWUgPSBzdHlsZWQuaDFgXG4gICR7Zm9udC5zaXplKDMpfVxuICAke2ZvbnQuYm9sZH1cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbmA7XG5cbmV4cG9ydCBjb25zdCBQcmV2aWV3Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDhweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDVweCA4cHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiA3NXZ3O1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgYmFja2dyb3VuZDogcmdiKDIxMywgMjE2LCAyMjApO1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBQcmV2aWV3VGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRhYmxlSXRlbXMgPSBzdHlsZWQudHJgXG4gIGJhY2tncm91bmQ6IGdob3N0d2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IHN0eWxlZC50aGBcbiAgYmFja2dyb3VuZDogZ2hvc3R3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByZUxvYWQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogYmxhY2s7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvcCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA3NXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgVG9wTGVmdCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dHMgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbm1hcmdpbjogMC4zO1xuZmxleC13cmFwOiB3cmFwO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbmZvbnQtc2l6ZTogMjZweDtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xub3V0bGluZTogMDtcbmNvbG9yOiB3aGl0ZTtcbmJvdHRvbS1wYWRkaW5nOiAxMnB4O1xuYm9yZGVyLXJhZGl1czogOHB4O1xubWFyZ2luOjVweFxuYDtcblxuZXhwb3J0IGNvbnN0IFRvcFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUb3BUb3BSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdCbGFuayA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogJHtjb2xvci5wcmltYXJ5fTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICByaWdodDogMzIwcHhcbmA7XG5cbmV4cG9ydCBjb25zdCBJbXBvcnRDc3YgPSBzdHlsZWQubGFiZWxgXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgQWRkU2NoZW0gPSBzdHlsZWQubGFiZWxgXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDZW50ZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbXBvcnRUZXh0ID0gc3R5bGVkLnBgXG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyLjQyODU7XG5gO1xuXG5leHBvcnQgY29uc3QgT3JTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMThweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5lT3IgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgdG9wOiAxLjE1ZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBib3R0b206IDIuOGVtO1xuICAgIGxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gIH1cbmA7Il19