function cov_v8x0sa8ly() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/NewClientForm/schema.js";
  var hash = "3448057305e4e5701f7b100c866b2f2d4c8619bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/App/Client/NewClientForm/schema.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "2": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 13,
          column: 19
        }
      },
      "3": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 19
        }
      },
      "4": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 19
        }
      },
      "5": {
        start: {
          line: 34,
          column: 16
        },
        end: {
          line: 34,
          column: 19
        }
      },
      "6": {
        start: {
          line: 40,
          column: 16
        },
        end: {
          line: 40,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 10
          }
        },
        loc: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 39
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 10
          }
        },
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 19
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 10
          }
        },
        loc: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 19
          }
        },
        line: 20
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 27,
            column: 10
          }
        },
        loc: {
          start: {
            line: 27,
            column: 16
          },
          end: {
            line: 27,
            column: 19
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 9
          },
          end: {
            line: 34,
            column: 10
          }
        },
        loc: {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 19
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 9
          },
          end: {
            line: 40,
            column: 10
          }
        },
        loc: {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 40,
            column: 19
          }
        },
        line: 40
      }
    },
    branchMap: {},
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3448057305e4e5701f7b100c866b2f2d4c8619bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_v8x0sa8ly = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_v8x0sa8ly();
export const schema = (cov_v8x0sa8ly().s[0]++, [{
  fieldType: "input",
  name: "companyName",
  ref: ref => {
    cov_v8x0sa8ly().f[0]++;
    cov_v8x0sa8ly().s[1]++;
    return ref({
      required: true
    });
  },
  error: "First & Last Name or Company Name is required.",
  type: "text",
  placeholder: "Name"
}, {
  fieldType: "input",
  name: "phone",
  ref: ref => {
    cov_v8x0sa8ly().f[1]++;
    cov_v8x0sa8ly().s[2]++;
    return ref;
  },
  type: "tel",
  placeholder: "Phone"
}, {
  fieldType: "input",
  name: "street",
  ref: ref => {
    cov_v8x0sa8ly().f[2]++;
    cov_v8x0sa8ly().s[3]++;
    return ref;
  },
  type: "text",
  placeholder: "Street"
}, {
  fieldType: "input",
  name: "city",
  ref: ref => {
    cov_v8x0sa8ly().f[3]++;
    cov_v8x0sa8ly().s[4]++;
    return ref;
  },
  type: "text",
  placeholder: "City"
}, {
  fieldType: "input",
  name: "state",
  ref: ref => {
    cov_v8x0sa8ly().f[4]++;
    cov_v8x0sa8ly().s[5]++;
    return ref;
  },
  placeholder: "State"
}, {
  fieldType: "input",
  name: "zip",
  ref: ref => {
    cov_v8x0sa8ly().f[5]++;
    cov_v8x0sa8ly().s[6]++;
    return ref;
  },
  placeholder: "ZIP Code"
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJmaWVsZFR5cGUiLCJuYW1lIiwicmVmIiwicmVxdWlyZWQiLCJlcnJvciIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLE1BQU1BLE1BQU0sNEJBQUcsQ0FDcEI7QUFDRUMsRUFBQUEsU0FBUyxFQUFFLE9BRGI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLGFBRlI7QUFHRUMsRUFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUk7QUFBQTtBQUFBO0FBQUEsV0FBQUEsR0FBRyxDQUFDO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQUQsQ0FBSDtBQUF1QixHQUhyQztBQUlFQyxFQUFBQSxLQUFLLEVBQUUsZ0RBSlQ7QUFLRUMsRUFBQUEsSUFBSSxFQUFFLE1BTFI7QUFNRUMsRUFBQUEsV0FBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRU4sRUFBQUEsU0FBUyxFQUFFLE9BRGI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLE9BRlI7QUFHRUMsRUFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUlBO0FBQUFBO0FBQUFBO0FBQUFBLFdBQUFBLEdBQUc7QUFBQSxHQUhqQjtBQUlFRyxFQUFBQSxJQUFJLEVBQUUsS0FKUjtBQUtFQyxFQUFBQSxXQUFXLEVBQUU7QUFMZixDQVRvQixFQWdCcEI7QUFDRU4sRUFBQUEsU0FBUyxFQUFFLE9BRGI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUlBO0FBQUFBO0FBQUFBO0FBQUFBLFdBQUFBLEdBQUc7QUFBQSxHQUhqQjtBQUlFRyxFQUFBQSxJQUFJLEVBQUUsTUFKUjtBQUtFQyxFQUFBQSxXQUFXLEVBQUU7QUFMZixDQWhCb0IsRUF1QnBCO0FBQ0VOLEVBQUFBLFNBQVMsRUFBRSxPQURiO0FBRUVDLEVBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLEVBQUFBLEdBQUcsRUFBRUEsR0FBRyxJQUFJQTtBQUFBQTtBQUFBQTtBQUFBQSxXQUFBQSxHQUFHO0FBQUEsR0FIakI7QUFJRUcsRUFBQUEsSUFBSSxFQUFFLE1BSlI7QUFLRUMsRUFBQUEsV0FBVyxFQUFFO0FBTGYsQ0F2Qm9CLEVBOEJwQjtBQUNFTixFQUFBQSxTQUFTLEVBQUUsT0FEYjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsT0FGUjtBQUdFQyxFQUFBQSxHQUFHLEVBQUVBLEdBQUcsSUFBSUE7QUFBQUE7QUFBQUE7QUFBQUEsV0FBQUEsR0FBRztBQUFBLEdBSGpCO0FBSUVJLEVBQUFBLFdBQVcsRUFBRTtBQUpmLENBOUJvQixFQW9DcEI7QUFDRU4sRUFBQUEsU0FBUyxFQUFFLE9BRGI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLEtBRlI7QUFHRUMsRUFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUlBO0FBQUFBO0FBQUFBO0FBQUFBLFdBQUFBLEdBQUc7QUFBQSxHQUhqQjtBQUlFSSxFQUFBQSxXQUFXLEVBQUU7QUFKZixDQXBDb0IsQ0FBSCxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IFtcbiAge1xuICAgIGZpZWxkVHlwZTogXCJpbnB1dFwiLFxuICAgIG5hbWU6IFwiY29tcGFueU5hbWVcIixcbiAgICByZWY6IHJlZiA9PiByZWYoeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICBlcnJvcjogXCJGaXJzdCAmIExhc3QgTmFtZSBvciBDb21wYW55IE5hbWUgaXMgcmVxdWlyZWQuXCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiXG4gIH0sXG4gIHtcbiAgICBmaWVsZFR5cGU6IFwiaW5wdXRcIixcbiAgICBuYW1lOiBcInBob25lXCIsXG4gICAgcmVmOiByZWYgPT4gcmVmLFxuICAgIHR5cGU6IFwidGVsXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiUGhvbmVcIlxuICB9LFxuICB7XG4gICAgZmllbGRUeXBlOiBcImlucHV0XCIsXG4gICAgbmFtZTogXCJzdHJlZXRcIixcbiAgICByZWY6IHJlZiA9PiByZWYsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiU3RyZWV0XCJcbiAgfSxcbiAge1xuICAgIGZpZWxkVHlwZTogXCJpbnB1dFwiLFxuICAgIG5hbWU6IFwiY2l0eVwiLFxuICAgIHJlZjogcmVmID0+IHJlZixcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJDaXR5XCJcbiAgfSxcbiAge1xuICAgIGZpZWxkVHlwZTogXCJpbnB1dFwiLFxuICAgIG5hbWU6IFwic3RhdGVcIixcbiAgICByZWY6IHJlZiA9PiByZWYsXG4gICAgcGxhY2Vob2xkZXI6IFwiU3RhdGVcIlxuICB9LFxuICB7XG4gICAgZmllbGRUeXBlOiBcImlucHV0XCIsXG4gICAgbmFtZTogXCJ6aXBcIixcbiAgICByZWY6IHJlZiA9PiByZWYsXG4gICAgcGxhY2Vob2xkZXI6IFwiWklQIENvZGVcIlxuICB9XG5dO1xuIl19