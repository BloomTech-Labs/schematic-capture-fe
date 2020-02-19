import React from "react";

import { NavbarLeft, Icon, Item, ItemText, Bottom } from "./Style";

const Navbar = () => {
  return (
    <NavbarLeft>
      <Item to="/dashboard">
        <Icon className="fas fa-users" size={20} />
        <ItemText>Dashboard</ItemText>
      </Item>
      <Item to="/client/new">
        <Icon className="fas fa-plus" size={22} />
        <ItemText>Create Client</ItemText>
      </Item>

      <Bottom>
        <Item to="/">
          <Icon className="fas fa-sign-out-alt" size={22} />
          <ItemText>Logout</ItemText>
        </Item>
      </Bottom>
    </NavbarLeft>
  );
};

export default Navbar;
