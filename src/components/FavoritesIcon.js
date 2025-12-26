import React, { useEffect } from 'react'
import { FaRegStar } from "react-icons/fa"
import { useState } from 'react'
import toast from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'
import { supabase } from "../database/supabaseClient"

export default function FavoritesIcon({ meal }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
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
                .maybeSingle()

            if (error) {
                console.error("Error: ", error)
                return
            }

            setIsFavorite(!!data)

        }

        detectIfFavorite()
    }, [session, meal])




    async function updateFavoriteStatus() {
        if (!session || !meal || isUpdating) return

        setIsUpdating(true)
        const newFavoriteState = !isFavorite
        setIsFavorite(newFavoriteState)

        try {
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

                if (error) throw error
                toast("Recipe added to favorites!")

            } else {
                const { error } = await supabase
                    .from('recipes')
                    .delete()
                    .eq("user_id", session.user.id)
                    .eq('recipe_id', meal.idMeal)

                if (error) throw error
                toast("Recipe removed from favorites")
            }
        } catch (error) {
            console.error("Error: ", error)
            setIsFavorite(!newFavoriteState)
            toast.error(`Failed to ${newFavoriteState ? 'add' : 'remove'} favorite`)
        } finally {
            setIsUpdating(false) // Always runs
        }
    }

    return (
        <>
            {session &&
                <button onClick={updateFavoriteStatus}
                    disabled={isUpdating}
                ><FaRegStar color={isFavorite ? "yellow" : "White"} /> </button>
            }
        </>
    )
}