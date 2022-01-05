import React from "react";
import styled from "styled-components";

import { useIsDark } from "../context/darkTheme";
import { useIsEnglish } from "../context/language";

import { VanillaButton } from "../GlobalComponent";

import { useTheme } from "styled-components";

import Icon from '@mdi/react'
import { mdiWeatherSunny } from '@mdi/js';
import { mdiWeatherNight } from '@mdi/js';

const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    display: flex;
    font-size: 2em;
    gap: 1.25em;
    height: 2em;
    justify-content: flex-start;
    margin: 0;
    padding: 0 0.2em;
    width: 100%;

    /* border : solid 1px white; */
`;

const IconContainer = styled.div`
    /* border : solid 1px white; */
`;

const Language = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    color: ${({chosen, theme}) => chosen ? theme.regularText : theme.unselectedBareText};
    font-size: 0.6em;
    font-weight: 600;
`;

const LanguageContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    /* border : solid 1px white; */
`;

export default function Header (){
    const[isDark, setIsDark] = useIsDark(true);
    const[isEnglish, setIsEnglish] = useIsEnglish(true);
    const themeFromHook = useTheme();

    return (
        <Main>
            {/* <IconContainer>
                <Icon onClick={() => setIsDark(prevIsDark => !prevIsDark)} path={isDark ? mdiWeatherNight : mdiWeatherSunny} color={themeFromHook.regularText} size={1} />
            </IconContainer> */}
            <LanguageContainer>
                <Language chosen={!isEnglish} onClick={() => setIsEnglish(false)}>ID</Language>
                <Language chosen={isEnglish} onClick={() => setIsEnglish(true)}>EN</Language>
            </LanguageContainer>

            
        </Main>
    )
}