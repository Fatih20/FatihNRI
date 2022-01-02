import React from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    background-color: #333333;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 20px;
    width: 60%;

`;

const EventSectionContainer = styled.div`
    border-bottom: solid 1px rgba(255, 255, 255, 0.75);
    margin-bottom: 7px;
    padding-bottom: 7px;
`;

const EventTitle = styled.h2`
    font-size: 18px;
`; 

const Subtitle = styled.p`
    font-weight: 500;
`;

const Summary = styled.p`
    margin: 0;
    padding: 0;
`;

const SeeWork = styled.p`
    cursor: pointer;
    text-align: center;
`;

const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Event ({event : {title, subtitle, timeStart, timeEnd, summary, relevantLink }}){
    const time = timeEnd === null || timeEnd === undefined ? `(${timeStart})` : `(${timeStart} — ${timeEnd})`

    return (
        <Main>
            <EventSectionContainer>
                <EventTitle dangerouslySetInnerHTML={{ __html: title }}/>
                <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}/>
                <Subtitle>{time}</Subtitle>
            </EventSectionContainer>
            <EventSectionContainer>
                <Summary dangerouslySetInnerHTML={{ __html: summary }} />
            </EventSectionContainer>
            <WorkContainer>
                <SeeWork>See the result my work</SeeWork>
                <SeeWork>See the process of my work</SeeWork>
            </WorkContainer>
        </Main>
    )
}