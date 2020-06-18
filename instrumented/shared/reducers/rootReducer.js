function cov_2ds0vvu7ho() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\rootReducer.js";
  var hash = "cab2ed2054a950b7387a63a6f86f055f99a0be39";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\reducers\\rootReducer.js",
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
    hash: "cab2ed2054a950b7387a63a6f86f055f99a0be39"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ds0vvu7ho = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ds0vvu7ho();
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import dashboardReducer from "./dashboardReducer";
import { combineReducers } from "redux";
const rootReducer = (cov_2ds0vvu7ho().s[0]++, combineReducers({
  app: appReducer,
  auth: authReducer,
  dashboard: dashboardReducer
}));
export default rootReducer; // the key name will be the data property on the state object
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3RSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImF1dGhSZWR1Y2VyIiwiYXBwUmVkdWNlciIsImRhc2hib2FyZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImFwcCIsImF1dGgiLCJkYXNoYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsV0FBUCxNQUF3QixlQUF4QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxTQUFTQyxlQUFULFFBQWdDLE9BQWhDO0FBRUEsTUFBTUMsV0FBVyw2QkFBR0QsZUFBZSxDQUFDO0FBQ2xDRSxFQUFBQSxHQUFHLEVBQUVKLFVBRDZCO0FBRWxDSyxFQUFBQSxJQUFJLEVBQUVOLFdBRjRCO0FBR2xDTyxFQUFBQSxTQUFTLEVBQUVMO0FBSHVCLENBQUQsQ0FBbEIsQ0FBakI7QUFNQSxlQUFlRSxXQUFmLEMsQ0FFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoUmVkdWNlciBmcm9tIFwiLi9hdXRoUmVkdWNlclwiO1xyXG5pbXBvcnQgYXBwUmVkdWNlciBmcm9tIFwiLi9hcHBSZWR1Y2VyXCI7XHJcbmltcG9ydCBkYXNoYm9hcmRSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gIGRhc2hib2FyZDogZGFzaGJvYXJkUmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuLy8gdGhlIGtleSBuYW1lIHdpbGwgYmUgdGhlIGRhdGEgcHJvcGVydHkgb24gdGhlIHN0YXRlIG9iamVjdFxyXG4iXX0=