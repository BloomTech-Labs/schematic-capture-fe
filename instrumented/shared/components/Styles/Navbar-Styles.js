function cov_1oee2ultq3() {
  var path = "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/Navbar-Styles.js";
  var hash = "03c441882c5d0068fa3a430553ff67a4f74bcc2f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mark/Repositories/schematic-capture-fe/src/shared/components/Styles/Navbar-Styles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 22
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
          line: 47,
          column: 1
        }
      },
      "3": {
        start: {
          line: 49,
          column: 20
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "4": {
        start: {
          line: 51,
          column: 24
        },
        end: {
          line: 51,
          column: 41
        }
      },
      "5": {
        start: {
          line: 55,
          column: 24
        },
        end: {
          line: 68,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 51,
            column: 16
          }
        },
        loc: {
          start: {
            line: 51,
            column: 24
          },
          end: {
            line: 51,
            column: 41
          }
        },
        line: 51
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "03c441882c5d0068fa3a430553ff67a4f74bcc2f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1oee2ultq3 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1oee2ultq3();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font, mixin, sizes, zIndexValues } from "../../styles";
export const NavbarLeft = (cov_1oee2ultq3().s[0]++, styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${sizes.navbarWidth}px;
  z-index: ${zIndexValues.navbar};
  background-color: ${mixin.lighten(color.backgroundBody, 0.1)};
  border-right: 1px solid ${color.borderColor};
  transition: all 0.1s;
  transform: translateZ(0);
  &:hover {
    width: 200px;
    background-color: ${color.gray400};
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.3);
  }
`);
export const Bottom = (cov_1oee2ultq3().s[1]++, styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`);
export const Item = (cov_1oee2ultq3().s[2]++, styled(Link)`
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
export const Icon = (cov_1oee2ultq3().s[3]++, styled.i`
  display: inline-block;
  font-size: ${props => {
  cov_1oee2ultq3().f[0]++;
  cov_1oee2ultq3().s[4]++;
  return `${props.size}px`;
}};
  line-height: 1;
`);
export const ItemText = (cov_1oee2ultq3().s[5]++, styled.span`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(1.5)}
  ${NavbarLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
}`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci1TdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsImNvbG9yIiwiZm9udCIsIm1peGluIiwic2l6ZXMiLCJ6SW5kZXhWYWx1ZXMiLCJOYXZiYXJMZWZ0IiwiYXNpZGUiLCJuYXZiYXJXaWR0aCIsIm5hdmJhciIsImxpZ2h0ZW4iLCJiYWNrZ3JvdW5kQm9keSIsImJvcmRlckNvbG9yIiwiZ3JheTQwMCIsIkJvdHRvbSIsImRpdiIsIkl0ZW0iLCJ0ZXh0TGlnaHQiLCJJY29uIiwiaSIsInByb3BzIiwic2l6ZSIsIkl0ZW1UZXh0Iiwic3BhbiIsImJvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsWUFBcEMsUUFBd0QsY0FBeEQ7QUFFQSxPQUFPLE1BQU1DLFVBQVUsNkJBQUdQLE1BQU0sQ0FBQ1EsS0FBTTs7Ozs7V0FLNUJILEtBQUssQ0FBQ0ksV0FBWTthQUNoQkgsWUFBWSxDQUFDSSxNQUFPO3NCQUNYTixLQUFLLENBQUNPLE9BQU4sQ0FBY1QsS0FBSyxDQUFDVSxjQUFwQixFQUFvQyxHQUFwQyxDQUF5Qzs0QkFDbkNWLEtBQUssQ0FBQ1csV0FBWTs7Ozs7d0JBS3RCWCxLQUFLLENBQUNZLE9BQVE7OztDQWJmLENBQWhCO0FBa0JQLE9BQU8sTUFBTUMsTUFBTSw2QkFBR2YsTUFBTSxDQUFDZ0IsR0FBSTs7Ozs7Q0FBZCxDQUFaO0FBT1AsT0FBTyxNQUFNQyxJQUFJLDZCQUFHakIsTUFBTSxDQUFDQyxJQUFELENBQU87Ozs7Ozs7V0FPdEJDLEtBQUssQ0FBQ2dCLFNBQVU7Ozs7Ozs7OztDQVBWLENBQVY7QUFrQlAsT0FBTyxNQUFNQyxJQUFJLDZCQUFHbkIsTUFBTSxDQUFDb0IsQ0FBRTs7ZUFFZEMsS0FBSyxJQUFJO0FBQUE7QUFBQTtBQUFBLFNBQUMsR0FBRUEsS0FBSyxDQUFDQyxJQUFLLElBQWQ7QUFBaUIsQ0FBQzs7Q0FGekIsQ0FBVjtBQU1QLE9BQU8sTUFBTUMsUUFBUSw2QkFBR3ZCLE1BQU0sQ0FBQ3dCLElBQUs7Ozs7Ozs7SUFPaENyQixJQUFJLENBQUNzQixJQUFLO0lBQ1Z0QixJQUFJLENBQUNtQixJQUFMLENBQVUsR0FBVixDQUFlO0lBQ2ZmLFVBQVc7Ozs7RUFUTSxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgbWl4aW4sIHNpemVzLCB6SW5kZXhWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJMZWZ0ID0gc3R5bGVkLmFzaWRlYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6ICR7c2l6ZXMubmF2YmFyV2lkdGh9cHg7XG4gIHotaW5kZXg6ICR7ekluZGV4VmFsdWVzLm5hdmJhcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7bWl4aW4ubGlnaHRlbihjb2xvci5iYWNrZ3JvdW5kQm9keSwgMC4xKX07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7Y29sb3IuYm9yZGVyQ29sb3J9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAmOmhvdmVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5ncmF5NDAwfTtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvdHRvbSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkKExpbmspYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1NHB4O1xuICBjb2xvcjogJHtjb2xvci50ZXh0TGlnaHR9O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJY29uID0gc3R5bGVkLmlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IGAke3Byb3BzLnNpemV9cHhgfTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbVRleHQgPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTJweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQsIHZpc2liaWxpdHksIG9wYWNpdHk7XG4gICR7Zm9udC5ib2xkfVxuICAke2ZvbnQuc2l6ZSgxLjUpfVxuICAke05hdmJhckxlZnR9OmhvdmVyICYge1xuICAgIHJpZ2h0OiAwO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbn1gO1xuIl19