import React, {useState, useContext} from "react";

import allContent from "../content/allContent";

const IsEnglish = React.createContext();
const Content = React.createContext()

export function useIsEnglish() {
    return useContext(IsEnglish);
}

export function useContent() {
    return useContext(Content);
}

export default function IsEnglishProvider({children}) {
    const[isEnglish, setIsEnglish] = useState(false);
    const content = isEnglish ? allContent["EN"] : allContent["ID"];
    
    return (
        <IsEnglish.Provider value={[isEnglish, setIsEnglish]}>
            <Content.Provider value={content}>
                {children}
            </Content.Provider>
        </IsEnglish.Provider>
    )
}