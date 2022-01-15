import React, {useState} from "react";
import styled from "styled-components";
import MD from 'react-markdown';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

//Context
import { useContent } from "../../context/language";

// Custom Function
import { shadeColor } from "../../utilities";

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

// const EventTitle = styled.h2`
//     text-align: center;
// `;

// const EventDate = styled.p`
//     text-align: center;
// `;

const EventSubtitle = styled.div`
    display: ${({show}) => show? "inline" : "none"};
    font-weight: 600;
    margin-top: 0.5em;
`;

// const Summary = styled.div`
//     display: inline;
//     margin: 0;
//     padding: 0;
// `;

const SummaryContainer = styled(EventSectionContainer)`
    display: flex;
    flex-direction: column;
    gap: 0.3125em;
`;

// const SeeWork = styled.div`
//     display: flex;
//     gap: 0.35em;
//     cursor: pointer;
//     font-weight: 600;
// `;

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

export default function Event ({event : {title, subtitle, timeOfStart, timeOfEnd, listOfSummary, typeOfAttachment, allOfTheRelevantLinks}}){
    const[showAttachment, setShowAttachment] = useState(false);
    const {textForAllAttachmentTypes : {fields : textForAllAttachmentTypes}} = useContent(); 

    const time = timeOfEnd === null || timeOfEnd === undefined ? `(${timeOfStart})` : `(${timeOfStart} — ${timeOfEnd})`;

    function summaryMaker() {
        return (
            listOfSummary.map(({fields : {oneLineSummary}}) => <div className="inline m-0 p-0" key={oneLineSummary}><MD>{oneLineSummary}</MD></div>)
        )
    }

    return (
        <Main>
            <h2 className="text-center"><MD>{title}</MD></h2>
            <p className="text-center">{time}</p>
            <EventSubtitle show={subtitle !== null ? true : false}><MD>{subtitle}</MD></EventSubtitle>
            <SummaryContainer>
                {summaryMaker()}
            </SummaryContainer>
            <EventSectionContainer show={typeOfAttachment !== "none"}>
                <div className="g-[0.35em] cursor-pointer font-medium flex" onClick={() => setShowAttachment(prevShowAttachment => !prevShowAttachment)}>
                    {textForAllAttachmentTypes[typeOfAttachment]}
                    <IconContainer flip={showAttachment}><FontAwesomeIcon icon={faCaretDown}/></IconContainer>
                </div>
                <LinkContainer show={showAttachment}>
                    {allOfTheRelevantLinks === undefined ? null : allOfTheRelevantLinks.map(({fields : {link}}) => <Link key={link} href={link}>{link}</Link>)}
                </LinkContainer>
            </EventSectionContainer>
   
        </Main>
    )
}