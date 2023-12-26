import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header className="h-32 bg-yellow-200 text-5xl text-center text-gray-600">

            <nav>
                <NavLink
                    className=""
                    to="/">Home
                </NavLink>
                <NavLink
                    to="/recipes"
                    className=""
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="/random"
                    className=""
                >
                    Random Meal
                </NavLink>
            </nav>

        </header>
    )
}