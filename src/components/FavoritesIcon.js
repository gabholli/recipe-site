import React from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'

export default function FavoritesIcon() {
    const [isFavorite, setIsFavorite] = useState(false)
    const { session } = UserAuth()

    function updateFavoriteStatus() {
        setIsFavorite(!isFavorite)
    }

    function favoriteMessage() {
        if (!isFavorite) {
            toast("Recipe added to favorites!")
        } else {
            toast("Recipe removed from favorites")
        }
    }

    function handleClick() {
        updateFavoriteStatus()
        favoriteMessage()
    }

    return (
        <>
            {session &&
                <button onClick={handleClick}><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
            }
        </>
    )
}