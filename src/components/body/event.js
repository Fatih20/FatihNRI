import React, {useState} from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    background-color: #333333;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 20px;
    width: 60%;

`;

const EventSectionContainer = styled.div`
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    margin-bottom: 8px;
    padding-bottom: 8px;
`;

const EventTitle = styled.h2`
    font-size: 24px;
    text-align: center;
`;

const EventDate = styled.p`
    text-align: center;
`;

const EventSubtitle = styled.p`
    font-weight: 600;
    margin-bottom: 5px;
`;

const Summary = styled.p`
    margin: 0;
    padding: 0;
`;

const SeeWorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SeeWork = styled.p`
    cursor: pointer;
    text-align: center;
`;

const WorkContainer = styled.div`
    display: ${({show}) => show ? "flex" : "none"};
`;

export default function Event ({event : {title, subtitle, timeStart, timeEnd, summary, relevantLink : {progress, result} }}){
    const[attachmentShown, setAttachmentShown] = useState("none");
    
    const time = timeEnd === null || timeEnd === undefined ? `(${timeStart})` : `(${timeStart} — ${timeEnd})`

    function handleChoiceClick(buttonClicked) {
        if (buttonClicked === attachmentShown){
            setAttachmentShown("none")
        } else {
            setAttachmentShown(buttonClicked)
        }
    }

    return (
        <Main>
            <EventSectionContainer>
                <EventTitle dangerouslySetInnerHTML={{ __html: title }}/>
                <EventDate>{time}</EventDate>
            </EventSectionContainer>
            <EventSectionContainer>
                <EventSubtitle dangerouslySetInnerHTML={{ __html: subtitle }}/>
                <Summary dangerouslySetInnerHTML={{ __html: summary }} />
            </EventSectionContainer>
            <SeeWorkContainer>
                <SeeWork onClick={() => handleChoiceClick("result")}>{attachmentShown === "result" ? "Hide" : "Show"} the result my work</SeeWork>
                <SeeWork onClick={() => handleChoiceClick("process")}>{attachmentShown === "process" ? "Hide" : "Show"} the process of my work</SeeWork>
            </SeeWorkContainer>
            <WorkContainer show={attachmentShown === "none" ? false : true}>

            </WorkContainer>

        </Main>
    )
}