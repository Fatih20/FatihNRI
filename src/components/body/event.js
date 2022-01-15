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

var classNames = require('classnames');

// const Main = styled.div`
//     background-color: ${({theme}) => theme.regularContainer};
//     border-radius: 7.5px;
//     box-shadow: 0 3px 5px ${({theme}) => theme.regularContainerShadow};
//     box-sizing: border-box;
//     color : ${({theme}) => theme.regularText};
//     display: flex;
//     flex-direction: column;
//     font-size: 1em;
//     gap: 0;
//     overflow-wrap: break-word;
//     padding: 1em 1.25em;
//     width: 100%;
// `;

// const EventSectionContainer = styled.div`
//     display: ${({show}) => show === undefined || show === true ? "block" : "none"};
//     border-top: solid 1px ${({theme}) => shadeColor(theme.standaloneBorder, -50)};
//     margin-top: 0.5em;
//     padding-top: 0.5em;
// `;

// const EventTitle = styled.h2`
//     text-align: center;
// `;

// const EventDate = styled.p`
//     text-align: center;
// `;

// const EventSubtitle = styled.div`
//     display: ${({show}) => show? "inline" : "none"};
//     font-weight: 600;
//     margin-top: 0.5em;
// `;

// const Summary = styled.div`
//     display: inline;
//     margin: 0;
//     padding: 0;
// `;

// const SummaryContainer = styled(EventSectionContainer)`
//     display: flex;
//     flex-direction: column;
//     gap: 0.3125em;
// `;

// const SeeWork = styled.div`
//     display: flex;
//     gap: 0.35em;
//     cursor: pointer;
//     font-weight: 600;
// `;

// const IconContainer = styled.div`
//     display: inline-block;
//     height: fit-content;
//     transform: ${({flip}) => flip ? "rotate(180deg)" : null};
//     transition: transform 0.15s;
//     transition-timing-function: ease-in-out;

//     /* border: solid 1px white; */
// `;

// const LinkContainer = styled.div`
//     display: ${({show}) => show ? "flex" : "none"};
//     flex-direction: column;
//     margin-top: 0.3125em;
//     word-wrap: break-word;
// `;

// const Link = styled.a`
//     color : ${({theme}) => theme.regularText};
//     text-overflow: ellipsis;
// `;

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
        <div className="bg-regularContainer rounded-[7.5px] shadow-sm shadow-regularContainerShadow box-border text-regularText flex flex-col text-[1em] gap-0 break-words px-[1.25em] py[1em] w-full">
            <h2 className="text-center"><MD>{title}</MD></h2>
            <p className="text-center">{time}</p>
            <h2 className={("font-semibold mt-[0.5em]", subtitle !== null ? "inline" : "hidden")} show={subtitle !== null ? true : false}><MD>{subtitle}</MD></h2>
            <div className={classNames("flex flex-col gap-[0.3125em] mt-[0.5em] pt-[0.5em] border-standaloneBorder border-solid border-t", typeOfAttachment !== "none" ? "block" : "hidden")}>
                {summaryMaker()}
            </div>
            <div className={classNames("mt-[0.5em] pt-[0.5em]", typeOfAttachment !== "none" ? "block" : "hidden")}>
                <div className="g-[0.35em] cursor-pointer font-medium flex" onClick={() => setShowAttachment(prevShowAttachment => !prevShowAttachment)}>
                    {textForAllAttachmentTypes[typeOfAttachment]}
                    <div className={("inline-block h-fit transition-transform ease-in-out", showAttachment ? "rotate-180" : "" )} ><FontAwesomeIcon icon={faCaretDown}/></div>
                </div>
                <div className={classNames("mt-[0.3125em] break-words flex-col", showAttachment ? "flex" : "hidden")}>
                    {allOfTheRelevantLinks === undefined ? null : allOfTheRelevantLinks.map(({fields : {link}}) => <a className="underline text-regularText text-ellipsis" key={link} href={link}>{link}</a>)}
                </div>
            </div>
   
        </div>
    )
}