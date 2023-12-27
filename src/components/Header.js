import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header className="h-20 bg-gradient-to-b from-green-200 to-green-300 text-2xl sm:text-4xl text-center flex justify-center items-center">

            <nav className="text-2xl sm:text-4xl flex justify-center items-center gap-6 m-4">
                <NavLink
                    to="/">Home
                </NavLink>
                <NavLink
                    to="/recipes"
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="/random"
                >
                    Random Meal
                </NavLink>
            </nav>

        </header>
    )
}