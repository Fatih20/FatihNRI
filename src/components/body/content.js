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

const Event = styled.div`
    background-color: #333333;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 10px;
    width: 400px;

`;

const Title = styled.h2`
    font-size: 18px;
`; 

const Subtitle = styled.p`
    font-weight: 500;
`;

export default function Content ({choiceDisplayed, handleChoiceClick}){

    function cardMaker ({title, subtitle, timeStart, timeEnd, summary, relevantLink }) {
        const parser = new DOMParser();
        const correctedSubtitle = parser.parseFromString(subtitle, 'text/html').body.innerHTML;
        console.log(parser.parseFromString(subtitle, 'text/html').body);

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
            <Main>

                {options.filter(option => option["name"] === choiceDisplayed)[0]["content"].map((event) => cardMaker(event))}
            </Main>
        )
    }
}