import React from "react"
import { Link, NavLink } from "react-router-dom"

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
            </nav>

        </header>
    )
}