import React, {useState, useContext, useEffect} from "react";
import { ThemeProvider } from "styled-components";

import { dark, light } from "../theme";

const IsDark = React.createContext();
const Theme = React.createContext()

export function useIsDark() {
    return useContext(IsDark);
}

export function useTheme() {
    return useContext(Theme);
}

export default function IsDarkProvider({children}) {
    const[isDark, setIsDark] = useState(true);
    const theme = isDark ? dark : light;
    const bodyDocument = document.querySelectorAll("body")[0];

    useEffect(() => {
        bodyDocument.style.backgroundImage = `linear-gradient(${theme.backgroundTopStop}, ${theme.backgroundBelowStop})`
    }, [isDark])
    
    return (
        <ThemeProvider theme={theme}>
            <IsDark.Provider value={[isDark, setIsDark]}>
                <Theme.Provider value={isDark ? dark : light}>
                    {children}
                </Theme.Provider>
            </IsDark.Provider>
        </ThemeProvider>
    )
}