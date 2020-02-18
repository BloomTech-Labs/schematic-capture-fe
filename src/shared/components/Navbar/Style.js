import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font, sizes, zIndexValues } from "../../../shared/utils/styles";

export const NavbarLeft = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${sizes.navbarWidth}px;
  z-index: ${zIndexValues.navbar}
  padding: 0 16px 24px;
  background-color: ${color.backgroundBody};
  border-right: 1px solid ${color.borderColor};
  transition: all 0.1s;
  transform: translateZ(0);
  &:hover {
    width: 200px;
    background-color: ${color.gray400};
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const Item = styled(Link)`
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
`;

export const Icon = styled.i`
  display: inline-block;
  font-size: ${props => `${props.size}px`};
  line-height: 1;
`;

export const ItemText = styled.span`
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
}`;
