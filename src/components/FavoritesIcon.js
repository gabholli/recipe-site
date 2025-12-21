import React from 'react'
import { FaRegStar } from "react-icons/fa"


export default function FavoritesIcon() {
    return (
        <button onClick={() => console.log("Clicked")}><FaRegStar /> </button>
    )
}