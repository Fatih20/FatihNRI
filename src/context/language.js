import React, {useState, useContext} from "react";

const IsEnglish = React.createContext();

export function useIsEnglish() {
    return useContext(IsEnglish);
}

export default function IsEnglishProvider({children}) {
    const[isEnglish, setIsEnglish] = useState(true);
    
    return (
        <IsEnglish.Provider value={[isEnglish, setIsEnglish]}>
            {children}
        </IsEnglish.Provider>
    )
}