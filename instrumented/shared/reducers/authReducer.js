function cov_25d65cmfxg() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\authReducer.js";
  var hash = "3cbe5ed50c959a4dce668166b2631a65b46efc8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\authReducer.js",
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
    hash: "3cbe5ed50c959a4dce668166b2631a65b46efc8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25d65cmfxg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25d65cmfxg();
import { actions } from "../actions/authActions";
const {
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_SUCCESS,
  STORE_GOOGLE_INFO
} = (cov_25d65cmfxg().s[0]++, actions);
const initState = (cov_25d65cmfxg().s[1]++, {
  user: (cov_25d65cmfxg().b[0][0]++, JSON.parse(localStorage.getItem("user"))) || (cov_25d65cmfxg().b[0][1]++, {}),
  googleInfo: null,
  isLoading: false,
  error: null
});
cov_25d65cmfxg().s[2]++;

const authReducer = (state = (cov_25d65cmfxg().b[1][0]++, initState), action) => {
  cov_25d65cmfxg().f[0]++;
  cov_25d65cmfxg().s[3]++;

  switch (action.type) {
    case STORE_GOOGLE_INFO:
      cov_25d65cmfxg().b[2][0]++;
      cov_25d65cmfxg().s[4]++;
      return { ...state,
        googleInfo: action.payload
      };

    case CREATE_ACCOUNT_SUCCESS:
      cov_25d65cmfxg().b[2][1]++;

    case LOGIN_SUCCESS:
      cov_25d65cmfxg().b[2][2]++;
      cov_25d65cmfxg().s[5]++;
      return { ...state,
        ...action.payload,
        isLoading: false
      };

    default:
      cov_25d65cmfxg().b[2][3]++;
      cov_25d65cmfxg().s[6]++;
      return state;
  }
};

export default authReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJDUkVBVEVfQUNDT1VOVF9TVUNDRVNTIiwiTE9HSU5fU1VDQ0VTUyIsIlNUT1JFX0dPT0dMRV9JTkZPIiwiaW5pdFN0YXRlIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnb29nbGVJbmZvIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxPQUFULFFBQXdCLHdCQUF4QjtBQUVBLE1BQU07QUFBRUMsRUFBQUEsc0JBQUY7QUFBMEJDLEVBQUFBLGFBQTFCO0FBQXlDQyxFQUFBQTtBQUF6Qyw4QkFBK0RILE9BQS9ELENBQU47QUFFQSxNQUFNSSxTQUFTLDZCQUFHO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUUsNkJBQUFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxtQ0FBNEMsRUFBNUMsQ0FEVTtBQUVoQkMsRUFBQUEsVUFBVSxFQUFFLElBRkk7QUFHaEJDLEVBQUFBLFNBQVMsRUFBRSxLQUhLO0FBSWhCQyxFQUFBQSxLQUFLLEVBQUU7QUFKUyxDQUFILENBQWY7OztBQU9BLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLGdDQUFHVixTQUFILENBQU4sRUFBb0JXLE1BQXBCLEtBQStCO0FBQUE7QUFBQTs7QUFDakQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS2IsaUJBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdXLEtBREU7QUFFTEosUUFBQUEsVUFBVSxFQUFFSyxNQUFNLENBQUNFO0FBRmQsT0FBUDs7QUFJRixTQUFLaEIsc0JBQUw7QUFBQTs7QUFDQSxTQUFLQyxhQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHWSxLQURFO0FBRUwsV0FBR0MsTUFBTSxDQUFDRSxPQUZMO0FBR0xOLFFBQUFBLFNBQVMsRUFBRTtBQUhOLE9BQVA7O0FBS0Y7QUFBQTtBQUFBO0FBQ0UsYUFBT0csS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CQSxlQUFlRCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XHJcblxyXG5jb25zdCB7IENSRUFURV9BQ0NPVU5UX1NVQ0NFU1MsIExPR0lOX1NVQ0NFU1MsIFNUT1JFX0dPT0dMRV9JTkZPIH0gPSBhY3Rpb25zO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gIHVzZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB8fCB7fSxcclxuICBnb29nbGVJbmZvOiBudWxsLFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNUT1JFX0dPT0dMRV9JTkZPOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGdvb2dsZUluZm86IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENSRUFURV9BQ0NPVU5UX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iXX0=