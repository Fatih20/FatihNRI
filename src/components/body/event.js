import React, {useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    background-color: #333333;
    border-radius: 7.5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 15px 20px;
    width: 100%;

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
    font-weight: 600;
    margin-bottom: 5px;
`;

const IconContainer = styled.div`
    display: inline-block;
    transform: ${({flip}) => flip ? "rotate(180deg)" : null};

    /* border: solid 1px white; */
`;

const LinkContainer = styled.a`
    display: ${({show}) => show ? "flex" : "none"};
    flex-direction: column;
    word-wrap: break-word;
`;

const Link = styled.a`
    color: white;
    text-overflow: ellipsis;
`;

const WorkContainer = styled.div`
    display: ${({show}) => show ? "flex" : "none"};
`;

export default function Event ({event : {title, subtitle, timeStart, timeEnd, summary, attachmentType, relevantLink}}){
    const[showAttachment, setShowAttachment] = useState(false);
    
    const time = timeEnd === null || timeEnd === undefined ? `(${timeStart})` : `(${timeStart} — ${timeEnd})`

    function attachmentText() {
        if (attachmentType === "both"){
            return "My work and how it was completed"
        } else if (attachmentType === "progress"){
            return "How my work was completed"
        } else if (attachmentType === "result"){
            return "My work"
        } else if (attachmentType === "none"){
            return null
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
            <SeeWork onClick={() => setShowAttachment(prevShowAttachment => !prevShowAttachment)}>{attachmentText()} <IconContainer flip={showAttachment}><FontAwesomeIcon icon={faCaretDown}/></IconContainer></SeeWork>
            <LinkContainer show={showAttachment}>
                {relevantLink.map((link) => <Link href={link}>{link}</Link>)}
            </LinkContainer>
   
        </Main>
    )
}