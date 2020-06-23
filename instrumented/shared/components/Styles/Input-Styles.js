function cov_13upa0ffhk() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Input-Styles.js";
  var hash = "c1e3d9f9a1e92d320548a14267a21eaf4937be93";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Input-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "1": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 7,
          column: 36
        }
      },
      "2": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 28,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c1e3d9f9a1e92d320548a14267a21eaf4937be93"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13upa0ffhk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13upa0ffhk();
import styled from "styled-components";
import { color, mixin } from "../../styles";
export const StyledInput = (cov_13upa0ffhk().s[0]++, styled.div``);
export const StyledIcon = (cov_13upa0ffhk().s[1]++, styled.i``);
export const InputField = (cov_13upa0ffhk().s[2]++, styled.input`
  background: ${color.inputBackground};
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
    &::placeholder {
      color: ${color.gray100};
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LVN0eWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjb2xvciIsIm1peGluIiwiU3R5bGVkSW5wdXQiLCJkaXYiLCJTdHlsZWRJY29uIiwiaSIsIklucHV0RmllbGQiLCJpbnB1dCIsImlucHV0QmFja2dyb3VuZCIsImdyYXkxMDAiLCJpbnB1dENvbG9yIiwiZGFya2VuIiwic2Vjb25kYXJ5IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxLQUFULEVBQWdCQyxLQUFoQixRQUE2QixjQUE3QjtBQUVBLE9BQU8sTUFBTUMsV0FBVyw2QkFBR0gsTUFBTSxDQUFDSSxHQUFJLEVBQWQsQ0FBakI7QUFFUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdMLE1BQU0sQ0FBQ00sQ0FBRSxFQUFaLENBQWhCO0FBRVAsT0FBTyxNQUFNQyxVQUFVLDZCQUFHUCxNQUFNLENBQUNRLEtBQU07Z0JBQ3ZCUCxLQUFLLENBQUNRLGVBQWdCO3NCQUNoQlIsS0FBSyxDQUFDUyxPQUFROzs7V0FHekJULEtBQUssQ0FBQ1UsVUFBVzs7Ozs7O29CQU1SVCxLQUFLLENBQUNVLE1BQU4sQ0FBYVgsS0FBSyxDQUFDWSxTQUFuQixFQUE4QixHQUE5QixDQUFtQzs7O29CQUduQ1osS0FBSyxDQUFDYSxPQUFROztlQUVuQmIsS0FBSyxDQUFDUyxPQUFROzs7Q0FoQk4sQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHsgY29sb3IsIG1peGluIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaWBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYmFja2dyb3VuZDogJHtjb2xvci5pbnB1dEJhY2tncm91bmR9O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZ3JheTEwMH07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgY29sb3I6ICR7Y29sb3IuaW5wdXRDb2xvcn07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7bWl4aW4uZGFya2VuKGNvbG9yLnNlY29uZGFyeSwgMC4xKX07XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yLnByaW1hcnl9O1xyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHtjb2xvci5ncmF5MTAwfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdfQ==