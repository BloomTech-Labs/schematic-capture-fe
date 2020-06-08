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
            <img src={Unknown} alt='profile'/>
            <p>{firstName} {lastName}</p>
            <hr/>
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
    border: 2px solid rgba(33,36,44,0.1);
    padding: 10px;
    transition: height 0.5s;
    hr {
        width: 80%;
        border-width: 2px;
    }
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
        &:hover {
            color: #FA5656;
        }
    }
`