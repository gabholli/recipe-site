import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../database/supbaseClient"

const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [session, setSession] = useState(undefined)

    function signUpNewUser() {

    }

    function signIn() {

    }

    function signOut() {

    }

    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}