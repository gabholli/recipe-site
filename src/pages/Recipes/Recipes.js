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
                className="text-center"
                to={meal.idMeal}
            // state={{
            //     search: `?${searchParams.toString()}`,
            //     type: typeFilter
            // }}
            >
                <img className="rounded"
                    src={meal.strMealThumb}
                    alt="" />
                <h1 className="mt-12 text-3xl hover:underline">{meal.strMeal}</h1>
            </Link>
        </div>
    ))


    return (
        <div className="bg-green-100 py-12 flex flex-1 flex-col items-center">
            <form className="text-center mb-12 flex flex-col sm:flex-row sm:items-center 
            justify-center gap-4" onSubmit={handleSubmit}>
                <input className="bg-gradient-to-b from-green-200 to-green-300
                border-2 border-gray-500 rounded-lg indent-3 h-10 w-64"
                    type="text"
                    placeholder="Enter dish or ingredient name"
                    onChange={handleChange}
                    name="foodItem"
                    value={foodItemFromLocalStorage || ""}
                >
                </input>
                <button className="bg-gradient-to-b from-green-200 to-green-300
                    border-2 border-gray-500 rounded-lg h-10 px-4 py-2">Search</button>
            </form>
            {foodData ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mx-12">
                    {recipeElements}
                </div>
            ) : <h1 className="bg-green-100 text-center text-2xl">No data currently...</h1>}
        </div>
    )
}
