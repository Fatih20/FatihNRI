import React, {useState} from "react";
import styled from "styled-components";

import { VanillaButton } from "../GlobalComponent";

import occupations from "../content/occupation";


const Main = styled.div`
    background-color: #c6262e;
    color: white;
    display: flex;
    height: 60vh;
    width: 100%;

    & > * {
        box-sizing: border-box;
        border: solid 1px white;
        width: 50%;
    }
`;

const Filler = styled.div`
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const OccupationContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;

    /* border: solid 1px white; */
`;

const Occupation = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: ${({chosen}) => chosen ? "white" : "black"};
    padding: 15px;
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

    const sliderSettings = {
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        centerMode: true,
    }

    function handleOccupationClick (newIndex){
        setIndexOfShownOccupation(newIndex)
    }

    function occupationMaker ({name, summary}) {
        const occupationIndex = occupations.findIndex(element => element["name"] === name)
        return (
            <Occupation onClick={() => handleOccupationClick(occupationIndex)} chosen={indexOfShownOccupation === occupationIndex ? true : false}>
                <h2>{name}</h2>
            </Occupation>
        )
    }

    return (
        <Main>
            <Content>
                <Title>Hello! I am Fatih Nararya R. I.</Title>
                <Buffer />
                    <BottomContainer>
                        <h2>Who am I?</h2>
                        <OccupationContainer>
                            {occupations.map(occupationMaker)}
                        </OccupationContainer>
                        <p>{occupations[indexOfShownOccupation]["summary"]}</p>
                    </BottomContainer>
            </Content>
            <Filler />
        </Main>
    )
}