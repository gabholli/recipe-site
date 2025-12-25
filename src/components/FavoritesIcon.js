import React from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'
import { supabase } from "../database/supabaseClient"

export default function FavoritesIcon({ meal }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const { session } = UserAuth()

    async function updateFavoriteStatus() {
        setIsFavorite(!isFavorite)
        if (!isFavorite) {
            const { error } = await supabase
                .from('recipes')
                .upsert({
                    name: meal.strMeal,
                    user_id: session.user.id,
                    recipe_id: meal.idMeal,
                    favorite: true
                })
                .select()

            if (error) {
                console.error("Error: ", error)
            }
        } else {
            const { error } = await supabase
                .from('recipes')
                .delete()
                .eq('name', meal.strMeal)

            if (error) {
                console.error("Error: ", error)
            }
        }

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