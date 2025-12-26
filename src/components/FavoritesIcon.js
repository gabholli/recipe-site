import React, { useEffect } from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'
import { supabase } from "../database/supabaseClient"

export default function FavoritesIcon({ meal }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const { session } = UserAuth()

    useEffect(() => {
        async function detectIfFavorite() {
            if (!session || !meal) return
            const { data, error } = await supabase
                .from('recipes')
                .select()
                .eq("user_id", session.user.id)
                .eq("recipe_id", meal.idMeal)
                .eq("favorite", true)

            if (error) {
                console.error("Error: ", error)
                return
            }

            if (data && data.length > 0) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }

        }

        detectIfFavorite()
    }, [session, meal])




    async function updateFavoriteStatus() {
        const newFavoriteState = !isFavorite
        setIsFavorite(newFavoriteState)
        if (newFavoriteState) {
            const { error } = await supabase
                .from('recipes')
                .upsert({
                    name: meal.strMeal,
                    user_id: session.user.id,
                    recipe_id: meal.idMeal,
                    favorite: true,
                    image: meal.strMealThumb
                })
                .select()

            if (error) {
                console.error("Error: ", error)
                setIsFavorite(!newFavoriteState)
                toast.error("Failed to add favorite")
                return
            }

            toast("Recipe added to favorites!")
        } else {
            const { error } = await supabase
                .from('recipes')
                .delete()
                .eq("user_id", session.user.id)
                .eq('recipe_id', meal.idMeal)

            if (error) {
                console.error("Error: ", error)
                setIsFavorite(!newFavoriteState)
                toast.error("Failed to remove favorite")
                return
            }
            toast("Recipe removed from favorites")
        }

    }

    function handleClick() {
        updateFavoriteStatus()
    }

    return (
        <>
            {session &&
                <button onClick={handleClick}><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
            }
        </>
    )
}