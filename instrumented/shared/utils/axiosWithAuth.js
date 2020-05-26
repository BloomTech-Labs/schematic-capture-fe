function cov_5muwcw5g() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/utils/axiosWithAuth.js";
  var hash = "e5dcf3ff9b7f74ddec6d13b13e08192ce9697e6c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/utils/axiosWithAuth.js",
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
          column: 56
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
            column: 56
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
            column: 56
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
    hash: "e5dcf3ff9b7f74ddec6d13b13e08192ce9697e6c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_5muwcw5g = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_5muwcw5g();
import axios from "axios";
cov_5muwcw5g().s[0]++;
export const axiosWithAuth = () => {
  cov_5muwcw5g().f[0]++;
  const idToken = (cov_5muwcw5g().s[1]++, localStorage.getItem("idToken"));
  const BASE_URL = (cov_5muwcw5g().s[2]++, (cov_5muwcw5g().b[0][0]++, process.env.REACT_APP_BASE_URL) || (cov_5muwcw5g().b[0][1]++, "https://schematiccapture-master.herokuapp.com/api/"));
  cov_5muwcw5g().s[3]++;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken}`
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zV2l0aEF1dGguanMiXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc1dpdGhBdXRoIiwiaWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsT0FBTyxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUFBO0FBQ2pDLFFBQU1DLE9BQU8sMkJBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFILENBQWI7QUFDQSxRQUFNQyxRQUFRLDJCQUNaLDJCQUFBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBQVosZ0NBQ0Esb0RBREEsQ0FEWSxDQUFkO0FBRmlDO0FBTWpDLFNBQU9SLEtBQUssQ0FBQ1MsTUFBTixDQUFhO0FBQ2xCQyxJQUFBQSxPQUFPLEVBQUVMLFFBRFM7QUFFbEJNLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUcsVUFBU1YsT0FBUTtBQUQxQjtBQUZTLEdBQWIsQ0FBUDtBQU1ELENBWk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBheGlvc1dpdGhBdXRoID0gKCkgPT4ge1xuICBjb25zdCBpZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFRva2VuXCIpO1xuICBjb25zdCBCQVNFX1VSTCA9XG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMIHx8XG4gICAgXCJodHRwczovL3NjaGVtYXRpY2NhcHR1cmUtbWFzdGVyLmhlcm9rdWFwcC5jb20vYXBpL1wiO1xuXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgfSxcbiAgfSk7XG59O1xuIl19