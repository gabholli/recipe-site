import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header className="h-20 bg-black bg-opacity-50 text-2xl 
            sm:text-4xl text-center flex justify-center items-center">

            <nav className="text-base sm:text-4xl flex justify-center items-center gap-6 m-4">
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
            </nav>

        </header>
    )
}