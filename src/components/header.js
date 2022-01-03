import React from "react";
import styled from "styled-components";

import { useIsDark } from "../context/darkTheme";
import { useIsEnglish } from "../context/language";

import { VanillaButton } from "../GlobalComponent";

import Icon from '@mdi/react'
import { mdiWeatherSunny } from '@mdi/js';
import { mdiWeatherNight } from '@mdi/js';

const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    display: flex;
    gap: 20px;
    height: 7.5vh;
    justify-content: flex-start;
    max-height: 100px;
    margin: 0;
    padding: 0 10px;
    width: 100%;

    /* border : solid 1px white; */
`;

const IconContainer = styled.div`
    color: ${({theme}) => theme.regularText};

    /* border : solid 1px white; */
`;

const Language = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    color: ${({chosen, theme}) => chosen ? theme.regularText : theme.unselectedBareText};
    font-size: 20px;
    font-weight: 600;
`;

const LanguageContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export default function Header (){
    const[isDark, setIsDark] = useIsDark(true);
    const[isEnglish, setIsEnglish] = useIsEnglish(true);

    return (
        <Main>
            <IconContainer>
                <Icon onClick={() => setIsDark(prevIsDark => !prevIsDark)} path={isDark ? mdiWeatherNight : mdiWeatherSunny} color="white" size={1} />
            </IconContainer>
            <LanguageContainer>
                <Language chosen={!isEnglish} onClick={() => setIsEnglish(false)}>ID</Language>
                <Language chosen={isEnglish} onClick={() => setIsEnglish(true)}>EN</Language>
            </LanguageContainer>

            
        </Main>
    )
}