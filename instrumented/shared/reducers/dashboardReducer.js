function cov_2ojhr03b3s() {
  var path = "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\shared\\reducers\\dashboardReducer.js";
  var hash = "7d92eda8e01438c11db6152a0eb49d6c5dc83d3c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Scott\\Desktop\\lambda\\schematic-capture-fe\\src\\shared\\reducers\\dashboardReducer.js",
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
    hash: "7d92eda8e01438c11db6152a0eb49d6c5dc83d3c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ojhr03b3s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ojhr03b3s();
import { actions } from "../actions/dashboardActions";
const {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET,
  UPDATE_CURRENT_PROJECT_NAME
} = (cov_2ojhr03b3s().s[0]++, actions);
const initState = (cov_2ojhr03b3s().s[1]++, {
  clients: [],
  currentProjects: [],
  currentClient: null,
  currentProject: null,
  currentJobsheets: [],
  currentJobsheet: null
});
cov_2ojhr03b3s().s[2]++;

const dashboardReducer = (state = (cov_2ojhr03b3s().b[0][0]++, initState), action) => {
  cov_2ojhr03b3s().f[0]++;
  cov_2ojhr03b3s().s[3]++;

  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      cov_2ojhr03b3s().b[1][0]++;
      cov_2ojhr03b3s().s[4]++;
      return { ...state,
        clients: action.payload
      };

    case SET_CURRENT_CLIENT:
      cov_2ojhr03b3s().b[1][1]++;
      cov_2ojhr03b3s().s[5]++;
      return { ...state,
        currentClient: action.payload
      };

    case SET_CURRENT_PROJECTS:
      cov_2ojhr03b3s().b[1][2]++;
      cov_2ojhr03b3s().s[6]++;
      return { ...state,
        currentProjects: action.payload
      };

    case SET_CURRENT_PROJECT:
      cov_2ojhr03b3s().b[1][3]++;
      cov_2ojhr03b3s().s[7]++;
      return { ...state,
        currentProject: action.payload
      };

    case UPDATE_CURRENT_PROJECT_NAME:
      cov_2ojhr03b3s().b[1][4]++;
      cov_2ojhr03b3s().s[8]++;
      console.log("update current project");
      cov_2ojhr03b3s().s[9]++;
      console.log(action.payload);
      cov_2ojhr03b3s().s[10]++;
      return { ...state,
        currentProject: { ...state.currentProject,
          name: action.payload
        }
      };

    case SET_CURRENT_JOBSHEETS:
      cov_2ojhr03b3s().b[1][5]++;
      cov_2ojhr03b3s().s[11]++;
      return { ...state,
        currentJobsheets: action.payload
      };

    case SET_CURRENT_JOBSHEET:
      cov_2ojhr03b3s().b[1][6]++;
      cov_2ojhr03b3s().s[12]++;
      return { ...state,
        currentJobsheet: action.payload
      };

    default:
      cov_2ojhr03b3s().b[1][7]++;
      cov_2ojhr03b3s().s[13]++;
      return state;
  }
};

