import React, { createContext, useState } from "react";

export const AppContext = createContext({
    userName: '',
    setUserName: (_: string) => {},
})


const AppContextProvider = ({children} : any) => {

    const [userName, setUserName] = useState<string>('');

    return (
        <AppContext.Provider value={
            {
                userName,
                setUserName: (userName: string) => {
                    setUserName(userName)
                },
            }
        }>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;