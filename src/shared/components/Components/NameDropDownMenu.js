import React from "react";
import styled from "styled-components";
import swal from "sweetalert";
import Unknown from "../../../App/Styles/Dashboard/unknown.jpg";

import InviteNewUserModal from "./InvitePopup";

export default ({ firstName, lastName, roleId }) => {
  console.log(roleId, "roleid");
  const onLogout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("user");
    localStorage.removeItem("state");
    window.location.reload(false);
    return swal("Logged out successfully!", {
      icon: "success",
      timer: 4000,
    });
  };

  return (
    <Container>
      <img src={Unknown} alt="profile" />
      <p>
        {firstName} {lastName}
      </p>
      {roleId === 1 && (
        <>
          <hr />
          <InviteNewUserModal buttonLabel="Invite User" />
        </>
      )}
      <a className="user-modal-btn" onClick={onLogout}>
        Log out
      </a>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  height: 0;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 0;
  top: 10px;
  border: 2px solid rgba(33, 36, 44, 0.1);
  padding: 10px;
  transition: height 0.5s;
  :hover {
    cursor: default;
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  p {
    font-size: 12px;
  }
  .user-modal-btn {
    border-top: 2px solid rgba(33, 36, 44, 0.1);
    text-align: center;
    margin-top: 10%;
    padding: 10% 0;
    width: 100%;
    &:hover {
      cursor: pointer;
      color: #fa5656;
    }
  }
`;
