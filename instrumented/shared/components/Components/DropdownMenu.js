import React from "react";

import { Dropdown, DropdownItem } from "../Styles/DropdownMenu-Styles";

export const DropdownItemContainer = props => {
  const { text, ...rest } = props;

  return <DropdownItem {...rest}>{text}</DropdownItem>;
};

const DropdownMenu = ({ items, display }) => {
  return (
    display && (
      <Dropdown>
        {items &&
          items.map((item, index) => {
            return <DropdownItemContainer key={index} {...item} />;
          })}
      </Dropdown>
    )
  );
};

export default DropdownMenu;
