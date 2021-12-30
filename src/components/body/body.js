import React from "react";
import styled from "styled-components";

import Profile from "./profile";
import Content from "./content";

const Main = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default function Body (){
    return (
        <Main>
            <Profile />
            <Content />
        </Main>
    )
}