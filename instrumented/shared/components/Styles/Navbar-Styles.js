function cov_upnqwxj7() {
  var path = "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Navbar-Styles.js";
  var hash = "6460d99b7e46e984aecfcc71e475ff12d99c2220";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\timgi\\Desktop\\SchematicCapture-fe\\schematic-capture-fe\\src\\shared\\components\\Styles\\Navbar-Styles.js",
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
    hash: "6460d99b7e46e984aecfcc71e475ff12d99c2220"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_upnqwxj7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_upnqwxj7();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font, mixin, sizes, zIndexValues } from "../../styles";
export const Bottom = (cov_upnqwxj7().s[0]++, styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`);
export const Item = (cov_upnqwxj7().s[1]++, styled(Link)`
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
export const Icon = (cov_upnqwxj7().s[2]++, styled.i`
  display: inline-block;
  font-size: ${props => {
  cov_upnqwxj7().f[0]++;
  cov_upnqwxj7().s[3]++;
  return `${props.size}px`;
}};
  line-height: 1;
`);
export const ItemText = (cov_upnqwxj7().s[4]++, styled.span`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(1.5)}
  `);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImNvbG9yIiwiZm9udCIsIm1peGluIiwic2l6ZXMiLCJ6SW5kZXhWYWx1ZXMiLCJCb3R0b20iLCJkaXYiLCJJdGVtIiwidGV4dExpZ2h0IiwiSWNvbiIsImkiLCJwcm9wcyIsInNpemUiLCJJdGVtVGV4dCIsInNwYW4iLCJib2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLFlBQXBDLFFBQXdELGNBQXhEO0FBRUEsT0FBTyxNQUFNQyxNQUFNLDJCQUFHUCxNQUFNLENBQUNRLEdBQUk7Ozs7O0NBQWQsQ0FBWjtBQU9QLE9BQU8sTUFBTUMsSUFBSSwyQkFBR1QsTUFBTSxDQUFDQyxJQUFELENBQU87Ozs7Ozs7V0FPdEJDLEtBQUssQ0FBQ1EsU0FBVTs7Ozs7Ozs7O0NBUFYsQ0FBVjtBQWtCUCxPQUFPLE1BQU1DLElBQUksMkJBQUdYLE1BQU0sQ0FBQ1ksQ0FBRTs7ZUFFZEMsS0FBSyxJQUFJO0FBQUE7QUFBQTtBQUFBLFNBQUMsR0FBRUEsS0FBSyxDQUFDQyxJQUFLLElBQWQ7QUFBaUIsQ0FBQzs7Q0FGekIsQ0FBVjtBQU1QLE9BQU8sTUFBTUMsUUFBUSwyQkFBR2YsTUFBTSxDQUFDZ0IsSUFBSzs7Ozs7OztJQU9oQ2IsSUFBSSxDQUFDYyxJQUFLO0lBQ1ZkLElBQUksQ0FBQ1csSUFBTCxDQUFVLEdBQVYsQ0FBZTtHQVJFLENBQWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IGNvbG9yLCBmb250LCBtaXhpbiwgc2l6ZXMsIHpJbmRleFZhbHVlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkKExpbmspYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NHB4O1xyXG4gIGNvbG9yOiAke2NvbG9yLnRleHRMaWdodH07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uID0gc3R5bGVkLmlgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBgJHtwcm9wcy5zaXplfXB4YH07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbVRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQsIHZpc2liaWxpdHksIG9wYWNpdHk7XHJcbiAgJHtmb250LmJvbGR9XHJcbiAgJHtmb250LnNpemUoMS41KX1cclxuICBgO1xyXG4iXX0=