function cov_13nhtwbuoj() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\utils\\axiosWithAuth.js";
  var hash = "82308f3eec1d9344480c0e70b52aea8f24dcddd7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\utils\\axiosWithAuth.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 4,
          column: 49
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 7,
          column: 50
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 14,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 35
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 7,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 34
          }
        }, {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 50
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "82308f3eec1d9344480c0e70b52aea8f24dcddd7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13nhtwbuoj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13nhtwbuoj();
import axios from "axios";
cov_13nhtwbuoj().s[0]++;
export const axiosWithAuth = () => {
  cov_13nhtwbuoj().f[0]++;
  const idToken = (cov_13nhtwbuoj().s[1]++, localStorage.getItem("idToken"));
  const BASE_URL = (cov_13nhtwbuoj().s[2]++, (cov_13nhtwbuoj().b[0][0]++, process.env.REACT_APP_BASE_URL) || (cov_13nhtwbuoj().b[0][1]++, "https://schematic-capture.herokuapp.com/api/"));
  cov_13nhtwbuoj().s[3]++;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken}`
    }
  });
}; // https://schematic-capture.herokuapp.com/api/
// https://schematiccapture-master.herokuapp.com/api
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zV2l0aEF1dGguanMiXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc1dpdGhBdXRoIiwiaWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxPQUFPLE1BQU1DLGFBQWEsR0FBRyxNQUFNO0FBQUE7QUFDakMsUUFBTUMsT0FBTyw2QkFBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQUgsQ0FBYjtBQUNBLFFBQU1DLFFBQVEsNkJBQ1osNkJBQUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBWixrQ0FDQSw4Q0FEQSxDQURZLENBQWQ7QUFGaUM7QUFNakMsU0FBT1IsS0FBSyxDQUFDUyxNQUFOLENBQWE7QUFDbEJDLElBQUFBLE9BQU8sRUFBRUwsUUFEUztBQUVsQk0sSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxVQUFTVixPQUFRO0FBRDFCO0FBRlMsR0FBYixDQUFQO0FBTUQsQ0FaTSxDLENBY1A7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc1dpdGhBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkVG9rZW5cIik7XHJcbiAgY29uc3QgQkFTRV9VUkwgPVxyXG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMIHx8XHJcbiAgICBcImh0dHBzOi8vc2NoZW1hdGljLWNhcHR1cmUuaGVyb2t1YXBwLmNvbS9hcGkvXCI7XHJcblxyXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogQkFTRV9VUkwsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtpZFRva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly9zY2hlbWF0aWMtY2FwdHVyZS5oZXJva3VhcHAuY29tL2FwaS9cclxuLy8gaHR0cHM6Ly9zY2hlbWF0aWNjYXB0dXJlLW1hc3Rlci5oZXJva3VhcHAuY29tL2FwaSJdfQ==