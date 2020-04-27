function cov_10mppat64d() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/utils/firebase.js";
  var hash = "30133934f9834e189c2bd340205306917d836a7b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/utils/firebase.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "1": {
        start: {
          line: 14,
          column: 30
        },
        end: {
          line: 14,
          column: 68
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "30133934f9834e189c2bd340205306917d836a7b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_10mppat64d = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_10mppat64d();
import firebase from "firebase";
cov_10mppat64d().s[0]++;
firebase.initializeApp({
  apiKey: "AIzaSyCoCWGv8gUwxDG6Ayw4V852YaxCULFpkqM",
  authDomain: "schematic-capture.firebaseapp.com",
  databaseURL: "https://schematic-capture.firebaseio.com",
  projectId: "schematic-capture",
  storageBucket: "schematic-capture.appspot.com",
  messagingSenderId: "138524710398",
  appId: "1:138524710398:web:375f6526813261cdda1caf",
  measurementId: "G-NHPZRLZZ2F"
});
export const GoogleProvider = (cov_10mppat64d().s[1]++, new firebase.auth.GoogleAuthProvider());
export default firebase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkdvb2dsZVByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFQLE1BQXFCLFVBQXJCOztBQUVBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUI7QUFDckJDLEVBQUFBLE1BQU0sRUFBRSx5Q0FEYTtBQUVyQkMsRUFBQUEsVUFBVSxFQUFFLG1DQUZTO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsMENBSFE7QUFJckJDLEVBQUFBLFNBQVMsRUFBRSxtQkFKVTtBQUtyQkMsRUFBQUEsYUFBYSxFQUFFLCtCQUxNO0FBTXJCQyxFQUFBQSxpQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxFQUFBQSxLQUFLLEVBQUUsMkNBUGM7QUFRckJDLEVBQUFBLGFBQWEsRUFBRTtBQVJNLENBQXZCO0FBV0EsT0FBTyxNQUFNQyxjQUFjLDZCQUFHLElBQUlWLFFBQVEsQ0FBQ1csSUFBVCxDQUFjQyxrQkFBbEIsRUFBSCxDQUFwQjtBQUVQLGVBQWVaLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5cbmZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICBhcGlLZXk6IFwiQUl6YVN5Q29DV0d2OGdVd3hERzZBeXc0Vjg1MllheENVTEZwa3FNXCIsXG4gIGF1dGhEb21haW46IFwic2NoZW1hdGljLWNhcHR1cmUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2NoZW1hdGljLWNhcHR1cmUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInNjaGVtYXRpYy1jYXB0dXJlXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2NoZW1hdGljLWNhcHR1cmUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTM4NTI0NzEwMzk4XCIsXG4gIGFwcElkOiBcIjE6MTM4NTI0NzEwMzk4OndlYjozNzVmNjUyNjgxMzI2MWNkZGExY2FmXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1OSFBaUkxaWjJGXCJcbn0pO1xuXG5leHBvcnQgY29uc3QgR29vZ2xlUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXX0=