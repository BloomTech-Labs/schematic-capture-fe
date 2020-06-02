function cov_2igj978irb() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/appReducer.js";
  var hash = "39f44bb32c1251fb85e0bc830bd3ee48130ab418";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/appReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 66
        },
        end: {
          line: 3,
          column: 73
        }
      },
      "1": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "5": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 22,
          column: 8
        }
      },
      "6": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 28,
          column: 8
        }
      },
      "7": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "8": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 20
          }
        },
        loc: {
          start: {
            line: 10,
            column: 50
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 37
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 28
          },
          end: {
            line: 10,
            column: 37
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 16,
            column: 8
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 22,
            column: 8
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 28,
            column: 8
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 33,
            column: 7
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 35,
            column: 19
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "39f44bb32c1251fb85e0bc830bd3ee48130ab418"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2igj978irb = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2igj978irb();
import { actions } from "../actions/appActions";
const {
  APP_LOADING,
  APP_DONE_LOADING,
  APP_ERROR,
  RESET_ERROR
} = (cov_2igj978irb().s[0]++, actions);
const initState = (cov_2igj978irb().s[1]++, {
  isLoading: false,
  error: null
});
cov_2igj978irb().s[2]++;

const appReducer = (state = (cov_2igj978irb().b[0][0]++, initState), action) => {
  cov_2igj978irb().f[0]++;
  cov_2igj978irb().s[3]++;

  switch (action.type) {
    case APP_LOADING:
      cov_2igj978irb().b[1][0]++;
      cov_2igj978irb().s[4]++;
      return { ...state,
        isLoading: true
      };

    case APP_DONE_LOADING:
      cov_2igj978irb().b[1][1]++;
      cov_2igj978irb().s[5]++;
      return { ...state,
        error: null,
        isLoading: false
      };

    case APP_ERROR:
      cov_2igj978irb().b[1][2]++;
      cov_2igj978irb().s[6]++;
      return { ...state,
        isLoading: false,
        error: action.payload
      };

    case RESET_ERROR:
      cov_2igj978irb().b[1][3]++;
      cov_2igj978irb().s[7]++;
      return { ...state,
        error: null
      };

    default:
      cov_2igj978irb().b[1][4]++;
      cov_2igj978irb().s[8]++;
      return state;
  }
};

export default appReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkFQUF9MT0FESU5HIiwiQVBQX0RPTkVfTE9BRElORyIsIkFQUF9FUlJPUiIsIlJFU0VUX0VSUk9SIiwiaW5pdFN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFULFFBQXdCLHVCQUF4QjtBQUVBLE1BQU07QUFBRUMsRUFBQUEsV0FBRjtBQUFlQyxFQUFBQSxnQkFBZjtBQUFpQ0MsRUFBQUEsU0FBakM7QUFBNENDLEVBQUFBO0FBQTVDLDhCQUE0REosT0FBNUQsQ0FBTjtBQUVBLE1BQU1LLFNBQVMsNkJBQUc7QUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxLQURLO0FBRWhCQyxFQUFBQSxLQUFLLEVBQUU7QUFGUyxDQUFILENBQWY7OztBQUtBLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxLQUFLLGdDQUFHSixTQUFILENBQU4sRUFBb0JLLE1BQXBCLEtBQStCO0FBQUE7QUFBQTs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1YsV0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR1EsS0FERTtBQUVMSCxRQUFBQSxTQUFTLEVBQUU7QUFGTixPQUFQOztBQUlGLFNBQUtKLGdCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHTyxLQURFO0FBRUxGLFFBQUFBLEtBQUssRUFBRSxJQUZGO0FBR0xELFFBQUFBLFNBQVMsRUFBRTtBQUhOLE9BQVA7O0FBS0YsU0FBS0gsU0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR00sS0FERTtBQUVMSCxRQUFBQSxTQUFTLEVBQUUsS0FGTjtBQUdMQyxRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0U7QUFIVCxPQUFQOztBQUtGLFNBQUtSLFdBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdLLEtBREU7QUFFTEYsUUFBQUEsS0FBSyxFQUFFO0FBRkYsT0FBUDs7QUFJRjtBQUFBO0FBQUE7QUFDRSxhQUFPRSxLQUFQO0FBeEJKO0FBMEJELENBM0JEOztBQTZCQSxlQUFlRCxVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2FwcEFjdGlvbnNcIjtcblxuY29uc3QgeyBBUFBfTE9BRElORywgQVBQX0RPTkVfTE9BRElORywgQVBQX0VSUk9SLCBSRVNFVF9FUlJPUiB9ID0gYWN0aW9ucztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbFxufTtcblxuY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFQUF9MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIEFQUF9ET05FX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBBUFBfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIGNhc2UgUkVTRVRfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBSZWR1Y2VyO1xuIl19