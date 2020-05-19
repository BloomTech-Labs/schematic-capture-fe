import React from 'react';
import styled from 'styled-components';

export default props => {

    return (
        <Container>
            <Buttion onClick={props.sortAscending}> Ascending</Buttion>
            <Buttion onClick={props.sortDescending}> Descening</Buttion>
            <Buttion onClick={props.sortNone}> None</Buttion>
        </Container>
    );
}

const Buttion = styled.button`
    
    :hover{
        background-color: rgba(33,36,44,0.2);
        border-radius: 15px;
    }
`

const Container = styled.div`
    visibility: hidden;
    overflow: hidden;
    display: flex;
    height: 8rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    left: 0;
    top: -5rem;
    
    padding: 10px;
    border-radius: 15px;

    
`