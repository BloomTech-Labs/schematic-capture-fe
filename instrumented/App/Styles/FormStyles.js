function cov_2dds320unz() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\FormStyles.js";
  var hash = "0bc68b32f24722b1f4ba71ab0a423fa45b32d998";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\App\\Styles\\FormStyles.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 29
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 26,
          column: 23
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "2": {
        start: {
          line: 33,
          column: 26
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "3": {
        start: {
          line: 42,
          column: 25
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "4": {
        start: {
          line: 46,
          column: 27
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "5": {
        start: {
          line: 67,
          column: 28
        },
        end: {
          line: 86,
          column: 1
        }
      },
      "6": {
        start: {
          line: 88,
          column: 22
        },
        end: {
          line: 111,
          column: 1
        }
      },
      "7": {
        start: {
          line: 113,
          column: 26
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "8": {
        start: {
          line: 121,
          column: 20
        },
        end: {
          line: 121,
          column: 33
        }
      },
      "9": {
        start: {
          line: 122,
          column: 27
        },
        end: {
          line: 122,
          column: 42
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
      "9": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0bc68b32f24722b1f4ba71ab0a423fa45b32d998"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dds320unz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dds320unz();
import styled from "styled-components";
import { color, font, mixin } from "../../shared/styles";
import Input from "../../shared/components/Components/Input";
export const FormContainer = (cov_2dds320unz().s[0]++, styled.div`
background: ${color.backgroundLight};
border-radius: 0.5rem;
color: ${color.gray300};
padding: 4rem;
width: 95%;
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
@media (min-width: 500px) {
  width: 440px;
}
`);
export const FormRow = (cov_2dds320unz().s[1]++, styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -5px;
margin-left: -5px;
`);
export const FormColumn = (cov_2dds320unz().s[2]++, styled.div`
width: 100%;
padding-right: 5px;
padding-left: 5px;
flex-basis: 0;
flex-grow: 1;
max-width: 100%;
`);
export const FormGroup = (cov_2dds320unz().s[3]++, styled.div`
margin-bottom: 1rem;
`);
export const StyledField = (cov_2dds320unz().s[4]++, styled.input`
background: ${color.inputBackground};
border: 1px solid ${color.gray100};
box-sizing: border-box;
border-radius: 0.5rem;
color: ${color.inputColor};
display: block;
width: 100%;
padding: 14px 16px;
&:hover {
  border-color: ${mixin.darken(color.secondary, 0.1)};
  }
}
&:focus {
  border-color: ${color.primary};
  &::placeholder {
    color: ${color.gray100};
  }
}
`);
export const StyledSelect = (cov_2dds320unz().s[5]++, styled.select`
background: ${color.inputBackground};
border: 1px solid ${color.gray100};
box-sizing: border-box;
border-radius: 0.5rem;
color: ${color.inputColor};
display: block;
width: 100%;
padding: 14px 16px;
&:hover {
  border-color: ${mixin.darken(color.secondary, 0.1)};
  }
}
&:focus {
  border-color: ${color.primary};
  &::placeholder {
    color: ${color.gray100};
  }
}
`);
export const LineOr = (cov_2dds320unz().s[6]++, styled.div`
overflow: hidden;
text-align: center;
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
export const FieldError = (cov_2dds320unz().s[7]++, styled.div`
margin-top: 8px;
color: ${color.danger};
${font.size(1.25)}
`);
export const Form = (cov_2dds320unz().s[8]++, styled.form``);
export const StyledInput = (cov_2dds320unz().s[9]++, styled(Input)``);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiY29sb3IiLCJmb250IiwibWl4aW4iLCJJbnB1dCIsIkZvcm1Db250YWluZXIiLCJkaXYiLCJiYWNrZ3JvdW5kTGlnaHQiLCJncmF5MzAwIiwicHJpbWFyeSIsIkZvcm1Sb3ciLCJGb3JtQ29sdW1uIiwiRm9ybUdyb3VwIiwiU3R5bGVkRmllbGQiLCJpbnB1dCIsImlucHV0QmFja2dyb3VuZCIsImdyYXkxMDAiLCJpbnB1dENvbG9yIiwiZGFya2VuIiwic2Vjb25kYXJ5IiwiU3R5bGVkU2VsZWN0Iiwic2VsZWN0IiwiTGluZU9yIiwiRmllbGRFcnJvciIsImRhbmdlciIsInNpemUiLCJGb3JtIiwiZm9ybSIsIlN0eWxlZElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLFFBQW1DLHFCQUFuQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsMENBQWxCO0FBRUEsT0FBTyxNQUFNQyxhQUFhLDZCQUFHTCxNQUFNLENBQUNNLEdBQUk7Y0FDMUJMLEtBQUssQ0FBQ00sZUFBZ0I7O1NBRTNCTixLQUFLLENBQUNPLE9BQVE7Ozs7Ozs7Ozs7O1dBV1pQLEtBQUssQ0FBQ1EsT0FBUTs7Ozs7Q0FkQyxDQUFuQjtBQXFCUCxPQUFPLE1BQU1DLE9BQU8sNkJBQUdWLE1BQU0sQ0FBQ00sR0FBSTs7Ozs7Q0FBZCxDQUFiO0FBT1AsT0FBTyxNQUFNSyxVQUFVLDZCQUFHWCxNQUFNLENBQUNNLEdBQUk7Ozs7Ozs7Q0FBZCxDQUFoQjtBQVNQLE9BQU8sTUFBTU0sU0FBUyw2QkFBR1osTUFBTSxDQUFDTSxHQUFJOztDQUFkLENBQWY7QUFJUCxPQUFPLE1BQU1PLFdBQVcsNkJBQUdiLE1BQU0sQ0FBQ2MsS0FBTTtjQUMxQmIsS0FBSyxDQUFDYyxlQUFnQjtvQkFDaEJkLEtBQUssQ0FBQ2UsT0FBUTs7O1NBR3pCZixLQUFLLENBQUNnQixVQUFXOzs7OztrQkFLUmQsS0FBSyxDQUFDZSxNQUFOLENBQWFqQixLQUFLLENBQUNrQixTQUFuQixFQUE4QixHQUE5QixDQUFtQzs7OztrQkFJbkNsQixLQUFLLENBQUNRLE9BQVE7O2FBRW5CUixLQUFLLENBQUNlLE9BQVE7OztDQWhCSCxDQUFqQjtBQXFCUCxPQUFPLE1BQU1JLFlBQVksNkJBQUdwQixNQUFNLENBQUNxQixNQUFPO2NBQzVCcEIsS0FBSyxDQUFDYyxlQUFnQjtvQkFDaEJkLEtBQUssQ0FBQ2UsT0FBUTs7O1NBR3pCZixLQUFLLENBQUNnQixVQUFXOzs7OztrQkFLUmQsS0FBSyxDQUFDZSxNQUFOLENBQWFqQixLQUFLLENBQUNrQixTQUFuQixFQUE4QixHQUE5QixDQUFtQzs7OztrQkFJbkNsQixLQUFLLENBQUNRLE9BQVE7O2FBRW5CUixLQUFLLENBQUNlLE9BQVE7OztDQWhCRixDQUFsQjtBQXFCUCxPQUFPLE1BQU1NLE1BQU0sNkJBQUd0QixNQUFNLENBQUNNLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWQsQ0FBWjtBQXlCUCxPQUFPLE1BQU1pQixVQUFVLDZCQUFHdkIsTUFBTSxDQUFDTSxHQUFJOztTQUU1QkwsS0FBSyxDQUFDdUIsTUFBTztFQUNwQnRCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVSxJQUFWLENBQWdCO0NBSEssQ0FBaEI7QUFRUCxPQUFPLE1BQU1DLElBQUksNkJBQUcxQixNQUFNLENBQUMyQixJQUFLLEVBQWYsQ0FBVjtBQUNQLE9BQU8sTUFBTUMsV0FBVyw2QkFBRzVCLE1BQU0sQ0FBQ0ksS0FBRCxDQUFRLEVBQWpCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3IsIGZvbnQsIG1peGluIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9Db21wb25lbnRzL0lucHV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQ6ICR7Y29sb3IuYmFja2dyb3VuZExpZ2h0fTtcclxuYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5jb2xvcjogJHtjb2xvci5ncmF5MzAwfTtcclxucGFkZGluZzogNHJlbTtcclxud2lkdGg6IDk1JTtcclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAke2NvbG9yLnByaW1hcnl9O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIHdpZHRoOiA0NDBweDtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1Sb3cgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LXdyYXA6IHdyYXA7XHJcbm1hcmdpbi1yaWdodDogLTVweDtcclxubWFyZ2luLWxlZnQ6IC01cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbndpZHRoOiAxMDAlO1xyXG5wYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbnBhZGRpbmctbGVmdDogNXB4O1xyXG5mbGV4LWJhc2lzOiAwO1xyXG5mbGV4LWdyb3c6IDE7XHJcbm1heC13aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpZWxkID0gc3R5bGVkLmlucHV0YFxyXG5iYWNrZ3JvdW5kOiAke2NvbG9yLmlucHV0QmFja2dyb3VuZH07XHJcbmJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZ3JheTEwMH07XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuY29sb3I6ICR7Y29sb3IuaW5wdXRDb2xvcn07XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMTRweCAxNnB4O1xyXG4mOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICR7bWl4aW4uZGFya2VuKGNvbG9yLnNlY29uZGFyeSwgMC4xKX07XHJcbiAgfVxyXG59XHJcbiY6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHtjb2xvci5ncmF5MTAwfTtcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxyXG5iYWNrZ3JvdW5kOiAke2NvbG9yLmlucHV0QmFja2dyb3VuZH07XHJcbmJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZ3JheTEwMH07XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuY29sb3I6ICR7Y29sb3IuaW5wdXRDb2xvcn07XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMTRweCAxNnB4O1xyXG4mOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICR7bWl4aW4uZGFya2VuKGNvbG9yLnNlY29uZGFyeSwgMC4xKX07XHJcbiAgfVxyXG59XHJcbiY6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogJHtjb2xvci5wcmltYXJ5fTtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHtjb2xvci5ncmF5MTAwfTtcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lT3IgPSBzdHlsZWQuZGl2YFxyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiY6YmVmb3JlLFxyXG4mOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuJjpiZWZvcmUge1xyXG4gIHRvcDogMS4xNWVtO1xyXG4gIHJpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC01MCU7XHJcbn1cclxuJjphZnRlciB7XHJcbiAgYm90dG9tOiAyLjhlbTtcclxuICBsZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmllbGRFcnJvciA9IHN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6IDhweDtcclxuY29sb3I6ICR7Y29sb3IuZGFuZ2VyfTtcclxuJHtmb250LnNpemUoMS4yNSl9XHJcbmA7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gYDtcclxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KWBgO1xyXG4iXX0=