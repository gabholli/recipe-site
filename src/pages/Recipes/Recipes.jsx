import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import FavoritesIcon from "../../components/FavoritesIcon"

function getItemFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem("foodItem")) || ""
    } catch {
        return ""
    }
}

export default function Recipes() {
    const foodItemFromLocalStorage = getItemFromLocalStorage()
    const [foodData, setFoodData] = useState([])
    const [search, setSearch] = useState({
        foodItem: foodItemFromLocalStorage
    })
    const [loading, setLoading] = useState(false)

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
            setLoading(true)
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
                    setLoading(false)
                })
                .catch(error => {
                    console.log("Fetch error: ", error)
                    setLoading(false)
                })
        }
    }, [search])

    const recipeElements = foodData?.map(meal => (
        <div key={meal.idMeal} className="">
            <Link
                className="text-center"
                to={meal.idMeal}
            >
                <img className="rounded p-0 md:p-0"
                    src={meal.strMealThumb}
                    alt="Recipe item" />
            </Link>
            <div className="flex justify-center text-center items-center mt-12 px-4 gap-x-8 md:gap-x-8 h-20">
                <h1 className="text-2xl lg:text-3xl">{meal.strMeal}</h1>
                <FavoritesIcon meal={meal} />
            </div>

        </div>
    ))

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
        <div className="py-12 flex flex-1 flex-col items-center">
            <form className="text-center mb-12 flex flex-col sm:flex-row sm:items-center 
            justify-center gap-4" onSubmit={handleSubmit}>
                <input className="bg-white text-black border-2 rounded-lg indent-3 h-10 w-64"
                    type="text"
                    placeholder="Enter dish or ingredient name"
                    onChange={handleChange}
                    name="foodItem"
                    value={foodItemFromLocalStorage || ""}
                >
                </input>
                <button className="bg-white text-black border-2 rounded-lg h-10 px-4 py-2
                    hover:bg-zinc-500 active:bg-neutral-600 flex items-center justify-center"
                >Search
                </button>
            </form>
            {foodData ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mx-12">
                    {recipeElements}
                </div>
            ) : <h1 className="text-center text-2xl">No data currently...</h1>}
        </div>
    )
}
