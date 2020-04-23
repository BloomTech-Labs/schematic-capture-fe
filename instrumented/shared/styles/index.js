function cov_1x9hp3rdck() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/styles/index.js";
  var hash = "1b4cf03e7aca1c7fa01349d2af8c3b60a67bee2a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/styles/index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "1": {
        start: {
          line: 45,
          column: 20
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "2": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 40
        }
      },
      "3": {
        start: {
          line: 52,
          column: 21
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "4": {
        start: {
          line: 56,
          column: 28
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "5": {
        start: {
          line: 60,
          column: 21
        },
        end: {
          line: 102,
          column: 1
        }
      },
      "6": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 64,
          column: 15
        }
      },
      "7": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 68,
          column: 15
        }
      },
      "8": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 72,
          column: 15
        }
      },
      "9": {
        start: {
          line: 84,
          column: 41
        },
        end: {
          line: 94,
          column: 3
        }
      },
      "10": {
        start: {
          line: 95,
          column: 31
        },
        end: {
          line: 101,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 49,
            column: 9
          }
        },
        loc: {
          start: {
            line: 49,
            column: 16
          },
          end: {
            line: 49,
            column: 40
          }
        },
        line: 49
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 61,
            column: 10
          },
          end: {
            line: 61,
            column: 11
          }
        },
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 15
          }
        },
        line: 62
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 65,
            column: 11
          },
          end: {
            line: 65,
            column: 12
          }
        },
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 68,
            column: 15
          }
        },
        line: 66
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 69,
            column: 9
          }
        },
        loc: {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 72,
            column: 15
          }
        },
        line: 70
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        },
        loc: {
          start: {
            line: 84,
            column: 41
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 84
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 95,
            column: 19
          },
          end: {
            line: 95,
            column: 20
          }
        },
        loc: {
          start: {
            line: 95,
            column: 31
          },
          end: {
            line: 101,
            column: 1
          }
        },
        line: 95
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 84,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 84,
            column: 22
          },
          end: {
            line: 84,
            column: 36
          }
        }],
        line: 84
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
      "10": 0
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
    hash: "1b4cf03e7aca1c7fa01349d2af8c3b60a67bee2a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1x9hp3rdck = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1x9hp3rdck();
