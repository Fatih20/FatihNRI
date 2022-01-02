import React from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const Event = styled.div`
    background-color: #333333;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 20px;

`;

const Title = styled.h2`
    font-size: 18px;
`; 

const Subtitle = styled.p`
    font-weight: 500;
`;

export default function Content ({choiceDisplayed}){

    function cardMaker ({title, subtitle, timeStart, timeEnd, summary, relevantLink }) {
        const time = timeEnd === null ? `(${timeStart})` : `(${timeStart} — ${timeEnd})`

        return (
            <Event>
                <Title>{title}</Title>
                <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}/>
                <Subtitle>{time}</Subtitle>
                <p dangerouslySetInnerHTML={{ __html: summary }} />
            </Event>
        )
    }

    if (choiceDisplayed === "selection"){
        return <></>
    } else {
        return (
            <Main>
                {options.filter(option => option["name"] === choiceDisplayed)[0]["content"].map((event) => cardMaker(event))}
            </Main>
        )
    }
}