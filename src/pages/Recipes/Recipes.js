import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Recipes() {
    const foodItemFromLocalStorage = JSON.parse(localStorage.getItem("foodItem"))
    const [foodData, setFoodData] = useState([])
    const [search, setSearch] = useState({
        foodItem: foodItemFromLocalStorage
    })

    function handleSubmit(event) {
        event.preventDefault()
        setSearch(event.target.foodItem.value)
    }

    function handleChange(event) {
        setSearch({ [event.target.name]: event.target.value })
        localStorage.setItem("foodItem", JSON.stringify(event.target.value))
        console.log(search)
    }

    useEffect(() => {
        if (search.length > 0) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
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
        }
    }, [search])

    const recipeElements = foodData?.map(meal => (
        <div key={meal.idMeal} className="">
            <Link
                className="text-center text-2xl"
                to={meal.idMeal}
            // state={{
            //     search: `?${searchParams.toString()}`,
            //     type: typeFilter
            // }}
            >
                <img className="rounded"
                    src={meal.strMealThumb}
                    alt="" />
                <h1 className="mt-12">{meal.strMeal}</h1>
            </Link>
        </div>
    ))


    return (
        <div className="bg-yellow-100 py-12">
            <form className="text-center" onSubmit={handleSubmit}>
                <input className="border-2 border-gray-500 rounded-lg"
                    type="text"
                    placeholder="Enter dish name"
                    onChange={handleChange}
                    name="foodItem"
                    value={foodItemFromLocalStorage || ""}
                >
                </input>
                <button className="border-2 border-gray-500 rounded-lg">Search</button>
            </form>
            {foodData ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mx-12">
                    {recipeElements}
                </div>
            ) : <h1 className="bg-yellow-100 text-center text-2xl">No data currently...</h1>}
        </div>
    )
}
