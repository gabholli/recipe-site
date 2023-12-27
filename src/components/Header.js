import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header className="h-20 bg-green-200 text-2xl sm:text-4xl  text-center flex justify-center items-center">

            <nav className="text-2xl sm:text-4xl flex justify-center gap-8">
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