import { UserAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { supabase } from "../../database/supabaseClient"
import { Link } from "react-router"

export default function FavoritesList() {
    const { session } = UserAuth()
    const [favList, setFavList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!session) return
        setLoading(true)
        async function fetchFavoritesList() {
            const { data, error } = await supabase
                .from('recipes')
                .select()
                .eq("user_id", session.user.id)
                .eq("favorite", true)

            if (error) {
                console.error("Error: ", error)
                setLoading(false)
                return
            }

            setFavList(data || [])
            setLoading(false)

        }

        fetchFavoritesList()

    }, [session])

    const recipeMap = favList?.map(item => {
        return (
            <div key={item.recipe_id} className="">
                <Link
                    className="text-center"
                    to={`../recipes/${item.recipe_id}`}
                    relative="path"
                >
                    <img className="rounded p-0 md:p-0"
                        src={item.image}
                        alt="Recipe item" />
                </Link>
                <div className="flex justify-center text-center items-center mt-12 px-4 gap-x-8 md:gap-x-8">
                    <h1 className="text-3xl">{item.name}</h1>
                </div>

            </div>
        )
    })

    if (loading) {
        return (
            <div className="flex justify-center items-center flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                        type="rotate" values="0 12 12;360 12 12" /></path></svg>
            </div>
        )
    }

    return (
        <div className="py-12 flex flex-1 flex-col justify-center items-center">
            {session && recipeMap.length > 0 && (
                <>
                    <h1 className='text-center text-4xl mb-10'>Favorites</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mx-12 p-4">
                        {recipeMap}
                    </div>
                </>
            )}

            {session && recipeMap.length === 0 && (
                <div className='flex justify-center items-center text-3xl text-center'>
                    <p>Add from within website to store your favorite recipes!</p>
                </div>
            )}

            {!session && (
                <div className='flex justify-center items-center text-3xl text-center'>
                    <p>Log in to store your favorite recipes!</p>
                </div>
            )}


        </div>

    )
}
