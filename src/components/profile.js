import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

// Components
import { VanillaButton } from "../GlobalComponent";

// Context
import { useContent } from "../context/language";
import { useIsEnglish } from "../context/language";
import { useTheme } from "styled-components";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";



const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    font-size: 2em;
    height: calc(100vh - 2em);
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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Greeting = styled.h2`
    font-size: 1.5em;
`;

const Name = styled.h1`
    font-size: 2.5em;

    /* border : solid 1px white; */
`;

const Buffer = styled.div`
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    align-items: flex-start;
    align-self: center;
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    gap: 0.25em;
    max-width: 35em;
    width: 100%;

    & > * {
        margin: 0 auto;
    }

    /* border : solid 1px white; */
`;

const WhatAmILineContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 0.25em;
    width: 100%;

`;

const ChangeWhatAmI = styled(VanillaButton)`
    background-color: rgba(0, 0 ,0, 0);
    color: ${({theme}) => theme.unselectedBareText};
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
    min-height: 10em;
    /* border: solid 1px white; */
`;

export default function Profile (){
    const[indexOfShownOccupation, setIndexOfShownOccupation] = useState(0);
    const {greeting, occupations, asA} = useContent();
    const[isEnglish, ] = useIsEnglish();

    const theme = useTheme();
    const buttonFirstClicked = useRef(false);
    const leftButton = useRef();
    const rightButton = useRef();
    const leftIsSimulated = true;

    let cycleThrough;
    useEffect(() => {
        cycleThrough = setInterval(simulatedClick, 6000);
    }, [])

    function simulatedClick() {
        if (buttonFirstClicked.current) {
            clearInterval(cycleThrough);
        } else {
            const simulatedTarget = leftIsSimulated ? leftButton : rightButton;
            simulatedTarget.current.click();
        }
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

    function whatAmI() {
        return `${asAMaker(indexOfShownOccupation)} ${occupations[indexOfShownOccupation]["name"]}`
    }
    
    function handleChangeWhatAmIClick(isLeft, e) {
        const simulatedTarget = leftIsSimulated ? leftButton : rightButton;
        if (e.isTrusted) {
            simulatedTarget.current.style.color = null;
            buttonFirstClicked.current = true;
            cycleOccupation(isLeft);
        } else {
            simulatedTarget.current.style.color = theme.regularText;
            setTimeout(() => {
                simulatedTarget.current.style.color = theme.unselectedBareText;
            }, 100)
            setTimeout(() => {cycleOccupation(isLeft)}, 200);
        }
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
                <TitleContainer>
                    <Greeting>{greeting}</Greeting>
                    <Name>Fatih Nararya R. I.</Name>
                </TitleContainer>
                <BottomContainer>
                    <OccupationContainer>
                        <WhatAmILineContainer>
                            <ChangeWhatAmI ref={leftButton} onClick={(e) => handleChangeWhatAmIClick(true, e)}>
                                <FontAwesomeIcon icon={faCaretLeft}/>
                            </ChangeWhatAmI>
                            <Buffer />
                            <h2 dangerouslySetInnerHTML={{ __html : whatAmI() }}/>
                            <Buffer />
                            <ChangeWhatAmI ref={rightButton} onClick={(e) => handleChangeWhatAmIClick(false, e)}>
                                <FontAwesomeIcon icon={faCaretRight}/>
                            </ChangeWhatAmI>
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