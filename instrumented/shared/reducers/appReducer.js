function cov_2re8jwhnyf() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\appReducer.js";
  var hash = "2a628c0c3a58f6f5221b068edd0c94e360d4a4bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\appReducer.js",
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
    hash: "2a628c0c3a58f6f5221b068edd0c94e360d4a4bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2re8jwhnyf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2re8jwhnyf();
import { actions } from "../actions/appActions";
const {
  APP_LOADING,
  APP_DONE_LOADING,
  APP_ERROR,
  RESET_ERROR
} = (cov_2re8jwhnyf().s[0]++, actions);
const initState = (cov_2re8jwhnyf().s[1]++, {
  isLoading: false,
  error: null
});
cov_2re8jwhnyf().s[2]++;

const appReducer = (state = (cov_2re8jwhnyf().b[0][0]++, initState), action) => {
  cov_2re8jwhnyf().f[0]++;
  cov_2re8jwhnyf().s[3]++;

  switch (action.type) {
    case APP_LOADING:
      cov_2re8jwhnyf().b[1][0]++;
      cov_2re8jwhnyf().s[4]++;
      return { ...state,
        isLoading: true
      };

    case APP_DONE_LOADING:
      cov_2re8jwhnyf().b[1][1]++;
      cov_2re8jwhnyf().s[5]++;
      return { ...state,
        error: null,
        isLoading: false
      };

    case APP_ERROR:
      cov_2re8jwhnyf().b[1][2]++;
      cov_2re8jwhnyf().s[6]++;
      return { ...state,
        isLoading: false,
        error: action.payload
      };

    case RESET_ERROR:
      cov_2re8jwhnyf().b[1][3]++;
      cov_2re8jwhnyf().s[7]++;
      return { ...state,
        error: null
      };

    default:
      cov_2re8jwhnyf().b[1][4]++;
      cov_2re8jwhnyf().s[8]++;
      return state;
  }
};

export default appReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkFQUF9MT0FESU5HIiwiQVBQX0RPTkVfTE9BRElORyIsIkFQUF9FUlJPUiIsIlJFU0VUX0VSUk9SIiwiaW5pdFN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLE9BQVQsUUFBd0IsdUJBQXhCO0FBRUEsTUFBTTtBQUFFQyxFQUFBQSxXQUFGO0FBQWVDLEVBQUFBLGdCQUFmO0FBQWlDQyxFQUFBQSxTQUFqQztBQUE0Q0MsRUFBQUE7QUFBNUMsOEJBQTRESixPQUE1RCxDQUFOO0FBRUEsTUFBTUssU0FBUyw2QkFBRztBQUNoQkMsRUFBQUEsU0FBUyxFQUFFLEtBREs7QUFFaEJDLEVBQUFBLEtBQUssRUFBRTtBQUZTLENBQUgsQ0FBZjs7O0FBS0EsTUFBTUMsVUFBVSxHQUFHLENBQUNDLEtBQUssZ0NBQUdKLFNBQUgsQ0FBTixFQUFvQkssTUFBcEIsS0FBK0I7QUFBQTtBQUFBOztBQUNoRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLVixXQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHUSxLQURFO0FBRUxILFFBQUFBLFNBQVMsRUFBRTtBQUZOLE9BQVA7O0FBSUYsU0FBS0osZ0JBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdPLEtBREU7QUFFTEYsUUFBQUEsS0FBSyxFQUFFLElBRkY7QUFHTEQsUUFBQUEsU0FBUyxFQUFFO0FBSE4sT0FBUDs7QUFLRixTQUFLSCxTQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHTSxLQURFO0FBRUxILFFBQUFBLFNBQVMsRUFBRSxLQUZOO0FBR0xDLFFBQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDRTtBQUhULE9BQVA7O0FBS0YsU0FBS1IsV0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR0ssS0FERTtBQUVMRixRQUFBQSxLQUFLLEVBQUU7QUFGRixPQUFQOztBQUlGO0FBQUE7QUFBQTtBQUNFLGFBQU9FLEtBQVA7QUF4Qko7QUEwQkQsQ0EzQkQ7O0FBNkJBLGVBQWVELFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXBwQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgeyBBUFBfTE9BRElORywgQVBQX0RPTkVfTE9BRElORywgQVBQX0VSUk9SLCBSRVNFVF9FUlJPUiB9ID0gYWN0aW9ucztcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFQUF9MT0FESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBUFBfRE9ORV9MT0FESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfTtcclxuICAgIGNhc2UgQVBQX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFJFU0VUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBSZWR1Y2VyO1xyXG4iXX0=