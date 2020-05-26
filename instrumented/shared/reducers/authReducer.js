function cov_151gi66oez() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/authReducer.js";
  var hash = "aa3c2443745bb7d2d6c9a548e942772997a07074";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/authReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 69
        },
        end: {
          line: 3,
          column: 76
        }
      },
      "1": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "2": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "3": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "5": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "6": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 12,
            column: 51
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 8
          },
          end: {
            line: 6,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 8
          },
          end: {
            line: 6,
            column: 48
          }
        }, {
          start: {
            line: 6,
            column: 52
          },
          end: {
            line: 6,
            column: 54
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 12,
            column: 29
          },
          end: {
            line: 12,
            column: 38
          }
        }],
        line: 12
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 18,
            column: 8
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 32
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 25,
            column: 8
          }
        }, {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 27,
            column: 19
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
      "2": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aa3c2443745bb7d2d6c9a548e942772997a07074"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_151gi66oez = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_151gi66oez();
import { actions } from "../actions/authActions";
const {
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_SUCCESS,
  STORE_GOOGLE_INFO
} = (cov_151gi66oez().s[0]++, actions);
const initState = (cov_151gi66oez().s[1]++, {
  user: (cov_151gi66oez().b[0][0]++, JSON.parse(localStorage.getItem("user"))) || (cov_151gi66oez().b[0][1]++, {}),
  googleInfo: null,
  isLoading: false,
  error: null
});
cov_151gi66oez().s[2]++;

const authReducer = (state = (cov_151gi66oez().b[1][0]++, initState), action) => {
  cov_151gi66oez().f[0]++;
  cov_151gi66oez().s[3]++;

  switch (action.type) {
    case STORE_GOOGLE_INFO:
      cov_151gi66oez().b[2][0]++;
      cov_151gi66oez().s[4]++;
      return { ...state,
        googleInfo: action.payload
      };

    case CREATE_ACCOUNT_SUCCESS:
      cov_151gi66oez().b[2][1]++;

    case LOGIN_SUCCESS:
      cov_151gi66oez().b[2][2]++;
      cov_151gi66oez().s[5]++;
      return { ...state,
        ...action.payload,
        isLoading: false
      };

    default:
      cov_151gi66oez().b[2][3]++;
      cov_151gi66oez().s[6]++;
      return state;
  }
};

export default authReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJDUkVBVEVfQUNDT1VOVF9TVUNDRVNTIiwiTE9HSU5fU1VDQ0VTUyIsIlNUT1JFX0dPT0dMRV9JTkZPIiwiaW5pdFN0YXRlIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnb29nbGVJbmZvIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsT0FBVCxRQUF3Qix3QkFBeEI7QUFFQSxNQUFNO0FBQUVDLEVBQUFBLHNCQUFGO0FBQTBCQyxFQUFBQSxhQUExQjtBQUF5Q0MsRUFBQUE7QUFBekMsOEJBQStESCxPQUEvRCxDQUFOO0FBRUEsTUFBTUksU0FBUyw2QkFBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFLDZCQUFBQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsbUNBQTRDLEVBQTVDLENBRFU7QUFFaEJDLEVBQUFBLFVBQVUsRUFBRSxJQUZJO0FBR2hCQyxFQUFBQSxTQUFTLEVBQUUsS0FISztBQUloQkMsRUFBQUEsS0FBSyxFQUFFO0FBSlMsQ0FBSCxDQUFmOzs7QUFPQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxnQ0FBR1YsU0FBSCxDQUFOLEVBQW9CVyxNQUFwQixLQUErQjtBQUFBO0FBQUE7O0FBQ2pELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtiLGlCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHVyxLQURFO0FBRUxKLFFBQUFBLFVBQVUsRUFBRUssTUFBTSxDQUFDRTtBQUZkLE9BQVA7O0FBSUYsU0FBS2hCLHNCQUFMO0FBQUE7O0FBQ0EsU0FBS0MsYUFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR1ksS0FERTtBQUVMLFdBQUdDLE1BQU0sQ0FBQ0UsT0FGTDtBQUdMTixRQUFBQSxTQUFTLEVBQUU7QUFITixPQUFQOztBQUtGO0FBQUE7QUFBQTtBQUNFLGFBQU9HLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkEsZUFBZUQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG5jb25zdCB7IENSRUFURV9BQ0NPVU5UX1NVQ0NFU1MsIExPR0lOX1NVQ0NFU1MsIFNUT1JFX0dPT0dMRV9JTkZPIH0gPSBhY3Rpb25zO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIHVzZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB8fCB7fSxcbiAgZ29vZ2xlSW5mbzogbnVsbCxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGxcbn07XG5cbmNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU1RPUkVfR09PR0xFX0lORk86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ29vZ2xlSW5mbzogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBDUkVBVEVfQUNDT1VOVF9TVUNDRVNTOlxuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjtcbiJdfQ==