import React from "react";

import { NavbarLeft, Icon, Item, ItemText, Bottom } from "../Styles/Navbar-Styles";
import swal from "sweetalert";

const Navbar = () => {
  const onLogout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("user");
    localStorage.removeItem("state");
    return swal("Logged out successfully!", {
      icon: "success",
      timer: 4000
    });
  };
  return (
    <NavbarLeft>
      <Item to="/dashboard">
        <Icon className="fas fa-home" size={20} />
        <ItemText>Dashboard</ItemText>
      </Item>
      <Item to="/client/new">
        <Icon className="fas fa-plus" size={22} />
        <ItemText>Create&nbsp;Client</ItemText>
      </Item>
      <Item data-invite-user to="/invite">
        <Icon className="fas fa-users" size={20} />
        <ItemText>Invite&nbsp;New&nbsp;User</ItemText>
      </Item>
      <Bottom>
        <Item to="/" onClick={onLogout}>
          <Icon className="fas fa-sign-out-alt" size={22} />
          <ItemText>Logout</ItemText>
        </Item>
      </Bottom>
    </NavbarLeft>
  );
};

export default Navbar;
