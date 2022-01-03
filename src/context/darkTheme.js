import React, {useState, useContext, useEffect} from "react";
import { ThemeProvider } from "styled-components";

import { dark, light } from "../theme";

const IsDark = React.createContext();

export function useIsDark() {
    return useContext(IsDark);
}

export default function IsDarkProvider({children}) {
    const[isDark, setIsDark] = useState(true);
    const theme = isDark ? dark : light;
    const bodyDocument = document.querySelectorAll("body")[0];

    useEffect(() => {
        console.log(theme);
        bodyDocument.style.backgroundImage = `linear-gradient(${theme.backgroundTopStop}, ${theme.backgroundBelowStop})`
    }, [isDark])
    
    return (
        <ThemeProvider theme={isDark ? dark : light}>
            <IsDark.Provider value={[isDark, setIsDark]}>
                {children}
            </IsDark.Provider>
        </ThemeProvider>
    )
}