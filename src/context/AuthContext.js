import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../database/supabaseClient"

const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [session, setSession] = useState(undefined)
    const authenticated = supabase.auth.getUser()
    console.log(authenticated)

    async function signUpNewUser(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            console.error("Error signing up: ", error)
            return { success: false, error }
        }

        return { success: true, data }
    }

    function signIn() {

    }

    function signOut() {

    }

    return (
        <AuthContext.Provider value={{ session, authenticated, signUpNewUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}