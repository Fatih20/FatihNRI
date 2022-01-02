import React, {useState} from "react";
import styled from "styled-components";

import { VanillaButton } from "../GlobalComponent";

import occupations from "../content/occupation";


const Main = styled.div`
    align-items: flex-start;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* border: solid 1px white; */
`;

const Title = styled.h1`
    font-size: 84px;
    margin-top: 100px;
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100%;

    & > * {
        width: 50%;
    }
`;

const OccupationContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;

    /* border: solid 1px white; */
`;

const SummaryContainer = styled.div`
    /* border: solid 1px white; */
`;

const Occupation = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: ${({chosen}) => chosen ? "white" : "black"};
    transition: color 0s, background-color 0s, box-shadow 0s;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    &:hover {
        /* box-shadow: 0 3px 5px rgba(255, 255, 255, 0.35); */
        color: white;
    }
`;

export default function Profile (){
    const[indexOfShownOccupation, setIndexOfShownOccupation] = useState(0);

    function handleOccupationClick (newIndex){
        setIndexOfShownOccupation(newIndex)
    }

    function occupationMaker ({name}) {
        const occupationIndex = occupations.findIndex(element => element["name"] === name)
        return (
            <Occupation onClick={() => handleOccupationClick(occupationIndex)} chosen={indexOfShownOccupation === occupationIndex ? true : false}>
                <h2>{name}</h2>
            </Occupation>
        )
    }

    return (
        <Main>
            <Title>Hello! I am <br/>Fatih Nararya R. I.</Title>
            <BottomContainer>
                <OccupationContainer>
                    {occupations.map(occupationMaker)}
                </OccupationContainer>
                <SummaryContainer>
                    <p>{occupations[indexOfShownOccupation]["summary"]}</p>
                </SummaryContainer>
            </BottomContainer>
        </Main>
    )
}