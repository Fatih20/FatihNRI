import React, {useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import options from "../../content/allContent";
import { VanillaButton } from "../../GlobalComponent";

import { shadeColor } from "../../theme";

const Main = styled.div`
    background-color: ${({theme}) => theme.regularContainer};
    border-radius: 7.5px;
    box-shadow: 0 3px 5px ${({theme}) => theme.regularContainerShadow};
    box-sizing: border-box;
    color : ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 15px 20px;
    width: 100%;
`;

const EventSectionContainer = styled.div`
    border-bottom: solid 1px ${({theme}) => shadeColor(theme.standaloneBorder, -50)};
    margin-bottom: 8px;
    padding-bottom: 8px;
`;

const EventTitle = styled.h2`
    font-size: 1.5rem;
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
    gap: 0.3125rem;
`;

const SeeWork = styled.p`
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 5px;
`;

const IconContainer = styled.div`
    display: inline-block;
    transform: ${({flip}) => flip ? "rotate(180deg)" : null};
    transition: transform 0.15s;
    transition-timing-function: ease-in-out;

    /* border: solid 1px white; */
`;

const LinkContainer = styled.a`
    display: ${({show}) => show ? "flex" : "none"};
    flex-direction: column;
    word-wrap: break-word;
`;

const Link = styled.a`
    color : ${({theme}) => theme.regularText};
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