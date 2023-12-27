import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header className="bg-green-200 text-center">

            <nav className="text-2xl sm:text-4xl">
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