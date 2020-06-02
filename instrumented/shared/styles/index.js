function cov_19cvvndaba() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/styles/index.js";
  var hash = "52481e11e9ffe531e490049d5d3851e32f212cd8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/styles/index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "1": {
        start: {
          line: 48,
          column: 20
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "2": {
        start: {
          line: 52,
          column: 16
        },
        end: {
          line: 52,
          column: 40
        }
      },
      "3": {
        start: {
          line: 55,
          column: 21
        },
        end: {
          line: 97,
          column: 1
        }
      },
      "4": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 59,
          column: 15
        }
      },
      "5": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 63,
          column: 15
        }
      },
      "6": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 67,
          column: 15
        }
      },
      "7": {
        start: {
          line: 79,
          column: 41
        },
        end: {
          line: 89,
          column: 3
        }
      },
      "8": {
        start: {
          line: 90,
          column: 31
        },
        end: {
          line: 96,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        loc: {
          start: {
            line: 52,
            column: 16
          },
          end: {
            line: 52,
            column: 40
          }
        },
        line: 52
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 56,
            column: 10
          },
          end: {
            line: 56,
            column: 11
          }
        },
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 59,
            column: 15
          }
        },
        line: 57
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 60,
            column: 11
          },
          end: {
            line: 60,
            column: 12
          }
        },
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 15
          }
        },
        line: 61
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 64,
            column: 9
          }
        },
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 15
          }
        },
        line: 65
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 79,
            column: 9
          }
        },
        loc: {
          start: {
            line: 79,
            column: 41
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 79
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 90,
            column: 19
          },
          end: {
            line: 90,
            column: 20
          }
        },
        loc: {
          start: {
            line: 90,
            column: 31
          },
          end: {
            line: 96,
            column: 1
          }
        },
        line: 90
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 79,
            column: 22
          },
          end: {
            line: 79,
            column: 36
          }
        }],
        line: 79
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "52481e11e9ffe531e490049d5d3851e32f212cd8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_19cvvndaba = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_19cvvndaba();
import { css } from "styled-components";
import Color from "color";
export const color = (cov_19cvvndaba().s[0]++, {
  // Color system
  gray100: "#d5d8dc",
  // Iron
  gray200: "#939598",
  // Oslo Gray
  gray300: "#424244",
  // Ship Gray
  gray400: "#231f20",
  // Thunder
  // Theme Colors
  primary: "#1165a8",
  // Tory Blue
  primaryDark: "#072f50",
  // Tarawera
  primaryLight: "#8dcdff",
  // Anakiwa
  secondary: "#d5d8dc",
  // Iron
  success: "#28a745",
  // Green
  warning: "#ffc107",
  // Orange
  danger: "#dc3545",
  // Danger
  // Background
  //
  // Setting background elements.
  // backgroundBody: "#424244",
  backgroundBody: "#FFFFFF",
  backgroundLight: "#ffffff",
  // Text
  //
  // Style text elements.
  textDark: "#343a40",
  textMedium: "#5e6C84",
  // textLight: "#f8f9fa",
  textLight: "#21242C",
  textLink: "#1165a8",
  // Components
  //
  // Define common styles and more.
  borderColor: "#565658",
  borderInputFocus: "#1165a8",
  // Forms
  inputBackground: "#ffffff",
  inputColor: "#495057"
});
export const font = (cov_19cvvndaba().s[1]++, {
  regular: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: normal;',
  bold: 'font-family: "Open Sans"; font-weight: 700;',
  size: size => {
    cov_19cvvndaba().f[0]++;
    cov_19cvvndaba().s[2]++;
    return `font-size: ${size}rem;`;
  }
});
export const mixin = (cov_19cvvndaba().s[3]++, {
  darken: (colorValue, amount) => {
    cov_19cvvndaba().f[1]++;
    cov_19cvvndaba().s[4]++;
    return Color(colorValue).darken(amount).string();
  },
  lighten: (colorValue, amount) => {
    cov_19cvvndaba().f[2]++;
    cov_19cvvndaba().s[5]++;
    return Color(colorValue).lighten(amount).string();
  },
  rgba: (colorValue, opacity) => {
    cov_19cvvndaba().f[3]++;
    cov_19cvvndaba().s[6]++;
    return Color(colorValue).alpha(opacity).string();
  },
  boxShadowMedium: css`
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
      0 10px 30px ${color.backgroundBody};
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  link: (colorValue = (cov_19cvvndaba().b[0][0]++, color.textLink)) => {
    cov_19cvvndaba().f[4]++;
    cov_19cvvndaba().s[7]++;
    return css`
    cursor: pointer;
    color: ${colorValue};
    ${font.regular}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `;
  },
  backgroundImage: imageURL => {
    cov_19cvvndaba().f[5]++;
    cov_19cvvndaba().s[8]++;
    return css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
`;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNzcyIsIkNvbG9yIiwiY29sb3IiLCJncmF5MTAwIiwiZ3JheTIwMCIsImdyYXkzMDAiLCJncmF5NDAwIiwicHJpbWFyeSIsInByaW1hcnlEYXJrIiwicHJpbWFyeUxpZ2h0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJiYWNrZ3JvdW5kQm9keSIsImJhY2tncm91bmRMaWdodCIsInRleHREYXJrIiwidGV4dE1lZGl1bSIsInRleHRMaWdodCIsInRleHRMaW5rIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJJbnB1dEZvY3VzIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXRDb2xvciIsImZvbnQiLCJyZWd1bGFyIiwiYm9sZCIsInNpemUiLCJtaXhpbiIsImRhcmtlbiIsImNvbG9yVmFsdWUiLCJhbW91bnQiLCJzdHJpbmciLCJsaWdodGVuIiwicmdiYSIsIm9wYWNpdHkiLCJhbHBoYSIsImJveFNoYWRvd01lZGl1bSIsImNvdmVyIiwibGluayIsImJhY2tncm91bmRJbWFnZSIsImltYWdlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxHQUFULFFBQW9CLG1CQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxPQUFP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IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCJjb2xvclwiO1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIC8vIENvbG9yIHN5c3RlbVxuICBncmF5MTAwOiBcIiNkNWQ4ZGNcIiwgLy8gSXJvblxuICBncmF5MjAwOiBcIiM5Mzk1OThcIiwgLy8gT3NsbyBHcmF5XG4gIGdyYXkzMDA6IFwiIzQyNDI0NFwiLCAvLyBTaGlwIEdyYXlcbiAgZ3JheTQwMDogXCIjMjMxZjIwXCIsIC8vIFRodW5kZXJcblxuICAvLyBUaGVtZSBDb2xvcnNcbiAgcHJpbWFyeTogXCIjMTE2NWE4XCIsIC8vIFRvcnkgQmx1ZVxuICBwcmltYXJ5RGFyazogXCIjMDcyZjUwXCIsIC8vIFRhcmF3ZXJhXG4gIHByaW1hcnlMaWdodDogXCIjOGRjZGZmXCIsIC8vIEFuYWtpd2FcbiAgc2Vjb25kYXJ5OiBcIiNkNWQ4ZGNcIiwgLy8gSXJvblxuICBzdWNjZXNzOiBcIiMyOGE3NDVcIiwgLy8gR3JlZW5cbiAgd2FybmluZzogXCIjZmZjMTA3XCIsIC8vIE9yYW5nZVxuICBkYW5nZXI6IFwiI2RjMzU0NVwiLCAvLyBEYW5nZXJcblxuICAvLyBCYWNrZ3JvdW5kXG4gIC8vXG4gIC8vIFNldHRpbmcgYmFja2dyb3VuZCBlbGVtZW50cy5cbiAgLy8gYmFja2dyb3VuZEJvZHk6IFwiIzQyNDI0NFwiLFxuICBiYWNrZ3JvdW5kQm9keTogXCIjRkZGRkZGXCIsXG5cbiAgYmFja2dyb3VuZExpZ2h0OiBcIiNmZmZmZmZcIixcblxuICAvLyBUZXh0XG4gIC8vXG4gIC8vIFN0eWxlIHRleHQgZWxlbWVudHMuXG4gIHRleHREYXJrOiBcIiMzNDNhNDBcIixcbiAgdGV4dE1lZGl1bTogXCIjNWU2Qzg0XCIsXG4gIC8vIHRleHRMaWdodDogXCIjZjhmOWZhXCIsXG4gIHRleHRMaWdodDogXCIjMjEyNDJDXCIsXG4gIHRleHRMaW5rOiBcIiMxMTY1YThcIixcblxuICAvLyBDb21wb25lbnRzXG4gIC8vXG4gIC8vIERlZmluZSBjb21tb24gc3R5bGVzIGFuZCBtb3JlLlxuICBib3JkZXJDb2xvcjogXCIjNTY1NjU4XCIsXG4gIGJvcmRlcklucHV0Rm9jdXM6IFwiIzExNjVhOFwiLFxuXG4gIC8vIEZvcm1zXG4gIGlucHV0QmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gIGlucHV0Q29sb3I6IFwiIzQ5NTA1N1wiXG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IHtcbiAgcmVndWxhcjpcbiAgICAnZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLFxuICBib2xkOiAnZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7IGZvbnQtd2VpZ2h0OiA3MDA7JyxcbiAgc2l6ZTogc2l6ZSA9PiBgZm9udC1zaXplOiAke3NpemV9cmVtO2Bcbn07XG5cbmV4cG9ydCBjb25zdCBtaXhpbiA9IHtcbiAgZGFya2VuOiAoY29sb3JWYWx1ZSwgYW1vdW50KSA9PlxuICAgIENvbG9yKGNvbG9yVmFsdWUpXG4gICAgICAuZGFya2VuKGFtb3VudClcbiAgICAgIC5zdHJpbmcoKSxcbiAgbGlnaHRlbjogKGNvbG9yVmFsdWUsIGFtb3VudCkgPT5cbiAgICBDb2xvcihjb2xvclZhbHVlKVxuICAgICAgLmxpZ2h0ZW4oYW1vdW50KVxuICAgICAgLnN0cmluZygpLFxuICByZ2JhOiAoY29sb3JWYWx1ZSwgb3BhY2l0eSkgPT5cbiAgICBDb2xvcihjb2xvclZhbHVlKVxuICAgICAgLmFscGhhKG9wYWNpdHkpXG4gICAgICAuc3RyaW5nKCksXG4gIGJveFNoYWRvd01lZGl1bTogY3NzYFxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICAwIDEwcHggMzBweCAke2NvbG9yLmJhY2tncm91bmRCb2R5fTtcbiAgYCxcbiAgY292ZXI6IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICBgLFxuICBsaW5rOiAoY29sb3JWYWx1ZSA9IGNvbG9yLnRleHRMaW5rKSA9PiBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke2NvbG9yVmFsdWV9O1xuICAgICR7Zm9udC5yZWd1bGFyfVxuICAgICY6aG92ZXIsICY6dmlzaXRlZCwgJjphY3RpdmUge1xuICAgICAgY29sb3I6ICR7Y29sb3JWYWx1ZX07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICBgLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlVVJMID0+IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2ltYWdlVVJMfVwiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmJhY2tncm91bmRMaWdodH07XG5gXG59O1xuIl19