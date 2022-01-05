import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

import { VanillaButton } from "../GlobalComponent";

import { useContent } from "../context/language";
import { useIsEnglish } from "../context/language";

import { shadeColor } from "../theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

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
    margin: 0 auto;
    /* margin-top: 6rem; */
    /* border : solid 1px white; */
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    gap: 0.25em;
    width: 100%;

    & > * {
        margin: 0 auto;
    }

    /* height: calc(100vh - 1rem - 2.5em - 0.5em); */

    /* border : solid 1px white; */
`;

const WhatAmILineContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 0.25em;
    width: 100%;

`;

const WhatAmILine = styled.h2`
    /* border-bottom: solid 1px ${({theme}) => shadeColor(theme.standaloneBorder, -50)}; */
    /* padding-bottom: 0.15em; */
`;

const ChangeWhatAmI = styled(VanillaButton)`
    background-color: rgba(0, 0 ,0, 0);
    color: ${({theme, whileClicking}) => whileClicking ? theme.aboutToBeSelectedBareText : theme.unselectedBareText};
    font-size: 2em;
    transition: color 0s, background-color 0s, box-shadow 0s;

    & > * {
        transition: color 0s, background-color 0s, box-shadow 0s;
    }

    &:hover {
        color: ${({theme}) => theme.aboutToBeSelectedBareText};

    }

    &:active {
        color: ${({theme}) => theme.regularText};
    }
`;

const OccupationContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.5em;
    width: 100%;

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

    /* border : solid 1px white; */

    & > h2 {
        font-weight: 600;
        text-align: left;
    }

    & * {
        transition: color 0s, background-color 0s, box-shadow 0s;
    }

    &:hover {
        /* box-shadow: 0 3px 5px rgba(255, 255, 255, 0.35); */
        color: ${({theme}) => theme.aboutToBeSelectedBareText};
    }
`;

export default function Profile (){
    const[indexOfShownOccupation, setIndexOfShownOccupation] = useState(0);
    const {greeting, occupations, asA} = useContent();
    const[isEnglish, setIsEnglish] = useIsEnglish();
    const [whileClicking, setWhileClicking] = useState(false);
    const buttonFirstClicked = useRef(false);
    
    // const cycleThroughWhatAmI = setInterval(simulatedClick, 3000);
    // setInterval()

    let cycleThrough;
    useEffect(() => {
        console.log("Bruh 2")
        cycleThrough = setInterval(simulatedClick, 3000);
    }, [])

    function simulatedClick() {
        if (buttonFirstClicked.current) {
            clearInterval(cycleThrough);
            setWhileClicking(prevWhileClicking => !prevWhileClicking);
            setTimeout(() => setWhileClicking(prevWhileClicking => !prevWhileClicking), 3000);
        } else {
            cycleOccupation(false);
        }
    }

    function handleOccupationClick (newIndex){
        setIndexOfShownOccupation(newIndex)
    }

    function asAMaker() {
        if (isEnglish){
            if (occupations[indexOfShownOccupation]["a"]) {
                return `${asA} a`
            } else {
                return `${asA} an`
            }
        } else {
            return (asA)
        }
    }

    function occupationMaker ({name}) {
        const occupationIndex = occupations.findIndex(element => element["name"] === name)
        const chosen = indexOfShownOccupation === occupationIndex ? true : false
        const content = `<h2>${name}${chosen ? "." : ""}</h2>`;
        return (
            <Occupation onClick={() => handleOccupationClick(occupationIndex)} chosen={chosen} dangerouslySetInnerHTML={{ __html: content }}>
            </Occupation>
        )
    }

    function rearrangedOccupations() {
        let newOccupations = JSON.parse(JSON.stringify(occupations));
        const selectedOccupation = occupations[indexOfShownOccupation];
        newOccupations.splice(indexOfShownOccupation, 1);
        return newOccupations;
    }

    function whatAmI() {
        return `${asAMaker(indexOfShownOccupation)} ${occupations[indexOfShownOccupation]["name"]}`
    }
    
    function handleChangeWhatAmIClick(isLeft) {
        buttonFirstClicked.current = true;
        console.log("Bruh");
        window.clearInterval(cycleThrough);
        console.log(cycleThrough);
        cycleOccupation(isLeft);
    }

    function cycleOccupation(isLeft) {
        if (isLeft){
            setIndexOfShownOccupation(prevIndexOfShownOccupation => (prevIndexOfShownOccupation - 1) === -1 ? occupations.length-1 : (prevIndexOfShownOccupation - 1))
        } else {
            setIndexOfShownOccupation(prevIndexOfShownOccupation => (prevIndexOfShownOccupation + 1) % occupations.length)
        }
    }

    return (
        <Main>
            <MainWithinPadding>
                <Title>{greeting} <br/>Fatih Nararya R. I.</Title>
                <BottomContainer>
                    <OccupationContainer>
                        <WhatAmILineContainer>
                            <ChangeWhatAmI onClick={() => handleChangeWhatAmIClick(true)}>
                                <FontAwesomeIcon icon={faCaretLeft}/>
                            </ChangeWhatAmI>
                            <Buffer />
                            <WhatAmILine dangerouslySetInnerHTML={{ __html : whatAmI() }}/>
                            <Buffer />
                            <ChangeWhatAmI onClick={() => handleChangeWhatAmIClick(false)} whileClicking={whileClicking}>
                                <FontAwesomeIcon icon={faCaretRight}/>
                            </ChangeWhatAmI>
                            {/* {rearrangedOccupations().map(occupationMaker)} */}
                        </WhatAmILineContainer>
                    </OccupationContainer>
                    <SummaryContainer>
                        <p dangerouslySetInnerHTML={{ __html : occupations[indexOfShownOccupation]["summary"] }} />
                    </SummaryContainer>
                </BottomContainer>
            </MainWithinPadding>
        </Main>
    )
}