import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function RandomMeal() {
    const [random, setRandom] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                setRandom(data.meals[0])
                setLoading(false)
            })
            .catch(error =>
                console.log("Fetch error: ", error))
    }, [])

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
        <> {random &&
            <div className="text-center flex flex-1 flex-col
                    items-center justify-center gap-10 px-6 py-8">
                <h1 className="text-5xl">{random.strMeal}</h1>
                <img className="rounded sm:w-1/3" src={random.strMealThumb} alt=" Random food" />
                {
                    random.strYoutube ? <Link className="underline text-4xl"
                        to={random.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer">
                        Recipe YouTube Video
                    </Link>
                        : ""
                }
                <h2 className="text-3xl">Ingredients:</h2>
                <div className="text-xl leading-10">
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
                <p className="text-xl text-left leading-10 indent-14">{random.strInstructions}</p>
            </div>
        }
        </>
    )
}