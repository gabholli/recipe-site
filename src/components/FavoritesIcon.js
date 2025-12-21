import React from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'

export default function FavoritesIcon() {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button onClick={() => setIsFavorite(!isFavorite)}><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
    )
}