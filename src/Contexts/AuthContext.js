import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [appdata, setAppdata] = useState(null);



    const login = (user,token,appdata) => {

        setUser(user)
        setToken(token)
        setAppdata(appdata)
    }
    

    const logOut = () => {
        
        setUser(null)
        setToken(null)
        setAppdata(null)
    }



    return (
        <AuthContext.Provider value={{user,token,appdata,logOut,login}}>
          {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    
    return useContext(AuthContext)
}