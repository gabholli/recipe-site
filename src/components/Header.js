import React from "react"
import { NavLink } from "react-router"
import { UserAuth } from "../context/AuthContext"

export default function Header() {
    const { session, signOut } = UserAuth()

    return (
        <header className="md:h-20 bg-neutral-600 bg-opacity-50 text-2xl 
            sm:text-4xl text-center flex justify-center items-center">

            <nav className="text-base sm:text-4xl md:text-2xl lg:text-3xl 
            flex flex-wrap md:flex-row justify-center items-center gap-6 m-4">
                <NavLink
                    className="hover:underline"
                    to="/">Home
                </NavLink>
                <NavLink
                    to="/recipes"
                    className="hover:underline"
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="/random"
                    className="hover:underline"
                >
                    Random Meal
                </NavLink>
                <NavLink
                    to="/favorites"
                    className="hover:underline"
                >
                    Favorites
                </NavLink>
                {!session && (<NavLink
                    to="/signup"
                    className="hover:underline"
                >
                    Sign Up/Log In
                </NavLink>
                )
                }
                {session && (<button
                    className="hover:underline"
                    onClick={signOut}
                >
                    Sign Out
                </button>
                )
                }
            </nav>

        </header>
    )
}