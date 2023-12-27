import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function RandomMeal() {

    const [random, setRandom] = useState(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                setRandom(data.meals[0])
            })
            .catch(error =>
                console.log("Fetch error: ", error))
    }, [])
    return (
        <>
            {random ? (
                <div className="text-center bg-green-100 flex flex-1 flex-col
                    items-center justify-center gap-10 px-6 py-8">
                    <h1 className="text-5xl">{random.strMeal}</h1>
                    <img className="rounded sm:w-1/3" src={random.strMealThumb} alt=" Random food" />
                    {
                        random.strYoutube ? <Link className="hover:underline text-4xl text-blue-900" to={random.strYoutube}>
                            Recipe YouTube Video
                        </Link>
                            : ""
                    }
                    <h2 className="text-3xl">Ingredients:</h2>
                    <div className="text-xl leading-relaxed">
                        <p>{random.strMeasure1} {random.strIngredient1}</p>
                        <p>{random.strMeasure2} {random.strIngredient2}</p>
                        <p>{random.strMeasure3} {random.strIngredient3}</p>
                        <p>{random.strMeasure5} {random.strIngredient5}</p>
                        <p>{random.strMeasure6} {random.strIngredient6}</p>
                        <p>{random.strMeasure7} {random.strIngredient7}</p>
                        <p>{random.strMeasure8} {random.strIngredient8}</p>
                        <p>{random.strMeasure9} {random.strIngredient9}</p>
                        <p>{random.strMeasure10} {random.strIngredient10}</p>
                        <p>{random.strMeasure11} {random.strIngredient11}</p>
                        <p>{random.strMeasure12} {random.strIngredient12}</p>
                        <p>{random.strMeasure14} {random.strIngredient14}</p>
                        <p>{random.strMeasure15} {random.strIngredient15}</p>
                        <p>{random.strMeasure16} {random.strIngredient16}</p>
                        <p>{random.strMeasure17} {random.strIngredient17}</p>
                        <p>{random.strMeasure18} {random.strIngredient18}</p>
                        <p>{random.strMeasure19} {random.strIngredient19}</p>
                        <p>{random.strMeasure20} {random.strIngredient20}</p>
                    </div>
                    <h1 className="text-3xl">Instructions:</h1>
                    <p className="text-xl text-left leading-relaxed">{random.strInstructions}</p>
                </div >
            ) : <h1 className="text-center text-2xl bg-green-100 flex-1 pt-20">Loading...</h1>
            }
        </>
    )
}