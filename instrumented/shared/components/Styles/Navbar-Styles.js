function cov_2g9odjckde() {
  var path = "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/Navbar-Styles.js";
  var hash = "63e213524882b6abea564a1805eeb4f5ed976be8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Documents/lambda/schematic-capture-fe/src/shared/components/Styles/Navbar-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "2": {
        start: {
          line: 31,
          column: 20
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "3": {
        start: {
          line: 33,
          column: 24
        },
        end: {
          line: 33,
          column: 41
        }
      },
      "4": {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 46,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 33,
            column: 15
          },
          end: {
            line: 33,
            column: 16
          }
        },
        loc: {
          start: {
            line: 33,
            column: 24
          },
          end: {
            line: 33,
            column: 41
          }
        },
        line: 33
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "63e213524882b6abea564a1805eeb4f5ed976be8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2g9odjckde = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2g9odjckde();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font, mixin, sizes, zIndexValues } from "../../styles";
export const Bottom = (cov_2g9odjckde().s[0]++, styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`);
export const Item = (cov_2g9odjckde().s[1]++, styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 54px;
  color: ${color.textLight};
  transition: color 0.1s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`);
export const Icon = (cov_2g9odjckde().s[2]++, styled.i`
  display: inline-block;
  font-size: ${props => {
  cov_2g9odjckde().f[0]++;
  cov_2g9odjckde().s[3]++;
  return `${props.size}px`;
}};
  line-height: 1;
`);
export const ItemText = (cov_2g9odjckde().s[4]++, styled.span`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(1.5)}
  `);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImNvbG9yIiwiZm9udCIsIm1peGluIiwic2l6ZXMiLCJ6SW5kZXhWYWx1ZXMiLCJCb3R0b20iLCJkaXYiLCJJdGVtIiwidGV4dExpZ2h0IiwiSWNvbiIsImkiLCJwcm9wcyIsInNpemUiLCJJdGVtVGV4dCIsInNwYW4iLCJib2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFFQSxTQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxZQUFwQyxRQUF3RCxjQUF4RDtBQUVBLE9BQU8sTUFBTUMsTUFBTSw2QkFBR1AsTUFBTSxDQUFDUSxHQUFJOzs7OztDQUFkLENBQVo7QUFPUCxPQUFPLE1BQU1DLElBQUksNkJBQUdULE1BQU0sQ0FBQ0MsSUFBRCxDQUFPOzs7Ozs7O1dBT3RCQyxLQUFLLENBQUNRLFNBQVU7Ozs7Ozs7OztDQVBWLENBQVY7QUFrQlAsT0FBTyxNQUFNQyxJQUFJLDZCQUFHWCxNQUFNLENBQUNZLENBQUU7O2VBRWRDLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQSxTQUFDLEdBQUVBLEtBQUssQ0FBQ0MsSUFBSyxJQUFkO0FBQWlCLENBQUM7O0NBRnpCLENBQVY7QUFNUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdmLE1BQU0sQ0FBQ2dCLElBQUs7Ozs7Ozs7SUFPaENiLElBQUksQ0FBQ2MsSUFBSztJQUNWZCxJQUFJLENBQUNXLElBQUwsQ0FBVSxHQUFWLENBQWU7R0FSRSxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgbWl4aW4sIHNpemVzLCB6SW5kZXhWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZChMaW5rKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTRweDtcbiAgY29sb3I6ICR7Y29sb3IudGV4dExpZ2h0fTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBgJHtwcm9wcy5zaXplfXB4YH07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1UZXh0ID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0LCB2aXNpYmlsaXR5LCBvcGFjaXR5O1xuICAke2ZvbnQuYm9sZH1cbiAgJHtmb250LnNpemUoMS41KX1cbiAgYDtcbiJdfQ==