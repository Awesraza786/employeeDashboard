import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/localstorage";

export let userContext = createContext(null);
export function AuthContext({ children }) {

    const [userData, setUserData] = useState([{}]);

    useEffect(() => {
        const { employee, admin } = getLocalStorage()
        setUserData({ employee, admin })
    }, [])
    return (
        <div>
            <userContext.Provider value={userData} >
                {children}
            </userContext.Provider>
        </div>
    )
}