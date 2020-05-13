function cov_15gfzjkto2() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/utils/axiosWithAuth.js";
  var hash = "818dd6d1f21db8cd688278d5c4043db618bee998";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/utils/axiosWithAuth.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 13,
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
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 97
        }
      },
      "3": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 12,
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
            line: 13,
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
            line: 5,
            column: 19
          },
          end: {
            line: 5,
            column: 97
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 19
          },
          end: {
            line: 5,
            column: 49
          }
        }, {
          start: {
            line: 5,
            column: 53
          },
          end: {
            line: 5,
            column: 97
          }
        }],
        line: 5
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
    hash: "818dd6d1f21db8cd688278d5c4043db618bee998"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_15gfzjkto2 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_15gfzjkto2();
import axios from "axios";
cov_15gfzjkto2().s[0]++;
export const axiosWithAuth = () => {
  cov_15gfzjkto2().f[0]++;
  const idToken = (cov_15gfzjkto2().s[1]++, localStorage.getItem("idToken"));
  const BASE_URL = (cov_15gfzjkto2().s[2]++, (cov_15gfzjkto2().b[0][0]++, process.env.REACT_APP_BASE_URL) || (cov_15gfzjkto2().b[0][1]++, 'https://sc-be-production.herokuapp.com/api'));
  cov_15gfzjkto2().s[3]++;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken}`
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zV2l0aEF1dGguanMiXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc1dpdGhBdXRoIiwiaWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsT0FBTyxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUFBO0FBQ2pDLFFBQU1DLE9BQU8sNkJBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFILENBQWI7QUFDQSxRQUFNQyxRQUFRLDZCQUFHLDZCQUFBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBQVosa0NBQWtDLDRDQUFsQyxDQUFILENBQWQ7QUFGaUM7QUFJakMsU0FBT1IsS0FBSyxDQUFDUyxNQUFOLENBQWE7QUFDbEJDLElBQUFBLE9BQU8sRUFBRUwsUUFEUztBQUVsQk0sSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxVQUFTVixPQUFRO0FBRDFCO0FBRlMsR0FBYixDQUFQO0FBTUQsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGF4aW9zV2l0aEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkVG9rZW5cIik7XG4gIGNvbnN0IEJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMIHx8ICdodHRwczovL3NjLWJlLXByb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGknO1xuXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtpZFRva2VufWBcbiAgICB9XG4gIH0pO1xufTtcbiJdfQ==