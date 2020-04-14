import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font, mixin, sizes, zIndexValues } from "../../styles";

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
  `;
