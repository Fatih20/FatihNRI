import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";

import allContent from "../content/allContent";
import useContentFromContentful from "../customHooks/useContentFromContentful";

const IsEnglish = React.createContext();
const Content = React.createContext()

const Main = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
`;

export function useIsEnglish() {
    return useContext(IsEnglish);
}

export function useContent() {
    return useContext(Content);
}

export default function IsEnglishProvider({children}) {
    const[isEnglish, setIsEnglish] = useState(false);
    const[allContent, isLoading] = useContentFromContentful();

    function contentLanguageSelector() {
        const usedLanguageID = isEnglish ? "EN" : "ID";
        return allContent.filter(languageSpecificContent => languageSpecificContent.fields.language === usedLanguageID)
    }

    const usedContent = contentLanguageSelector()[0];
    
    return (
        <IsEnglish.Provider value={[isEnglish, setIsEnglish]}>
            <Content.Provider value={isLoading ? null : usedContent.fields}>
                {isLoading ? <Main/> : children}
            </Content.Provider>
        </IsEnglish.Provider>
    )
}