import { css } from "styled-components";
import Color from "color";
export const color = (cov_1x9hp3rdck().s[0]++, {
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
  backgroundBody: "#424244",
  backgroundLight: "#ffffff",
  // Text
  //
  // Style text elements.
  textDark: "#343a40",
  textMedium: "#5e6C84",
  textLight: "#f8f9fa",
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
export const font = (cov_1x9hp3rdck().s[1]++, {
  regular: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: normal;',
  bold: 'font-family: "Open Sans"; font-weight: 700;',
  size: size => {
    cov_1x9hp3rdck().f[0]++;
    cov_1x9hp3rdck().s[2]++;
    return `font-size: ${size}rem;`;
  }
});
export const sizes = (cov_1x9hp3rdck().s[3]++, {
  navbarWidth: 58
});
export const zIndexValues = (cov_1x9hp3rdck().s[4]++, {
  navbar: 100
});
export const mixin = (cov_1x9hp3rdck().s[5]++, {
  darken: (colorValue, amount) => {
    cov_1x9hp3rdck().f[1]++;
    cov_1x9hp3rdck().s[6]++;
    return Color(colorValue).darken(amount).string();
  },
  lighten: (colorValue, amount) => {
    cov_1x9hp3rdck().f[2]++;
    cov_1x9hp3rdck().s[7]++;
    return Color(colorValue).lighten(amount).string();
  },
  rgba: (colorValue, opacity) => {
    cov_1x9hp3rdck().f[3]++;
    cov_1x9hp3rdck().s[8]++;
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
  link: (colorValue = (cov_1x9hp3rdck().b[0][0]++, color.textLink)) => {
    cov_1x9hp3rdck().f[4]++;
    cov_1x9hp3rdck().s[9]++;
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
    cov_1x9hp3rdck().f[5]++;
    cov_1x9hp3rdck().s[10]++;
    return css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
`;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNzcyIsIkNvbG9yIiwiY29sb3IiLCJncmF5MTAwIiwiZ3JheTIwMCIsImdyYXkzMDAiLCJncmF5NDAwIiwicHJpbWFyeSIsInByaW1hcnlEYXJrIiwicHJpbWFyeUxpZ2h0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJiYWNrZ3JvdW5kQm9keSIsImJhY2tncm91bmRMaWdodCIsInRleHREYXJrIiwidGV4dE1lZGl1bSIsInRleHRMaWdodCIsInRleHRMaW5rIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJJbnB1dEZvY3VzIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXRDb2xvciIsImZvbnQiLCJyZWd1bGFyIiwiYm9sZCIsInNpemUiLCJzaXplcyIsIm5hdmJhcldpZHRoIiwiekluZGV4VmFsdWVzIiwibmF2YmFyIiwibWl4aW4iLCJkYXJrZW4iLCJjb2xvclZhbHVlIiwiYW1vdW50Iiwic3RyaW5nIiwibGlnaHRlbiIsInJnYmEiLCJvcGFjaXR5IiwiYWxwaGEiLCJib3hTaGFkb3dNZWRpdW0iLCJjb3ZlciIsImxpbmsiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNDLE9BQVE7O2VBRUpTLFVBQVc7Ozs7O0dBTGU7QUFVdEMsR0FsQ2tCO0FBbUNuQlUsRUFBQUEsZUFBZSxFQUFFQyxRQUFRLElBQUk7QUFBQTtBQUFBO0FBQUEsV0FBQTdDLEdBQUk7NkJBQ042QyxRQUFTOzs7O3dCQUlkM0MsS0FBSyxDQUFDYSxlQUFnQjtDQUxmO0FBTTlCO0FBekNvQixDQUFILENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICAvLyBDb2xvciBzeXN0ZW1cbiAgZ3JheTEwMDogXCIjZDVkOGRjXCIsIC8vIElyb25cbiAgZ3JheTIwMDogXCIjOTM5NTk4XCIsIC8vIE9zbG8gR3JheVxuICBncmF5MzAwOiBcIiM0MjQyNDRcIiwgLy8gU2hpcCBHcmF5XG4gIGdyYXk0MDA6IFwiIzIzMWYyMFwiLCAvLyBUaHVuZGVyXG5cbiAgLy8gVGhlbWUgQ29sb3JzXG4gIHByaW1hcnk6IFwiIzExNjVhOFwiLCAvLyBUb3J5IEJsdWVcbiAgcHJpbWFyeURhcms6IFwiIzA3MmY1MFwiLCAvLyBUYXJhd2VyYVxuICBwcmltYXJ5TGlnaHQ6IFwiIzhkY2RmZlwiLCAvLyBBbmFraXdhXG4gIHNlY29uZGFyeTogXCIjZDVkOGRjXCIsIC8vIElyb25cbiAgc3VjY2VzczogXCIjMjhhNzQ1XCIsIC8vIEdyZWVuXG4gIHdhcm5pbmc6IFwiI2ZmYzEwN1wiLCAvLyBPcmFuZ2VcbiAgZGFuZ2VyOiBcIiNkYzM1NDVcIiwgLy8gRGFuZ2VyXG5cbiAgLy8gQmFja2dyb3VuZFxuICAvL1xuICAvLyBTZXR0aW5nIGJhY2tncm91bmQgZWxlbWVudHMuXG4gIGJhY2tncm91bmRCb2R5OiBcIiM0MjQyNDRcIixcbiAgYmFja2dyb3VuZExpZ2h0OiBcIiNmZmZmZmZcIixcblxuICAvLyBUZXh0XG4gIC8vXG4gIC8vIFN0eWxlIHRleHQgZWxlbWVudHMuXG4gIHRleHREYXJrOiBcIiMzNDNhNDBcIixcbiAgdGV4dE1lZGl1bTogXCIjNWU2Qzg0XCIsXG4gIHRleHRMaWdodDogXCIjZjhmOWZhXCIsXG4gIHRleHRMaW5rOiBcIiMxMTY1YThcIixcblxuICAvLyBDb21wb25lbnRzXG4gIC8vXG4gIC8vIERlZmluZSBjb21tb24gc3R5bGVzIGFuZCBtb3JlLlxuICBib3JkZXJDb2xvcjogXCIjNTY1NjU4XCIsXG4gIGJvcmRlcklucHV0Rm9jdXM6IFwiIzExNjVhOFwiLFxuXG4gIC8vIEZvcm1zXG4gIGlucHV0QmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gIGlucHV0Q29sb3I6IFwiIzQ5NTA1N1wiXG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IHtcbiAgcmVndWxhcjpcbiAgICAnZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLFxuICBib2xkOiAnZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7IGZvbnQtd2VpZ2h0OiA3MDA7JyxcbiAgc2l6ZTogc2l6ZSA9PiBgZm9udC1zaXplOiAke3NpemV9cmVtO2Bcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplcyA9IHtcbiAgbmF2YmFyV2lkdGg6IDU4XG59O1xuXG5leHBvcnQgY29uc3QgekluZGV4VmFsdWVzID0ge1xuICBuYXZiYXI6IDEwMFxufTtcblxuZXhwb3J0IGNvbnN0IG1peGluID0ge1xuICBkYXJrZW46IChjb2xvclZhbHVlLCBhbW91bnQpID0+XG4gICAgQ29sb3IoY29sb3JWYWx1ZSlcbiAgICAgIC5kYXJrZW4oYW1vdW50KVxuICAgICAgLnN0cmluZygpLFxuICBsaWdodGVuOiAoY29sb3JWYWx1ZSwgYW1vdW50KSA9PlxuICAgIENvbG9yKGNvbG9yVmFsdWUpXG4gICAgICAubGlnaHRlbihhbW91bnQpXG4gICAgICAuc3RyaW5nKCksXG4gIHJnYmE6IChjb2xvclZhbHVlLCBvcGFjaXR5KSA9PlxuICAgIENvbG9yKGNvbG9yVmFsdWUpXG4gICAgICAuYWxwaGEob3BhY2l0eSlcbiAgICAgIC5zdHJpbmcoKSxcbiAgYm94U2hhZG93TWVkaXVtOiBjc3NgXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgIDAgMTBweCAzMHB4ICR7Y29sb3IuYmFja2dyb3VuZEJvZHl9O1xuICBgLFxuICBjb3ZlcjogY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIGAsXG4gIGxpbms6IChjb2xvclZhbHVlID0gY29sb3IudGV4dExpbmspID0+IGNzc2BcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7Y29sb3JWYWx1ZX07XG4gICAgJHtmb250LnJlZ3VsYXJ9XG4gICAgJjpob3ZlciwgJjp2aXNpdGVkLCAmOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHtjb2xvclZhbHVlfTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIGAsXG4gIGJhY2tncm91bmRJbWFnZTogaW1hZ2VVUkwgPT4gY3NzYFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7aW1hZ2VVUkx9XCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYmFja2dyb3VuZExpZ2h0fTtcbmBcbn07XG4iXX0=