export default dashboardReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZFJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsIkZFVENIX0NMSUVOVFNfU1VDQ0VTUyIsIlNFVF9DVVJSRU5UX0NMSUVOVCIsIlNFVF9DVVJSRU5UX1BST0pFQ1RTIiwiU0VUX0NVUlJFTlRfUFJPSkVDVCIsIlNFVF9DVVJSRU5UX0pPQlNIRUVUUyIsIlNFVF9DVVJSRU5UX0pPQlNIRUVUIiwiVVBEQVRFX0NVUlJFTlRfUFJPSkVDVF9OQU1FIiwiaW5pdFN0YXRlIiwiY2xpZW50cyIsImN1cnJlbnRQcm9qZWN0cyIsImN1cnJlbnRDbGllbnQiLCJjdXJyZW50UHJvamVjdCIsImN1cnJlbnRKb2JzaGVldHMiLCJjdXJyZW50Sm9ic2hlZXQiLCJkYXNoYm9hcmRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLE9BQVQsUUFBd0IsNkJBQXhCO0FBRUEsTUFBTTtBQUNKQyxFQUFBQSxxQkFESTtBQUVKQyxFQUFBQSxrQkFGSTtBQUdKQyxFQUFBQSxvQkFISTtBQUlKQyxFQUFBQSxtQkFKSTtBQUtKQyxFQUFBQSxxQkFMSTtBQU1KQyxFQUFBQSxvQkFOSTtBQU9KQyxFQUFBQTtBQVBJLDhCQVFGUCxPQVJFLENBQU47QUFVQSxNQUFNUSxTQUFTLDZCQUFHO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUUsRUFETztBQUVoQkMsRUFBQUEsZUFBZSxFQUFFLEVBRkQ7QUFHaEJDLEVBQUFBLGFBQWEsRUFBRSxJQUhDO0FBSWhCQyxFQUFBQSxjQUFjLEVBQUUsSUFKQTtBQUtoQkMsRUFBQUEsZ0JBQWdCLEVBQUUsRUFMRjtBQU1oQkMsRUFBQUEsZUFBZSxFQUFFO0FBTkQsQ0FBSCxDQUFmOzs7QUFTQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDQyxLQUFLLGdDQUFHUixTQUFILENBQU4sRUFBb0JTLE1BQXBCLEtBQStCO0FBQUE7QUFBQTs7QUFDdEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS2pCLHFCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHZSxLQURFO0FBRUxQLFFBQUFBLE9BQU8sRUFBRVEsTUFBTSxDQUFDRTtBQUZYLE9BQVA7O0FBSUYsU0FBS2pCLGtCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHYyxLQURFO0FBRUxMLFFBQUFBLGFBQWEsRUFBRU0sTUFBTSxDQUFDRTtBQUZqQixPQUFQOztBQUlGLFNBQUtoQixvQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR2EsS0FERTtBQUVMTixRQUFBQSxlQUFlLEVBQUVPLE1BQU0sQ0FBQ0U7QUFGbkIsT0FBUDs7QUFJRixTQUFLZixtQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR1ksS0FERTtBQUVMSixRQUFBQSxjQUFjLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGbEIsT0FBUDs7QUFJRixTQUFLWiwyQkFBTDtBQUFBO0FBQUE7QUFDRWEsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFERjtBQUVFRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBTSxDQUFDRSxPQUFuQjtBQUZGO0FBR0UsYUFBTyxFQUNMLEdBQUdILEtBREU7QUFFTEosUUFBQUEsY0FBYyxFQUFFLEVBQ2QsR0FBR0ksS0FBSyxDQUFDSixjQURLO0FBRWRVLFVBQUFBLElBQUksRUFBRUwsTUFBTSxDQUFDRTtBQUZDO0FBRlgsT0FBUDs7QUFPRixTQUFLZCxxQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR1csS0FERTtBQUVMSCxRQUFBQSxnQkFBZ0IsRUFBRUksTUFBTSxDQUFDRTtBQUZwQixPQUFQOztBQUlGLFNBQUtiLG9CQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHVSxLQURFO0FBRUxGLFFBQUFBLGVBQWUsRUFBRUcsTUFBTSxDQUFDRTtBQUZuQixPQUFQOztBQUlGO0FBQUE7QUFBQTtBQUNFLGFBQU9ILEtBQVA7QUExQ0o7QUE0Q0QsQ0E3Q0Q7O0FBK0NBLGVBQWVELGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2Rhc2hib2FyZEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IHtcclxuICBGRVRDSF9DTElFTlRTX1NVQ0NFU1MsXHJcbiAgU0VUX0NVUlJFTlRfQ0xJRU5ULFxyXG4gIFNFVF9DVVJSRU5UX1BST0pFQ1RTLFxyXG4gIFNFVF9DVVJSRU5UX1BST0pFQ1QsXHJcbiAgU0VUX0NVUlJFTlRfSk9CU0hFRVRTLFxyXG4gIFNFVF9DVVJSRU5UX0pPQlNIRUVULFxyXG4gIFVQREFURV9DVVJSRU5UX1BST0pFQ1RfTkFNRVxyXG59ID0gYWN0aW9ucztcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICBjbGllbnRzOiBbXSxcclxuICBjdXJyZW50UHJvamVjdHM6IFtdLFxyXG4gIGN1cnJlbnRDbGllbnQ6IG51bGwsXHJcbiAgY3VycmVudFByb2plY3Q6IG51bGwsXHJcbiAgY3VycmVudEpvYnNoZWV0czogW10sXHJcbiAgY3VycmVudEpvYnNoZWV0OiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBkYXNoYm9hcmRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZFVENIX0NMSUVOVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9DTElFTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudENsaWVudDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfUFJPSkVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9QUk9KRUNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBVUERBVEVfQ1VSUkVOVF9QUk9KRUNUX05BTUU6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGN1cnJlbnQgcHJvamVjdFwiKTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJyZW50UHJvamVjdCxcclxuICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9KT0JTSEVFVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudEpvYnNoZWV0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfSk9CU0hFRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudEpvYnNoZWV0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJlZHVjZXI7XHJcbiJdfQ==