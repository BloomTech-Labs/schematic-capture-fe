function cov_1k6i2qi6m3() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Invite-Styles.js";
  var hash = "c8f1cf0fa3c14c8ff54e5c96ea20590f76b6fe85";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Invite-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 31
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 26
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "2": {
        start: {
          line: 47,
          column: 28
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "3": {
        start: {
          line: 66,
          column: 27
        },
        end: {
          line: 72,
          column: 1
        }
      },
      "4": {
        start: {
          line: 74,
          column: 31
        },
        end: {
          line: 74,
          column: 43
        }
      },
      "5": {
        start: {
          line: 76,
          column: 27
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "6": {
        start: {
          line: 81,
          column: 26
        },
        end: {
          line: 83,
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
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8f1cf0fa3c14c8ff54e5c96ea20590f76b6fe85"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1k6i2qi6m3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1k6i2qi6m3();
import styled from "styled-components";
import { color, mixin } from "../../styles";
export const InviteContainer = (cov_1k6i2qi6m3().s[0]++, styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`);
export const InviteForm = (cov_1k6i2qi6m3().s[1]++, styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 4rem;
  width: 440px;
  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  a {
    color: ${color.primary};
  }
  @media (min-width: 1200px) {
    right: 100px;
  }
  @media (max-width: 500px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
    border: none;
    h1 {
      margin-top: 3rem;
    }
  }
`);
export const StyledSelect = (cov_1k6i2qi6m3().s[2]++, styled.select`
  background: ${color.inputBackground};
  cursor: pointer;
  margin: 1rem;
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 66%;
  padding: 9.7px 11.7px;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
  }
`);
export const InviteGroup = (cov_1k6i2qi6m3().s[3]++, styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const InviteGroupBack = (cov_1k6i2qi6m3().s[4]++, styled.div``);
export const InviteTitle = (cov_1k6i2qi6m3().s[5]++, styled.h1`
  text-align: center;
  color: black;
`);
export const AccessText = (cov_1k6i2qi6m3().s[6]++, styled.h4`
  color: black;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkludml0ZS1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiY29sb3IiLCJtaXhpbiIsIkludml0ZUNvbnRhaW5lciIsImRpdiIsIkludml0ZUZvcm0iLCJiYWNrZ3JvdW5kTGlnaHQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJTdHlsZWRTZWxlY3QiLCJzZWxlY3QiLCJpbnB1dEJhY2tncm91bmQiLCJncmF5MTAwIiwiaW5wdXRDb2xvciIsImRhcmtlbiIsInNlY29uZGFyeSIsIkludml0ZUdyb3VwIiwiSW52aXRlR3JvdXBCYWNrIiwiSW52aXRlVGl0bGUiLCJoMSIsIkFjY2Vzc1RleHQiLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLEtBQVQsRUFBZ0JDLEtBQWhCLFFBQTZCLGNBQTdCO0FBRUEsT0FBTyxNQUFNQyxlQUFlLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7Ozs7OztDQUFkLENBQXJCO0FBUVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHTCxNQUFNLENBQUNJLEdBQUk7Z0JBQ3JCSCxLQUFLLENBQUNLLGVBQWdCO3NCQUNoQkwsS0FBSyxDQUFDTSxXQUFZOzs7Ozs7Ozs7Ozs7OzthQWMzQk4sS0FBSyxDQUFDTyxPQUFROzs7Ozs7Ozs7Ozs7Ozs7OztDQWhCSixDQUFoQjtBQW1DUCxPQUFPLE1BQU1DLFlBQVksNkJBQUdULE1BQU0sQ0FBQ1UsTUFBTztnQkFDMUJULEtBQUssQ0FBQ1UsZUFBZ0I7OztzQkFHaEJWLEtBQUssQ0FBQ1csT0FBUTs7O1dBR3pCWCxLQUFLLENBQUNZLFVBQVc7Ozs7O29CQUtSWCxLQUFLLENBQUNZLE1BQU4sQ0FBYWIsS0FBSyxDQUFDYyxTQUFuQixFQUE4QixHQUE5QixDQUFtQzs7O29CQUduQ2QsS0FBSyxDQUFDTyxPQUFROztDQWZULENBQWxCO0FBbUJQLE9BQU8sTUFBTVEsV0FBVyw2QkFBR2hCLE1BQU0sQ0FBQ0ksR0FBSTs7Ozs7O0NBQWQsQ0FBakI7QUFRUCxPQUFPLE1BQU1hLGVBQWUsNkJBQUdqQixNQUFNLENBQUNJLEdBQUksRUFBZCxDQUFyQjtBQUVQLE9BQU8sTUFBTWMsV0FBVyw2QkFBR2xCLE1BQU0sQ0FBQ21CLEVBQUc7OztDQUFiLENBQWpCO0FBS1AsT0FBTyxNQUFNQyxVQUFVLDZCQUFHcEIsTUFBTSxDQUFDcUIsRUFBRzs7Q0FBYixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBtaXhpbiB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZpdGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZpdGVGb3JtID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvci5ib3JkZXJDb2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDhweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogNXB4IDhweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogNHJlbTtcclxuICB3aWR0aDogNDQwcHg7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgcmlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmlucHV0QmFja2dyb3VuZH07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmdyYXkxMDB9O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGNvbG9yOiAke2NvbG9yLmlucHV0Q29sb3J9O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2NiU7XHJcbiAgcGFkZGluZzogOS43cHggMTEuN3B4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAke21peGluLmRhcmtlbihjb2xvci5zZWNvbmRhcnksIDAuMSl9O1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW52aXRlR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW52aXRlR3JvdXBCYWNrID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludml0ZVRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjZXNzVGV4dCA9IHN0eWxlZC5oNGBcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcbiJdfQ==