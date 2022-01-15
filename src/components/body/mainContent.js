import React from "react";
import styled from "styled-components";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import { VanillaButton } from "../../GlobalComponent";
import Event from "./event";

// Context
import { useContent } from "../../context/language";

// const Main = styled.div`
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     font-size: 2em;
//     /* gap: 0.75em; */
//     height: 100%;
//     justify-content: center;
//     width: 100%;

//     @media (max-width: 601px){
//         font-size: 2.4em;
//     }

//     /* border : solid 1px white; */
// `;

// const Title = styled.h2`
//     font-size: 1em;
//     text-align: center;
//     padding: 0.375em 0;

//     @media (max-width: 601px){
//         padding: 0.6em 0 0.375em 0;

//     }

//     /* border : solid 1px white; */
    
// `;

// const OptionContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 0.65rem;
//     justify-content: flex-start;
//     overflow: auto;

//     padding-right: 0.5vw;
//     scrollbar-width: thin;
//     scrollbar-color: ${({theme}) => theme.scrollbarThumbFill} ${({theme}) => theme.scrollbarTrackFill};

//     &::-webkit-scrollbar{
//         width: 0.5vw;
//     }

//     &::-webkit-scrollbar-thumb{
//         background-color: ${({theme}) => theme.scrollbarThumbFill};
//         border: solid 1px ${({theme}) => theme.scrollbarThumbBorder};
//         border-radius: 4px;
//     }

//     &::-webkit-scrollbar-thumb:hover{
//         background-color: ${({theme}) => theme.scrollbarThumbHoveredFill};
//         border: solid 1px ${({theme}) => theme.scrollbarThumbHoveredBorder};
//     }

//     &::-webkit-scrollbar-track{
//         background-color: ${({theme}) => theme.scrollbarTrackFill};
//         border: solid 1px ${({theme}) => theme.scrollbarTrackBorder};
//     }

//     &::-webkit-scrollbar-track:hover{
//         background-color: ${({theme}) => theme.scrollbarTrackHoveredFill};
//         border: solid 1px ${({theme}) => theme.scrollbarTrackHoveredBorder};
//     }

//     /* border : solid 1px white; */
// `;

// const Option = styled(VanillaButton)`
//     background-color: ${({theme}) => theme.regularContainer};
//     border-radius: 5px;
//     border: solid 1px ${({theme}) => theme.regularContainerBorder};
//     box-shadow: 0 3px 5px ${({theme}) => theme.regularContainerShadow};
//     box-sizing: border-box;
//     color: ${({theme}) => theme.regularText};
//     font-size: 1em;
//     padding: 0.35em;
//     transition: color 0s, background-color 0s, box-shadow 0s;

//     & > h2 {
//         font-size: 0.8em;
//         font-weight: 600;
//         text-align: center;
//     }

//     &:hover {
//         background-color: ${({theme}) => theme.emphasizedContainer};
//         border: solid 1px ${({theme}) => theme.emphasizedContainerBorder};
//         box-shadow: 0 3px 5px ${({theme}) => theme.emphasizedContainerShadow};
//         color: ${({theme}) => theme.emphasizedText} ;
//     }
// `;

// const ShowingEventContainer = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     justify-content: flex-start;
//     max-width: 25em;
//     padding: 0 0.5em;
//     width: 60%;

//     @media (max-width: 901px){
//         width: 80%;
//     }

//     /* border : solid 1px white; */
// `;

// const EventContainer = styled.div`
//     -ms-overflow-style :none;
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     font-size: 0.5em;
//     justify-content: flex-start;
//     gap: 1.25rem;
//     padding-right: 0.5em;
//     scrollbar-width: thin;
//     scrollbar-color: ${({theme}) => theme.scrollbarThumbFill} ${({theme}) => theme.scrollbarTrackFill};
//     overflow: auto;

//     /* border : solid 1px white; */

//     &::-webkit-scrollbar{
//         width: 0.5em;
//     }

//     &::-webkit-scrollbar-thumb{
//         background-color: ${({theme}) => theme.scrollbarThumbFill};
//         border: solid 1px ${({theme}) => theme.scrollbarThumbBorder};
//         border-radius: 4px;
//     }

