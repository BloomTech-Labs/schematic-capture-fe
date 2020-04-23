import React from 'react';
import styled from 'styled-components';
import swal from "sweetalert";
import Unknown from '../../../App/Styles/Dashboard/unknown.jpg'

export default ({ firstName, lastName }) => {

    const onLogout = () => {
        localStorage.removeItem("idToken")
        localStorage.removeItem("user")
        localStorage.removeItem("state")
        window.location.reload(false);
        return swal("Logged out successfully!", {
            icon: "success",
            timer: 4000,
        })
    }

    return (
        <Container>
            <img src={Unknown} />
            <p>{firstName} {lastName}</p>
            <a onClick={onLogout}>Log out</a>
        </Container>
    );
}

const Container = styled.div`
    visibility: hidden;
    overflow: hidden;
    display: flex;
    height: 0;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 0;
    top: 10px;
    border: 1px solid gray;
    padding: 10px;
    transition: height 0.5s;
    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    p {
        font-size: 12px;
    }
    a {
        text-align: center;
    }
`