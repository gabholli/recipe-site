import { UserAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { supabase } from "../../database/supabaseClient"
import { Link } from "react-router"

export default function FavoritesList() {
    const { session } = UserAuth()
    const [favList, setFavList] = useState([])

    useEffect(() => {
        async function fetchFavoritesList() {
            const { data, error } = await supabase
                .from('recipes')
                .select()

            if (error) {
                console.error("Error: ", error)
            }

            setFavList(data)
        }

        fetchFavoritesList()

    }, [])

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
                        alt="" />
                </Link>
                <div className="flex justify-center text-center items-center mt-12 px-4 gap-x-8 md:gap-x-8">
                    <h1 className="text-3xl">{item.name}</h1>
                </div>

            </div>
        )
    })

    console.log(recipeMap)

    return (
        <>
            {session ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mx-12 p-4">
                    {recipeMap}
                </div>
            ) :
                <div className='flex justify-center items-center text-3xl flex-col'>
                    <p>Log in to store your favorite recipes!</p>
                </div>
            }
        </>

    )
}