//     &::-webkit-scrollbar-thumb:hover{
//         background-color: ${({theme}) => theme.scrollbarThumbHoveredFill};
//         border: solid 1px ${({theme}) => theme.scrollbarThumbHoveredBorder};
//     }

//     &::-webkit-scrollbar-track{
//         background-color: ${({theme}) => theme.scrollbarTrackFill};
//         border: solid 1px ${({theme}) => theme.scrollbarTrackBorder};
//     }

//     &::-webkit-scrollbar-track:hover{
//         background-color: ${({theme}) => theme.scrollbarTrackHoveredFill};
//         border: solid 1px ${({theme}) => theme.scrollbarTrackHoveredBorder};
//     }

//     /* border : solid 1px white; */
// `;

// const BackContainer = styled.div`
//     display: flex;
//     padding-top: 0.4em;
//     width: 100%;

//     /* border : solid 1px white; */
// `;

// const BackButton = styled(VanillaButton)`
//     background-color: rgba(255, 255, 255, 0);
//     color: ${({theme}) => theme.regularText};
//     display: flex;
//     font-size: 0.5625em;
//     justify-content: center;
//     padding-left: 0.1875em;
//     padding-right: 0;
//     transition: padding-left 0.15s, padding-right 0.15s;
//     transition-timing-function: ease-in-out;

//     /* border : solid 1px white; */

//     @media (max-width: 601px){
//         font-size: 0.75em;
//     }

//     &:hover {
//         padding-left: 0;
//         padding-right: 0.1875em;
//     }
// `;

// const Spacer = styled.div`
//     flex-grow: 1;
// `;

export default function MainContent ({indexOfChoiceDisplayed, handleChoiceClick, backToSelection}){
    const {allCategoryInTheBody, bodyTitle} = useContent();
    const chosenCategory = allCategoryInTheBody.filter((category, indexOfCategory) => indexOfCategory === indexOfChoiceDisplayed)[0];

    function categoryMaker({titleOfCategory}, indexOfCategory) {
        return (
            <button className="text-regularText text-3xl rounded-md border-solid border border-regularContainerBorder drop-shadow-xl shadow-regularContainerShadow bg-regularContainer p-2 transition-none option hover:bg-emphasizedContainer hover:border-emphasizedContainerBorder hover:shadow-emphasizedContainerShadow hover:text-emphasizedText" key={`${titleOfCategory}${indexOfCategory}`} onClick={() => handleChoiceClick(indexOfCategory)} chosen={indexOfChoiceDisplayed === indexOfCategory ? true : false}>
                <h2>{titleOfCategory}</h2>
            </button>
        )
    }


    if (indexOfChoiceDisplayed === -1){
        return (
            <div className="items-center flex flex-col h-full justify-center w-full text-regularText">
                <h2 className="text-3.5xl text-center sm:py-4 px-0 inline-block">{bodyTitle}</h2>
                <div className="option-container">
                    {allCategoryInTheBody.map(({fields : category}, indexOfCategory) => categoryMaker(category, indexOfCategory))}
                </div>
            </div>
        )
    } else {
        console.log(chosenCategory.fields["contentOfCategory"])
        return (
            <div className="items-center flex flex-col h-full justify-center w-full text-regularText">
                <div className="box-border flex flex-col h-full justify-start py-0 px-2 max-w-3xl md:w-3/5 w-4/5">
                    <h2 className="text-3.5xl text-center py-2 px-0">{allCategoryInTheBody[indexOfChoiceDisplayed].fields["titleOfCategory"]}</h2>
                    <div className="event-container">
                        {chosenCategory.fields["contentOfCategory"].map(({fields : event}) => <Event key={`${Math.random()}`} event={event}/>)}
                    </div>
                    <div className="flex w-full pt-3">
                        <div className="cursor-pointer bg-transparent text-regularText flex text-base justify-center pl-2 pr-0 ease-in-out back-button hover:pl-0 hover:pr-2" onClick={backToSelection}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </div>
                        <div className="flex-grow" />
                    </div>
                </div>
            </div>
        )
    }
}