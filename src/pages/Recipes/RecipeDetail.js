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
            <div key={item.idMeal} className="detail-container">
                <h1 className="detail-name">{item.strMeal}</h1>
                <img className="detail-image" src={item.strMealThumb} alt="Food item" />
                {item.strYoutube ? <Link className="youtube-link" to={item.strYoutube}>
                    Recipe YouTube Video
                </Link>
                    : <p className="no-video-text">(No YouTube Video)</p>}
                <h2 className="ingredients-heading">Ingredients:</h2>
                <ul className="ingredients-list">
                    <li>{item.strMeasure1} {item.strIngredient1}</li>
                    <li>{item.strMeasure2} {item.strIngredient2}</li>
                    <li>{item.strMeasure3} {item.strIngredient3}</li>
                    <li>{item.strMeasure5} {item.strIngredient5}</li>
                    <li>{item.strMeasure6} {item.strIngredient6}</li>
                    <li>{item.strMeasure7} {item.strIngredient7}</li>
                    <li>{item.strMeasure8} {item.strIngredient8}</li>
                    <li>{item.strMeasure9} {item.strIngredient9}</li>
                    <li>{item.strMeasure10} {item.strIngredient10}</li>
                    <li>{item.strMeasure11} {item.strIngredient11}</li>
                    <li>{item.strMeasure12} {item.strIngredient12}</li>
                    <li>{item.strMeasure13} {item.strIngredient13}</li>
                    <li>{item.strMeasure14} {item.strIngredient14}</li>
                    <li>{item.strMeasure15} {item.strIngredient15}</li>
                    <li>{item.strMeasure16} {item.strIngredient16}</li>
                    <li>{item.strMeasure17} {item.strIngredient17}</li>
                    <li>{item.strMeasure18} {item.strIngredient18}</li>
                    <li>{item.strMeasure19} {item.strIngredient19}</li>
                    <li>{item.strMeasure20} {item.strIngredient20}</li>
                </ul>
                <h1 className="instructions-heading">Instructions:</h1>
                <p className="recipe-instructions">{item.strInstructions}</p>
            </div>
        )
    })

    return (
        <> {food ? (
            <div className="detail-container">
                {foodElements}
            </div>
        ) : <h1>Loading...</h1>}

        </>
    )
}
