function cov_1799gz8ybj() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/rootReducer.js";
  var hash = "504ceb50e74efc4c530cb4d8c615e4ef05e06cb2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/rootReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 10,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "504ceb50e74efc4c530cb4d8c615e4ef05e06cb2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1799gz8ybj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1799gz8ybj();
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import dashboardReducer from "./dashboardReducer";
import { combineReducers } from "redux";
const rootReducer = (cov_1799gz8ybj().s[0]++, combineReducers({
  app: appReducer,
  auth: authReducer,
  dashboard: dashboardReducer
}));
export default rootReducer; // the key name will be the data property on the state object
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3RSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImF1dGhSZWR1Y2VyIiwiYXBwUmVkdWNlciIsImRhc2hib2FyZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImFwcCIsImF1dGgiLCJkYXNoYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZUFBeEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxPQUFoQztBQUVBLE1BQU1DLFdBQVcsNkJBQUdELGVBQWUsQ0FBQztBQUNsQ0UsRUFBQUEsR0FBRyxFQUFFSixVQUQ2QjtBQUVsQ0ssRUFBQUEsSUFBSSxFQUFFTixXQUY0QjtBQUdsQ08sRUFBQUEsU0FBUyxFQUFFTDtBQUh1QixDQUFELENBQWxCLENBQWpCO0FBTUEsZUFBZUUsV0FBZixDLENBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIjtcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gXCIuL2FwcFJlZHVjZXJcIjtcbmltcG9ydCBkYXNoYm9hcmRSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZFJlZHVjZXJcIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwcDogYXBwUmVkdWNlcixcbiAgYXV0aDogYXV0aFJlZHVjZXIsXG4gIGRhc2hib2FyZDogZGFzaGJvYXJkUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4vLyB0aGUga2V5IG5hbWUgd2lsbCBiZSB0aGUgZGF0YSBwcm9wZXJ0eSBvbiB0aGUgc3RhdGUgb2JqZWN0XG4iXX0=