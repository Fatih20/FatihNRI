import React, {useState} from "react";
import styled from "styled-components";

import { VanillaButton } from "../GlobalComponent";

import { useContent } from "../context/language";



const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    height: calc(100vh - 1rem);
    justify-content: center;
    padding: 0 10px;
    width: 100%;

    /* border: solid 1px white; */
`;

const MainWithinPadding = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    height: 100%;
    justify-content: center;

    /* border: solid 1px white; */
`;

const Title = styled.h1`
    font-size: 2.5em;
    /* margin-top: 6rem; */
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    align-items: flex-start;
    display: flex;
    font-size: 0.6em;
    width: 100%;
    /* height: calc(100vh - 1rem - 2.5em - 0.5em); */

    /* border : solid 1px white; */

    & > * {
        width: 50%;
    }
`;

const OccupationContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.5em;

    /* border: solid 1px white; */
`;

const SummaryContainer = styled.div`
    align-self: flex-start;
    /* border: solid 1px white; */
`;

const Occupation = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: ${({chosen, theme}) => chosen ? theme.regularText : theme.unselectedBareText};
    font-size: 1em;
    transition: color 0s, background-color 0s, box-shadow 0s;

    /* border : solid 1px white; */

    & > h2 {
        font-weight: 600;
        text-align: left;
    }

    &:hover {
        /* box-shadow: 0 3px 5px rgba(255, 255, 255, 0.35); */
        color: ${({theme}) => theme.regularText};
    }
`;

export default function Profile (){
    const[indexOfShownOccupation, setIndexOfShownOccupation] = useState(0);
    const {greeting, occupations} = useContent();


    function handleOccupationClick (newIndex){
        setIndexOfShownOccupation(newIndex)
    }

    function occupationMaker ({name}) {
        const occupationIndex = occupations.findIndex(element => element["name"] === name)
        const chosen = indexOfShownOccupation === occupationIndex ? true : false
        return (
            <Occupation onClick={() => handleOccupationClick(occupationIndex)} chosen={chosen}>
                <h2>{name}{chosen ? "," : null}</h2>
            </Occupation>
        )
    }

    return (
        <Main>
            <MainWithinPadding>
                <Title>{greeting} <br/>Fatih Nararya R. I.</Title>
                <BottomContainer>
                    <OccupationContainer>
                        <h2>As {occupations[indexOfShownOccupation]["a"] ? "a" : "an"}...</h2>
                        {occupations.map(occupationMaker)}
                    </OccupationContainer>
                    <SummaryContainer>
                        <p>{occupations[indexOfShownOccupation]["summary"]}</p>
                    </SummaryContainer>
                </BottomContainer>
            </MainWithinPadding>
        </Main>
    )
}