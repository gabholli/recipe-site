import React from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'

export default function FavoritesIcon() {
    const [isFavorite, setIsFavorite] = useState(false)
    const { authenticated } = UserAuth()

    function updateFavoriteStatus() {
        setIsFavorite(!isFavorite)
    }

    function authMessage() {
        if (!isFavorite && !authenticated) {
            toast("Stored temporarily in favorites - Log in to store favorites permanently")
        }
    }

    function handleClick() {
        updateFavoriteStatus()
        authMessage()
    }

    return (
        <>
            {authenticated &&
                <button onClick={handleClick}><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
            }
        </>
    )
}