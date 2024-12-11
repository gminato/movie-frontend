import { createContext, useContext, useState } from "react";

const AppContext = createContext<
    {
        selectedState: string;
        selectedCity: string;
        setSelectedState: (state: string) => void;
        setSelectedCity: (city: string) => void;
    } | undefined
>(undefined);


export const AppProvider: React.FC<{children:React.ReactNode}> = ({ children  }) => {
    const [selectedState,setSelectedState] = useState('');
    const [selectedCity,setSelectedCity] = useState('');
    return (
        <AppContext.Provider value={{selectedCity,selectedState,setSelectedState,setSelectedCity}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
}