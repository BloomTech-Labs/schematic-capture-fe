function cov_1tspfgx7u9() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/BackToLink-Styles.js";
  var hash = "92effbd537fae59a3abe9cfa5cb5cdca2d7ded23";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/BackToLink-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 21,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "92effbd537fae59a3abe9cfa5cb5cdca2d7ded23"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1tspfgx7u9 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1tspfgx7u9();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../../App/Styles";
export const StyledLink = (cov_1tspfgx7u9().s[0]++, styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.black};
  font-size: ${font.small};
  margin-top: 1rem;
  margin-right: 1rem;
  .icon {
    margin-right: 8px;
  }
  :hover{
    text-decoration: none;
    opacity: 0.4;
    color: ${color.black}
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tUb0xpbmstU3R5bGVzLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJjb2xvciIsImZvbnQiLCJTdHlsZWRMaW5rIiwiYmxhY2siLCJzbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLFFBQTRCLHFCQUE1QjtBQUVBLE9BQU8sTUFBTUMsVUFBVSw2QkFBR0osTUFBTSxDQUFDQyxJQUFELENBQU87OztXQUc1QkMsS0FBSyxDQUFDRyxLQUFNO2VBQ1JGLElBQUksQ0FBQ0csS0FBTTs7Ozs7Ozs7O2FBU2JKLEtBQUssQ0FBQ0csS0FBTTs7Q0FiRixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tIFwiLi4vLi4vLi4vQXBwL1N0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7Y29sb3IuYmxhY2t9O1xuICBmb250LXNpemU6ICR7Zm9udC5zbWFsbH07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgLmljb24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG4gIDpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGNvbG9yOiAke2NvbG9yLmJsYWNrfVxuICB9XG5gO1xuIl19