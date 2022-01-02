import React, {useState, useContext} from "react";

const IsDark = React.createContext();

export function useIsDark() {
    return useContext(IsDark);
}

export default function IsDarkProvider({children}) {
    const[isDark, setIsDark] = useState(true);
    
    return (
        <IsDark.Provider value={[isDark, setIsDark]}>
            {children}
        </IsDark.Provider>
    )
}