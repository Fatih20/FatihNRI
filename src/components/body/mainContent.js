import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import options from "../../content/allContent";
import { VanillaButton } from "../../GlobalComponent";

import { useContent } from "../../context/language";

import Event from "./event";

const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    height: 100%;
    width: 100%;

    /* border : solid 1px white; */
`;

const Title = styled.h2`
    font-size: 36px;
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
`;

const Option = styled(VanillaButton)`
    background-color: ${({theme}) => theme.regularContainer};
    border-radius: 5px;
    border: solid 1px ${({theme}) => theme.regularContainerBorder};
    box-shadow: 0 3px 5px ${({theme}) => theme.regularContainerShadow};
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    padding: 15px;
    transition: color 0s, background-color 0s, box-shadow 0s;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    &:hover {
        background-color: ${({theme}) => theme.emphasizedContainer};
        border: solid 1px ${({theme}) => theme.emphasizedContainerBorder};
        box-shadow: 0 3px 5px ${({theme}) => theme.emphasizedContainerShadow};
        color: ${({theme}) => theme.emphasizedText} ;
    }
`;

const ShowingEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    width: 60%;

    /* border : solid 1px white; */
`;

const EventContainerTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 5px;
    text-align: center;
`;

const EventContainer = styled.div`
    -ms-overflow-style :none;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding-right: 0.5vw;
    scrollbar-width: none;
    overflow: auto;

    &::-webkit-scrollbar{
        width: 0.5vw;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.regularContainer};
        border: solid 1px ${({theme}) => theme.scrollbarBorder};
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background-color: ${({theme}) => theme.scrollbarHoveredFill};
    }

    &::-webkit-scrollbar-track{
        background-color: rgba(0, 0, 0, 0);
    }

    /* border : solid 1px white; */
`;

const BackContainer = styled.div`
    display: flex;
    padding: 20px 0;
    width: 100%;
`;

const BackButton = styled(VanillaButton)`
    background-color: rgba(255, 255, 255, 0);
    color: ${({theme}) => theme.regularText};
    display: flex;
    font-size: 18px;
    gap: 5px;
    justify-content: center;
    padding-left: 3px;
    transition: padding-left 0.15s;
    transition-timing-function: ease-in-out;

    &:hover {
        padding-left: 0;
    }
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

export default function MainContent ({choiceDisplayed, handleChoiceClick, backToSelection}){
    const {options} = useContent(); 


    function optionMaker({name}) {
        return (
            <Option onClick={() => handleChoiceClick(name)} key={name} chosen={choiceDisplayed === name ? true : false}>
                <h2>{name}</h2>
            </Option>
        )
    }

    if (choiceDisplayed === "selection"){
        return (
            <Main>
                <Title>Things I've done</Title>
                <OptionContainer>
                    {options.map((option) => optionMaker(option))}
                </OptionContainer>
            </Main>
        )
    } else {
        return (
            <Main>
                <ShowingEventContainer>
                    <EventContainerTitle>{choiceDisplayed}</EventContainerTitle>
                    <EventContainer>
                        {options.filter(option => option["name"] === choiceDisplayed)[0]["content"].map((event) => <Event event={event}/>)}
                    </EventContainer>
                    <BackContainer>
                        <BackButton onClick={backToSelection}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </BackButton>
                        <Spacer />
                    </BackContainer>
                </ShowingEventContainer>
            </Main>
        )
    }
}