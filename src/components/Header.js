import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header>
            <Link
                className="link"
                to="/">Home</Link>
            <nav>
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