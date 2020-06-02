function cov_17m3cnsozb() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/dashboardReducer.js";
  var hash = "0745abec0a5be7409d5c3208f477750cab4b454e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/reducers/dashboardReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 11
        }
      },
      "1": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 25
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "3": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 66,
          column: 3
        }
      },
      "4": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 28,
          column: 8
        }
      },
      "5": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 33,
          column: 8
        }
      },
      "6": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 38,
          column: 8
        }
      },
      "7": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 43,
          column: 8
        }
      },
      "8": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 44
        }
      },
      "9": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 34
        }
      },
      "10": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 53,
          column: 8
        }
      },
      "11": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 58,
          column: 8
        }
      },
      "12": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 63,
          column: 8
        }
      },
      "13": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 25
          },
          end: {
            line: 22,
            column: 26
          }
        },
        loc: {
          start: {
            line: 22,
            column: 56
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 26
          },
          end: {
            line: 22,
            column: 43
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 22,
            column: 34
          },
          end: {
            line: 22,
            column: 43
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 24,
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
            column: 8
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 38,
            column: 8
          }
        }, {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 8
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 53,
            column: 8
          }
        }, {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 58,
            column: 8
          }
        }, {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 63,
            column: 8
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 65,
            column: 19
          }
        }],
        line: 23
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
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0745abec0a5be7409d5c3208f477750cab4b454e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_17m3cnsozb = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_17m3cnsozb();
import { actions } from "../actions/dashboardActions";
const {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET,
  UPDATE_CURRENT_PROJECT_NAME
} = (cov_17m3cnsozb().s[0]++, actions);
const initState = (cov_17m3cnsozb().s[1]++, {
  clients: [],
  currentProjects: [],
  currentClient: null,
  currentProject: null,
  currentJobsheets: [],
  currentJobsheet: null
});
cov_17m3cnsozb().s[2]++;

const dashboardReducer = (state = (cov_17m3cnsozb().b[0][0]++, initState), action) => {
  cov_17m3cnsozb().f[0]++;
  cov_17m3cnsozb().s[3]++;

  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      cov_17m3cnsozb().b[1][0]++;
      cov_17m3cnsozb().s[4]++;
      return { ...state,
        clients: action.payload
      };

    case SET_CURRENT_CLIENT:
      cov_17m3cnsozb().b[1][1]++;
      cov_17m3cnsozb().s[5]++;
      return { ...state,
        currentClient: action.payload
      };

    case SET_CURRENT_PROJECTS:
      cov_17m3cnsozb().b[1][2]++;
      cov_17m3cnsozb().s[6]++;
      return { ...state,
        currentProjects: action.payload
      };

    case SET_CURRENT_PROJECT:
      cov_17m3cnsozb().b[1][3]++;
      cov_17m3cnsozb().s[7]++;
      return { ...state,
        currentProject: action.payload
      };

    case UPDATE_CURRENT_PROJECT_NAME:
      cov_17m3cnsozb().b[1][4]++;
      cov_17m3cnsozb().s[8]++;
      console.log("update current project");
      cov_17m3cnsozb().s[9]++;
      console.log(action.payload);
      cov_17m3cnsozb().s[10]++;
      return { ...state,
        currentProject: { ...state.currentProject,
          name: action.payload
        }
      };

    case SET_CURRENT_JOBSHEETS:
      cov_17m3cnsozb().b[1][5]++;
      cov_17m3cnsozb().s[11]++;
      return { ...state,
        currentJobsheets: action.payload
      };

    case SET_CURRENT_JOBSHEET:
      cov_17m3cnsozb().b[1][6]++;
      cov_17m3cnsozb().s[12]++;
      return { ...state,
        currentJobsheet: action.payload
      };

    default:
      cov_17m3cnsozb().b[1][7]++;
      cov_17m3cnsozb().s[13]++;
      return state;
  }
};

