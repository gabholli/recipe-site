import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Recipes() {
    const [foodData, setFoodData] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not available")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setFoodData(data.meals)
            })
            .catch(error =>
                console.log("Fetch error: ", error))
    }, [])

    const recipeElements = foodData?.map(meal => (
        <div key={meal.idMeal} className="food-tile">
            <Link
                className="link"
                to={meal.idMeal}
            // state={{
            //     search: `?${searchParams.toString()}`,
            //     type: typeFilter
            // }}
            >
                <img className="food-image"
                    src={meal.strMealThumb}
                    alt="Food item" />
                <h1 className="food-name">{meal.strMeal}</h1>
            </Link>
        </div>
    ))


    return (
        <div className="recipe-list-wrapper">
            <form>
                <input type="text"
                    placeholder="Enter dish name"
                    // onChange={props.handleChange}    
                    name="search"
                // value={props.search}
                >
                </input>
                <button>Search</button>
            </form>
            {foodData ? (
                <div className="recipe-list-container">
                    {recipeElements}
                </div>
            ) : <h1>No data currently...</h1>}

        </div>
    )
}
