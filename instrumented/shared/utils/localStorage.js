function cov_1h15ldyc6z() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/utils/localStorage.js";
  var hash = "f4ec9718dddb3d9282ccf5eebc1b152b337b4569";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/utils/localStorage.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 11
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "4": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 48
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 10,
          column: 22
        }
      },
      "6": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 17
        }
      },
      "8": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "9": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "10": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 47
        }
      },
      "11": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "12": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 23
        }
      },
      "13": {
        start: {
          line: 23,
          column: 22
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "14": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 25
        }
      },
      "15": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 11
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 11
          },
          end: {
            line: 4,
            column: 12
          }
        },
        loc: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 4,
            column: 20
          }
        },
        loc: {
          start: {
            line: 4,
            column: 29
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 4
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 26
          }
        },
        loc: {
          start: {
            line: 17,
            column: 31
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 20
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f4ec9718dddb3d9282ccf5eebc1b152b337b4569"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1h15ldyc6z = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1h15ldyc6z();
import throttle from "lodash.throttle";
export const saveState = (cov_1h15ldyc6z().s[0]++, throttle(store => {
  cov_1h15ldyc6z().f[0]++;
  cov_1h15ldyc6z().s[1]++;
  return next => {
    cov_1h15ldyc6z().f[1]++;
    cov_1h15ldyc6z().s[2]++;
    return action => {
      cov_1h15ldyc6z().f[2]++;
      const {
        dashboard
      } = (cov_1h15ldyc6z().s[3]++, store.getState());
      const serialized = (cov_1h15ldyc6z().s[4]++, JSON.stringify(dashboard));
      cov_1h15ldyc6z().s[5]++;

      try {
        cov_1h15ldyc6z().s[6]++;
        localStorage.setItem("state", serialized);
      } catch (error) {}

      cov_1h15ldyc6z().s[7]++;
      next(action);
    };
  };
}, 1000));
cov_1h15ldyc6z().s[8]++;
export const loadState = () => {
  cov_1h15ldyc6z().f[3]++;
  cov_1h15ldyc6z().s[9]++;

  try {
    const state = (cov_1h15ldyc6z().s[10]++, localStorage.getItem("state"));
    cov_1h15ldyc6z().s[11]++;

    if (state === null) {
      cov_1h15ldyc6z().b[0][0]++;
      cov_1h15ldyc6z().s[12]++;
      return undefined;
    } else {
      cov_1h15ldyc6z().b[0][1]++;
    }

    const dashboard = (cov_1h15ldyc6z().s[13]++, JSON.parse(state));
    cov_1h15ldyc6z().s[14]++;
    return {
      dashboard
    };
  } catch (error) {
    cov_1h15ldyc6z().s[15]++;
    return undefined;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsU3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJ0aHJvdHRsZSIsInNhdmVTdGF0ZSIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsImRhc2hib2FyZCIsImdldFN0YXRlIiwic2VyaWFsaXplZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJsb2FkU3RhdGUiLCJzdGF0ZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsUUFBUCxNQUFxQixpQkFBckI7QUFFQSxPQUFPLE1BQU1DLFNBQVMsNkJBQUdELFFBQVEsQ0FDL0JFLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQSxTQUFBQyxJQUFJLElBQUk7QUFBQTtBQUFBO0FBQUEsV0FBQUMsTUFBTSxJQUFJO0FBQUE7QUFDekIsWUFBTTtBQUFFQyxRQUFBQTtBQUFGLG9DQUFnQkgsS0FBSyxDQUFDSSxRQUFOLEVBQWhCLENBQU47QUFDQSxZQUFNQyxVQUFVLDZCQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosU0FBZixDQUFILENBQWhCO0FBRnlCOztBQUl6QixVQUFJO0FBQUE7QUFDRkssUUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixVQUE5QjtBQUNELE9BRkQsQ0FFRSxPQUFPSyxLQUFQLEVBQWMsQ0FBRTs7QUFOTztBQVF6QlQsTUFBQUEsSUFBSSxDQUFDQyxNQUFELENBQUo7QUFDRCxLQVRnQjtBQVNoQixHQVRRO0FBU1IsQ0FWOEIsRUFXL0IsSUFYK0IsQ0FBWCxDQUFmOztBQWNQLE9BQU8sTUFBTVMsU0FBUyxHQUFHLE1BQU07QUFBQTtBQUFBOztBQUM3QixNQUFJO0FBQ0YsVUFBTUMsS0FBSyw4QkFBR0osWUFBWSxDQUFDSyxPQUFiLENBQXFCLE9BQXJCLENBQUgsQ0FBWDtBQURFOztBQUVGLFFBQUlELEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQUE7QUFBQTtBQUNsQixhQUFPRSxTQUFQO0FBQ0QsS0FGRDtBQUFBO0FBQUE7O0FBR0EsVUFBTVgsU0FBUyw4QkFBR0csSUFBSSxDQUFDUyxLQUFMLENBQVdILEtBQVgsQ0FBSCxDQUFmO0FBTEU7QUFNRixXQUFPO0FBQUVULE1BQUFBO0FBQUYsS0FBUDtBQUNELEdBUEQsQ0FPRSxPQUFPTyxLQUFQLEVBQWM7QUFBQTtBQUNkLFdBQU9JLFNBQVA7QUFDRDtBQUNGLENBWE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhyb3R0bGUgZnJvbSBcImxvZGFzaC50aHJvdHRsZVwiO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVN0YXRlID0gdGhyb3R0bGUoXG4gIHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoZGFzaGJvYXJkKTtcblxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlXCIsIHNlcmlhbGl6ZWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgbmV4dChhY3Rpb24pO1xuICB9LFxuICAxMDAwXG4pO1xuXG5leHBvcnQgY29uc3QgbG9hZFN0YXRlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZVwiKTtcbiAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGRhc2hib2FyZCA9IEpTT04ucGFyc2Uoc3RhdGUpO1xuICAgIHJldHVybiB7IGRhc2hib2FyZCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG4iXX0=