import React from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function FavoritesIcon() {
    const [isFavorite, setIsFavorite] = useState(false)
    const authenticated = true

    function updateFavoriteStatus() {
        setIsFavorite(!isFavorite)
    }

    function authMessage() {
        if (!isFavorite) {
            toast("Stored temporarily in favorites - Log in to store favorites permanently")
        }
    }

    function handleClick() {
        updateFavoriteStatus()
        authMessage()
    }

    return (
        <button onClick={handleClick}><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
    )
}