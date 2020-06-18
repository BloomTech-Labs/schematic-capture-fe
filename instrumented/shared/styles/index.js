function cov_o6ldjtwx0() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\styles\\index.js";
  var hash = "16966421f7c539b40393ca9aa08e2cd0ee7c4809";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\styles\\index.js",
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
    hash: "16966421f7c539b40393ca9aa08e2cd0ee7c4809"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_o6ldjtwx0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_o6ldjtwx0();
import { css } from "styled-components";
import Color from "color";
export const color = (cov_o6ldjtwx0().s[0]++, {
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
export const font = (cov_o6ldjtwx0().s[1]++, {
  regular: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: normal;',
  bold: 'font-family: "Open Sans"; font-weight: 700;',
  size: size => {
    cov_o6ldjtwx0().f[0]++;
    cov_o6ldjtwx0().s[2]++;
    return `font-size: ${size}rem;`;
  }
});
export const mixin = (cov_o6ldjtwx0().s[3]++, {
  darken: (colorValue, amount) => {
    cov_o6ldjtwx0().f[1]++;
    cov_o6ldjtwx0().s[4]++;
    return Color(colorValue).darken(amount).string();
  },
  lighten: (colorValue, amount) => {
    cov_o6ldjtwx0().f[2]++;
    cov_o6ldjtwx0().s[5]++;
    return Color(colorValue).lighten(amount).string();
  },
  rgba: (colorValue, opacity) => {
    cov_o6ldjtwx0().f[3]++;
    cov_o6ldjtwx0().s[6]++;
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
  link: (colorValue = (cov_o6ldjtwx0().b[0][0]++, color.textLink)) => {
    cov_o6ldjtwx0().f[4]++;
    cov_o6ldjtwx0().s[7]++;
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
    cov_o6ldjtwx0().f[5]++;
    cov_o6ldjtwx0().s[8]++;
    return css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
`;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNzcyIsIkNvbG9yIiwiY29sb3IiLCJncmF5MTAwIiwiZ3JheTIwMCIsImdyYXkzMDAiLCJncmF5NDAwIiwicHJpbWFyeSIsInByaW1hcnlEYXJrIiwicHJpbWFyeUxpZ2h0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJiYWNrZ3JvdW5kQm9keSIsImJhY2tncm91bmRMaWdodCIsInRleHREYXJrIiwidGV4dE1lZGl1bSIsInRleHRMaWdodCIsInRleHRMaW5rIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJJbnB1dEZvY3VzIiwiaW5wdXRCYWNrZ3JvdW5kIiwiaW5wdXRDb2xvciIsImZvbnQiLCJyZWd1bGFyIiwiYm9sZCIsInNpemUiLCJtaXhpbiIsImRhcmtlbiIsImNvbG9yVmFsdWUiLCJhbW91bnQiLCJzdHJpbmciLCJsaWdodGVuIiwicmdiYSIsIm9wYWNpdHkiLCJhbHBoYSIsImJveFNoYWRvd01lZGl1bSIsImNvdmVyIiwibGluayIsImJhY2tncm91bmRJbWFnZSIsImltYWdlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLEdBQVQsUUFBb0IsbUJBQXBCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUVB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bnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcclxuICAvLyBDb2xvciBzeXN0ZW1cclxuICBncmF5MTAwOiBcIiNkNWQ4ZGNcIiwgLy8gSXJvblxyXG4gIGdyYXkyMDA6IFwiIzkzOTU5OFwiLCAvLyBPc2xvIEdyYXlcclxuICBncmF5MzAwOiBcIiM0MjQyNDRcIiwgLy8gU2hpcCBHcmF5XHJcbiAgZ3JheTQwMDogXCIjMjMxZjIwXCIsIC8vIFRodW5kZXJcclxuXHJcbiAgLy8gVGhlbWUgQ29sb3JzXHJcbiAgcHJpbWFyeTogXCIjMTE2NWE4XCIsIC8vIFRvcnkgQmx1ZVxyXG4gIHByaW1hcnlEYXJrOiBcIiMwNzJmNTBcIiwgLy8gVGFyYXdlcmFcclxuICBwcmltYXJ5TGlnaHQ6IFwiIzhkY2RmZlwiLCAvLyBBbmFraXdhXHJcbiAgc2Vjb25kYXJ5OiBcIiNkNWQ4ZGNcIiwgLy8gSXJvblxyXG4gIHN1Y2Nlc3M6IFwiIzI4YTc0NVwiLCAvLyBHcmVlblxyXG4gIHdhcm5pbmc6IFwiI2ZmYzEwN1wiLCAvLyBPcmFuZ2VcclxuICBkYW5nZXI6IFwiI2RjMzU0NVwiLCAvLyBEYW5nZXJcclxuXHJcbiAgLy8gQmFja2dyb3VuZFxyXG4gIC8vXHJcbiAgLy8gU2V0dGluZyBiYWNrZ3JvdW5kIGVsZW1lbnRzLlxyXG4gIC8vIGJhY2tncm91bmRCb2R5OiBcIiM0MjQyNDRcIixcclxuICBiYWNrZ3JvdW5kQm9keTogXCIjRkZGRkZGXCIsXHJcblxyXG4gIGJhY2tncm91bmRMaWdodDogXCIjZmZmZmZmXCIsXHJcblxyXG4gIC8vIFRleHRcclxuICAvL1xyXG4gIC8vIFN0eWxlIHRleHQgZWxlbWVudHMuXHJcbiAgdGV4dERhcms6IFwiIzM0M2E0MFwiLFxyXG4gIHRleHRNZWRpdW06IFwiIzVlNkM4NFwiLFxyXG4gIC8vIHRleHRMaWdodDogXCIjZjhmOWZhXCIsXHJcbiAgdGV4dExpZ2h0OiBcIiMyMTI0MkNcIixcclxuICB0ZXh0TGluazogXCIjMTE2NWE4XCIsXHJcblxyXG4gIC8vIENvbXBvbmVudHNcclxuICAvL1xyXG4gIC8vIERlZmluZSBjb21tb24gc3R5bGVzIGFuZCBtb3JlLlxyXG4gIGJvcmRlckNvbG9yOiBcIiM1NjU2NThcIixcclxuICBib3JkZXJJbnB1dEZvY3VzOiBcIiMxMTY1YThcIixcclxuXHJcbiAgLy8gRm9ybXNcclxuICBpbnB1dEJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxyXG4gIGlucHV0Q29sb3I6IFwiIzQ5NTA1N1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9udCA9IHtcclxuICByZWd1bGFyOlxyXG4gICAgJ2ZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IGZvbnQtd2VpZ2h0OiBub3JtYWw7JyxcclxuICBib2xkOiAnZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7IGZvbnQtd2VpZ2h0OiA3MDA7JyxcclxuICBzaXplOiBzaXplID0+IGBmb250LXNpemU6ICR7c2l6ZX1yZW07YFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1peGluID0ge1xyXG4gIGRhcmtlbjogKGNvbG9yVmFsdWUsIGFtb3VudCkgPT5cclxuICAgIENvbG9yKGNvbG9yVmFsdWUpXHJcbiAgICAgIC5kYXJrZW4oYW1vdW50KVxyXG4gICAgICAuc3RyaW5nKCksXHJcbiAgbGlnaHRlbjogKGNvbG9yVmFsdWUsIGFtb3VudCkgPT5cclxuICAgIENvbG9yKGNvbG9yVmFsdWUpXHJcbiAgICAgIC5saWdodGVuKGFtb3VudClcclxuICAgICAgLnN0cmluZygpLFxyXG4gIHJnYmE6IChjb2xvclZhbHVlLCBvcGFjaXR5KSA9PlxyXG4gICAgQ29sb3IoY29sb3JWYWx1ZSlcclxuICAgICAgLmFscGhhKG9wYWNpdHkpXHJcbiAgICAgIC5zdHJpbmcoKSxcclxuICBib3hTaGFkb3dNZWRpdW06IGNzc2BcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgIDAgMTBweCAzMHB4ICR7Y29sb3IuYmFja2dyb3VuZEJvZHl9O1xyXG4gIGAsXHJcbiAgY292ZXI6IGNzc2BcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICBgLFxyXG4gIGxpbms6IChjb2xvclZhbHVlID0gY29sb3IudGV4dExpbmspID0+IGNzc2BcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAke2NvbG9yVmFsdWV9O1xyXG4gICAgJHtmb250LnJlZ3VsYXJ9XHJcbiAgICAmOmhvdmVyLCAmOnZpc2l0ZWQsICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6ICR7Y29sb3JWYWx1ZX07XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgYCxcclxuICBiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlVVJMID0+IGNzc2BcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7aW1hZ2VVUkx9XCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5iYWNrZ3JvdW5kTGlnaHR9O1xyXG5gXHJcbn07XHJcbiJdfQ==