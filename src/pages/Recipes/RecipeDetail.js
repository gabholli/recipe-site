import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function RecipeDetail() {
    const params = useParams()
    const [food, setFood] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                setFood(data.meals)
                setLoading(false)
            })
            .catch(error =>
                console.log("Fetch error: ", error))
    }, [params.id])

    const foodElements = food?.map(item => {
        return (
            <div key={item.idMeal} className="text-center flex flex-1 flex-col
            items-center justify-center gap-10 px-6 py-8">
                <h1 className="text-5xl">{item.strMeal}</h1>
                <img className="rounded sm:w-1/3" src={item.strMealThumb} alt="Food item" />
                {item.strYoutube ? <Link className="underline text-4xl" to={item.strYoutube}
                    target="_blank" rel="noopener noreferrer">
                    Recipe YouTube Video
                </Link>
                    : ""}
                <h2 className="text-3xl">Ingredients:</h2>
                <div className="text-xl leading-relaxed md:grid grid-cols-3 gap-6">
                    <p>{item.strMeasure1} {item.strIngredient1}</p>
                    <p>{item.strMeasure2} {item.strIngredient2}</p>
                    <p>{item.strMeasure3} {item.strIngredient3}</p>
                    <p>{item.strMeasure5} {item.strIngredient5}</p>
                    <p>{item.strMeasure6} {item.strIngredient6}</p>
                    <p>{item.strMeasure7} {item.strIngredient7}</p>
                    <p>{item.strMeasure8} {item.strIngredient8}</p>
                    <p>{item.strMeasure9} {item.strIngredient9}</p>
                    <p>{item.strMeasure10} {item.strIngredient10}</p>
                    <p>{item.strMeasure11} {item.strIngredient11}</p>
                    <p>{item.strMeasure12} {item.strIngredient12}</p>
                    <p>{item.strMeasure13} {item.strIngredient13}</p>
                    <p>{item.strMeasure14} {item.strIngredient14}</p>
                    <p>{item.strMeasure15} {item.strIngredient15}</p>
                    <p>{item.strMeasure16} {item.strIngredient16}</p>
                    <p>{item.strMeasure17} {item.strIngredient17}</p>
                    <p>{item.strMeasure18} {item.strIngredient18}</p>
                    <p>{item.strMeasure19} {item.strIngredient19}</p>
                    <p>{item.strMeasure20} {item.strIngredient20}</p>
                </div>
                <h1 className="text-3xl">Instructions:</h1>
                <p className="text-xl text-left leading-10 indent-14">{item.strInstructions}</p>
            </div>
        )
    })

    if (loading) {
        return (
            <div className="flex justify-center items-center flex-1">
                <h1 className="text-center text-2xl pt-20">Loading...</h1>
            </div>
        )
    }

    return (
        <>

            <div className="">
                {foodElements}
            </div>

        </>
    )
}
