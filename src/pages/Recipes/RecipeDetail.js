import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function RecipeDetail() {
    const params = useParams()
    const [food, setFood] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                setFood(data.meals)
            })
            .catch(error =>
                console.log("Fetch error: ", error))
    }, [params.id])

    const foodElements = food.map(item => {
        return (
            <div className="recipe-details-container">
                <h1 className="detail-name">{item.strMeal}</h1>
                <img className="detail-image" src={item.strMealThumb} alt="Food item" />
                <p className="recipe-instructions">{item.strInstructions}</p>
            </div>
        )
    })

    return (
        <div className="detail-container">
            {foodElements}
        </div>
    )
}
