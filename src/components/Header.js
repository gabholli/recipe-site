import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header>

            <nav>
                <NavLink
                    className="link"
                    to="/">Home
                </NavLink>
                <NavLink
                    to="/recipes"
                    className="link"
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="/random"
                    className="link"
                >
                    Random Meal
                </NavLink>
            </nav>

        </header>
    )
}