import React from "react";
import styled from "styled-components";

const Main = styled.div`
    background-color: #c6262e;
    color: white;
    display: flex;
    height: 60vh;
    width: 100%;

    & > * {
        box-sizing: border-box;
        border: solid 1px white;
        width: 50%;
    }
`;

const Filler = styled.div`
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const Occupation = styled.div`
    
`;

export default function Profile (){
    return (
        <Main>
            <Content>
                <Title>Hello! I am Fatih Nararya R. I.</Title>
                <Buffer />
                <Occupation>
                    <h2>Who am I?</h2>
                    
                </Occupation>
            </Content>
            <Filler />
        </Main>
    )
}