import React, {useState} from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

//Context
import { useContent } from "../../context/language";

// Custom Function
import { shadeColor } from "../../theme";

const Main = styled.div`
    background-color: ${({theme}) => theme.regularContainer};
    border-radius: 7.5px;
    box-shadow: 0 3px 5px ${({theme}) => theme.regularContainerShadow};
    box-sizing: border-box;
    color : ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    font-size: 1em;
    gap: 0;
    overflow-wrap: break-word;
    padding: 1em 1.25em;
    width: 100%;
`;

const EventSectionContainer = styled.div`
    display: ${({show}) => show === undefined || show === true ? "block" : "none"};
    border-top: solid 1px ${({theme}) => shadeColor(theme.standaloneBorder, -50)};
    margin-top: 0.5em;
    padding-top: 0.5em;
`;

const EventTitle = styled.h2`
    text-align: center;
`;

const EventDate = styled.p`
    text-align: center;
`;

const EventSubtitle = styled.p`
    display: ${({show}) => show? null : "none"};
    font-weight: 600;
    margin-top: 0.5em;
`;

const Summary = styled.p`
    margin: 0;
    padding: 0;
`;

const SummaryContainer = styled(EventSectionContainer)`
    display: flex;
    flex-direction: column;
    gap: 0.3125em;
`;

const SeeWork = styled.div`
    display: flex;
    gap: 0.35em;
    cursor: pointer;
    font-weight: 600;
`;

const IconContainer = styled.div`
    display: inline-block;
    height: fit-content;
    transform: ${({flip}) => flip ? "rotate(180deg)" : null};
    transition: transform 0.15s;
    transition-timing-function: ease-in-out;

    /* border: solid 1px white; */
`;

const LinkContainer = styled.div`
    display: ${({show}) => show ? "flex" : "none"};
    flex-direction: column;
    margin-top: 0.3125em;
    word-wrap: break-word;
`;

const Link = styled.a`
    color : ${({theme}) => theme.regularText};
    text-overflow: ellipsis;
`;

function sanitizeSafely(contentToSanitize) {
    const sanitizedContent = DOMPurify.sanitize(contentToSanitize, {USE_PROFILES : {html: true}, ALLOWED_TAGS : ['em', 'strong']})
    return sanitizedContent;
}

export default function Event ({event : {title, subtitle, timeStart, timeEnd, summaryList, attachmentType, relevantLink}}){
    const[showAttachment, setShowAttachment] = useState(false);
    const {attachmentText} = useContent(); 

    const time = timeEnd === null || timeEnd === undefined ? `(${timeStart})` : `(${timeStart} — ${timeEnd})`

    function summaryMaker() {
        return (
            summaryList.map((summary) => <Summary key={summary} dangerouslySetInnerHTML={{__html : sanitizeSafely(summary)}} />)
        )
    }

    return (
        <Main>
            <EventTitle dangerouslySetInnerHTML={{ __html: sanitizeSafely(title) }}/>
            <EventDate>{time}</EventDate>
            <EventSubtitle show={subtitle !== null ? true : false} dangerouslySetInnerHTML={{ __html: sanitizeSafely(subtitle) }}/>
            <SummaryContainer>
                {summaryMaker()}
            </SummaryContainer>
            <EventSectionContainer show={attachmentType !== "none"}>
                <SeeWork onClick={() => setShowAttachment(prevShowAttachment => !prevShowAttachment)}>
                    {attachmentText[attachmentType]}
                    <IconContainer flip={showAttachment}><FontAwesomeIcon icon={faCaretDown}/></IconContainer>
                </SeeWork>
                <LinkContainer show={showAttachment}>
                    {relevantLink.map((link) => <Link key={link} href={link}>{link}</Link>)}
                </LinkContainer>
            </EventSectionContainer>
   
        </Main>
    )
}