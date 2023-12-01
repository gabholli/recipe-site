import React from "react"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <h1>All the recipes you need.</h1>
            <p>We should have the information you're looking for.</p>
            <Link to="recipes">Find your recipe</Link>
        </div>
    )
}