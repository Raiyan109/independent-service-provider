import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [rkkAuth, setRkkAuth] = useState({
        user: null,
        token: ''
    })

    useEffect(() => {
        const data = localStorage.getItem('rkkAuth')
        if (data) {
            const parsedData = JSON.parse(data)
            setRkkAuth({
                ...rkkAuth,
                user: parsedData.user,
                token: parsedData.token
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const authInfo = {
        rkkAuth, setRkkAuth
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook
export const useAuth = () => useContext(AuthContext)