export default dashboardReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZFJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkZFVENIX0NMSUVOVFNfU1VDQ0VTUyIsIlNFVF9DVVJSRU5UX0NMSUVOVCIsIlNFVF9DVVJSRU5UX1BST0pFQ1RTIiwiU0VUX0NVUlJFTlRfUFJPSkVDVCIsIlNFVF9DVVJSRU5UX0pPQlNIRUVUUyIsIlNFVF9DVVJSRU5UX0pPQlNIRUVUIiwiVVBEQVRFX0NVUlJFTlRfUFJPSkVDVF9OQU1FIiwiaW5pdFN0YXRlIiwiY2xpZW50cyIsImN1cnJlbnRQcm9qZWN0cyIsImN1cnJlbnRDbGllbnQiLCJjdXJyZW50UHJvamVjdCIsImN1cnJlbnRKb2JzaGVldHMiLCJjdXJyZW50Sm9ic2hlZXQiLCJkYXNoYm9hcmRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFULFFBQXdCLDZCQUF4QjtBQUVBLE1BQU07QUFDSkMsRUFBQUEscUJBREk7QUFFSkMsRUFBQUEsa0JBRkk7QUFHSkMsRUFBQUEsb0JBSEk7QUFJSkMsRUFBQUEsbUJBSkk7QUFLSkMsRUFBQUEscUJBTEk7QUFNSkMsRUFBQUEsb0JBTkk7QUFPSkMsRUFBQUE7QUFQSSw4QkFRRlAsT0FSRSxDQUFOO0FBVUEsTUFBTVEsU0FBUyw2QkFBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFLEVBRE87QUFFaEJDLEVBQUFBLGVBQWUsRUFBRSxFQUZEO0FBR2hCQyxFQUFBQSxhQUFhLEVBQUUsSUFIQztBQUloQkMsRUFBQUEsY0FBYyxFQUFFLElBSkE7QUFLaEJDLEVBQUFBLGdCQUFnQixFQUFFLEVBTEY7QUFNaEJDLEVBQUFBLGVBQWUsRUFBRTtBQU5ELENBQUgsQ0FBZjs7O0FBU0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsS0FBSyxnQ0FBR1IsU0FBSCxDQUFOLEVBQW9CUyxNQUFwQixLQUErQjtBQUFBO0FBQUE7O0FBQ3RELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtqQixxQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR2UsS0FERTtBQUVMUCxRQUFBQSxPQUFPLEVBQUVRLE1BQU0sQ0FBQ0U7QUFGWCxPQUFQOztBQUlGLFNBQUtqQixrQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR2MsS0FERTtBQUVMTCxRQUFBQSxhQUFhLEVBQUVNLE1BQU0sQ0FBQ0U7QUFGakIsT0FBUDs7QUFJRixTQUFLaEIsb0JBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdhLEtBREU7QUFFTE4sUUFBQUEsZUFBZSxFQUFFTyxNQUFNLENBQUNFO0FBRm5CLE9BQVA7O0FBSUYsU0FBS2YsbUJBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdZLEtBREU7QUFFTEosUUFBQUEsY0FBYyxFQUFFSyxNQUFNLENBQUNFO0FBRmxCLE9BQVA7O0FBSUYsU0FBS1osMkJBQUw7QUFBQTtBQUFBO0FBQ0VhLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBREY7QUFFRUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0UsT0FBbkI7QUFGRjtBQUdFLGFBQU8sRUFDTCxHQUFHSCxLQURFO0FBRUxKLFFBQUFBLGNBQWMsRUFBRSxFQUNkLEdBQUdJLEtBQUssQ0FBQ0osY0FESztBQUVkVSxVQUFBQSxJQUFJLEVBQUVMLE1BQU0sQ0FBQ0U7QUFGQztBQUZYLE9BQVA7O0FBT0YsU0FBS2QscUJBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdXLEtBREU7QUFFTEgsUUFBQUEsZ0JBQWdCLEVBQUVJLE1BQU0sQ0FBQ0U7QUFGcEIsT0FBUDs7QUFJRixTQUFLYixvQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR1UsS0FERTtBQUVMRixRQUFBQSxlQUFlLEVBQUVHLE1BQU0sQ0FBQ0U7QUFGbkIsT0FBUDs7QUFJRjtBQUFBO0FBQUE7QUFDRSxhQUFPSCxLQUFQO0FBMUNKO0FBNENELENBN0NEOztBQStDQSxlQUFlRCxnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9kYXNoYm9hcmRBY3Rpb25zXCI7XG5cbmNvbnN0IHtcbiAgRkVUQ0hfQ0xJRU5UU19TVUNDRVNTLFxuICBTRVRfQ1VSUkVOVF9DTElFTlQsXG4gIFNFVF9DVVJSRU5UX1BST0pFQ1RTLFxuICBTRVRfQ1VSUkVOVF9QUk9KRUNULFxuICBTRVRfQ1VSUkVOVF9KT0JTSEVFVFMsXG4gIFNFVF9DVVJSRU5UX0pPQlNIRUVULFxuICBVUERBVEVfQ1VSUkVOVF9QUk9KRUNUX05BTUVcbn0gPSBhY3Rpb25zO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGNsaWVudHM6IFtdLFxuICBjdXJyZW50UHJvamVjdHM6IFtdLFxuICBjdXJyZW50Q2xpZW50OiBudWxsLFxuICBjdXJyZW50UHJvamVjdDogbnVsbCxcbiAgY3VycmVudEpvYnNoZWV0czogW10sXG4gIGN1cnJlbnRKb2JzaGVldDogbnVsbFxufTtcblxuY29uc3QgZGFzaGJvYXJkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0NMSUVOVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9DVVJSRU5UX0NMSUVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50Q2xpZW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1BST0pFQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9QUk9KRUNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9DVVJSRU5UX1BST0pFQ1RfTkFNRTpcbiAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGN1cnJlbnQgcHJvamVjdFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50UHJvamVjdDoge1xuICAgICAgICAgIC4uLnN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9KT0JTSEVFVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudEpvYnNoZWV0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9KT0JTSEVFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50Sm9ic2hlZXQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJlZHVjZXI7XG4iXX0=