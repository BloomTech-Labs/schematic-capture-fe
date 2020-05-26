function cov_1aaw8u1hp2() {
  var path = "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Client\\NewClientForm\\schema.js";
  var hash = "ebdf52ad8c6e8b3392e420e1ca30321c19dc3017";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\App\\Client\\NewClientForm\\schema.js",
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
    hash: "ebdf52ad8c6e8b3392e420e1ca30321c19dc3017"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1aaw8u1hp2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1aaw8u1hp2();
export const schema = (cov_1aaw8u1hp2().s[0]++, [{
  fieldType: "input",
  name: "companyName",
  ref: ref => {
    cov_1aaw8u1hp2().f[0]++;
    cov_1aaw8u1hp2().s[1]++;
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
    cov_1aaw8u1hp2().f[1]++;
    cov_1aaw8u1hp2().s[2]++;
    return ref;
  },
  type: "tel",
  placeholder: "Phone"
}, {
  fieldType: "input",
  name: "street",
  ref: ref => {
    cov_1aaw8u1hp2().f[2]++;
    cov_1aaw8u1hp2().s[3]++;
    return ref;
  },
  type: "text",
  placeholder: "Street"
}, {
  fieldType: "input",
  name: "city",
  ref: ref => {
    cov_1aaw8u1hp2().f[3]++;
    cov_1aaw8u1hp2().s[4]++;
    return ref;
  },
  type: "text",
  placeholder: "City"
}, {
  fieldType: "input",
  name: "state",
  ref: ref => {
    cov_1aaw8u1hp2().f[4]++;
    cov_1aaw8u1hp2().s[5]++;
    return ref;
  },
  placeholder: "State"
}, {
  fieldType: "input",
  name: "zip",
  ref: ref => {
    cov_1aaw8u1hp2().f[5]++;
    cov_1aaw8u1hp2().s[6]++;
    return ref;
  },
  placeholder: "ZIP Code"
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYS5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJmaWVsZFR5cGUiLCJuYW1lIiwicmVmIiwicmVxdWlyZWQiLCJlcnJvciIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU8sTUFBTUEsTUFBTSw2QkFBRyxDQUNwQjtBQUNFQyxFQUFBQSxTQUFTLEVBQUUsT0FEYjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsYUFGUjtBQUdFQyxFQUFBQSxHQUFHLEVBQUVBLEdBQUcsSUFBSTtBQUFBO0FBQUE7QUFBQSxXQUFBQSxHQUFHLENBQUM7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBRCxDQUFIO0FBQXVCLEdBSHJDO0FBSUVDLEVBQUFBLEtBQUssRUFBRSxnREFKVDtBQUtFQyxFQUFBQSxJQUFJLEVBQUUsTUFMUjtBQU1FQyxFQUFBQSxXQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFTixFQUFBQSxTQUFTLEVBQUUsT0FEYjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsT0FGUjtBQUdFQyxFQUFBQSxHQUFHLEVBQUVBLEdBQUcsSUFBSUE7QUFBQUE7QUFBQUE7QUFBQUEsV0FBQUEsR0FBRztBQUFBLEdBSGpCO0FBSUVHLEVBQUFBLElBQUksRUFBRSxLQUpSO0FBS0VDLEVBQUFBLFdBQVcsRUFBRTtBQUxmLENBVG9CLEVBZ0JwQjtBQUNFTixFQUFBQSxTQUFTLEVBQUUsT0FEYjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsUUFGUjtBQUdFQyxFQUFBQSxHQUFHLEVBQUVBLEdBQUcsSUFBSUE7QUFBQUE7QUFBQUE7QUFBQUEsV0FBQUEsR0FBRztBQUFBLEdBSGpCO0FBSUVHLEVBQUFBLElBQUksRUFBRSxNQUpSO0FBS0VDLEVBQUFBLFdBQVcsRUFBRTtBQUxmLENBaEJvQixFQXVCcEI7QUFDRU4sRUFBQUEsU0FBUyxFQUFFLE9BRGI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLE1BRlI7QUFHRUMsRUFBQUEsR0FBRyxFQUFFQSxHQUFHLElBQUlBO0FBQUFBO0FBQUFBO0FBQUFBLFdBQUFBLEdBQUc7QUFBQSxHQUhqQjtBQUlFRyxFQUFBQSxJQUFJLEVBQUUsTUFKUjtBQUtFQyxFQUFBQSxXQUFXLEVBQUU7QUFMZixDQXZCb0IsRUE4QnBCO0FBQ0VOLEVBQUFBLFNBQVMsRUFBRSxPQURiO0FBRUVDLEVBQUFBLElBQUksRUFBRSxPQUZSO0FBR0VDLEVBQUFBLEdBQUcsRUFBRUEsR0FBRyxJQUFJQTtBQUFBQTtBQUFBQTtBQUFBQSxXQUFBQSxHQUFHO0FBQUEsR0FIakI7QUFJRUksRUFBQUEsV0FBVyxFQUFFO0FBSmYsQ0E5Qm9CLEVBb0NwQjtBQUNFTixFQUFBQSxTQUFTLEVBQUUsT0FEYjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsS0FGUjtBQUdFQyxFQUFBQSxHQUFHLEVBQUVBLEdBQUcsSUFBSUE7QUFBQUE7QUFBQUE7QUFBQUEsV0FBQUEsR0FBRztBQUFBLEdBSGpCO0FBSUVJLEVBQUFBLFdBQVcsRUFBRTtBQUpmLENBcENvQixDQUFILENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gW1xyXG4gIHtcclxuICAgIGZpZWxkVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgbmFtZTogXCJjb21wYW55TmFtZVwiLFxyXG4gICAgcmVmOiByZWYgPT4gcmVmKHsgcmVxdWlyZWQ6IHRydWUgfSksXHJcbiAgICBlcnJvcjogXCJGaXJzdCAmIExhc3QgTmFtZSBvciBDb21wYW55IE5hbWUgaXMgcmVxdWlyZWQuXCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIk5hbWVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGRUeXBlOiBcImlucHV0XCIsXHJcbiAgICBuYW1lOiBcInBob25lXCIsXHJcbiAgICByZWY6IHJlZiA9PiByZWYsXHJcbiAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiUGhvbmVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGRUeXBlOiBcImlucHV0XCIsXHJcbiAgICBuYW1lOiBcInN0cmVldFwiLFxyXG4gICAgcmVmOiByZWYgPT4gcmVmLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJTdHJlZXRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGRUeXBlOiBcImlucHV0XCIsXHJcbiAgICBuYW1lOiBcImNpdHlcIixcclxuICAgIHJlZjogcmVmID0+IHJlZixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiQ2l0eVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZFR5cGU6IFwiaW5wdXRcIixcclxuICAgIG5hbWU6IFwic3RhdGVcIixcclxuICAgIHJlZjogcmVmID0+IHJlZixcclxuICAgIHBsYWNlaG9sZGVyOiBcIlN0YXRlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgbmFtZTogXCJ6aXBcIixcclxuICAgIHJlZjogcmVmID0+IHJlZixcclxuICAgIHBsYWNlaG9sZGVyOiBcIlpJUCBDb2RlXCJcclxuICB9XHJcbl1cclxuIl19