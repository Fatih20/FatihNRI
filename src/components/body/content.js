import React from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Option = styled(VanillaButton)`
    background-color: #333333;
    color: white;
    padding: 15px;
    border-radius: 5px;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
`;

export default function Content ({choiceDisplayed, handleChoiceClick}){

    function optionMaker({name}) {
        return (
            <Option onClick={() => handleChoiceClick(name)} key={name}>
                <h2>{name}</h2>
            </Option>
        )
    }

    if (choiceDisplayed === "selection"){
        return (
            <Main>
                {options.map((option) => optionMaker(option))}
            </Main>
        )
    } else {
        return (
            <></>
        )
    }
}