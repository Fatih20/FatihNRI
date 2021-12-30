import React from "react";
import styled from "styled-components";

import options from "../../content/options";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Option = styled.div`
    background-color: #333333;
    padding: 15px;
    border-radius: 5px;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
`;

function optionMaker({name}) {
    return (
        <Option id={name}>
            <h2>{name}</h2>
        </Option>
    )
}

export default function Content (){
    return (
        <Main>
            {options.map((option) => optionMaker(option))}
        </Main>
    )
}