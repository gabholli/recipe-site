
export default function Home() {

    // const [backgroundImage, setBackgroundImage] = useState(null)

    // useEffect(() => {

    //     // Fetch from local API route (not external API)
    //     axios
    //         .get("https://www.themealdb.com/api/json/v1/1/random.php")
    //         .then((response) => {
    //             console.log(response.data.meals[0].strMealThumb)
    //             if (response.data.meals && response.data.meals.length > 0) {
    //                 setBackgroundImage(response.data.meals[0].strMealThumb); // Set the image URL
    //             }
    //         })
    //         .catch((error) => {
    //         })
    // }, [])

    return (
        <div className="bg-background-image bg-cover bg-center text-center flex 
        justify-center items-center h-full flex-1 flex-col gap-12"
        // style={{
        //     backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        //     minHeight: "100%", width: "100%", backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover", backgroundPosition: "center", objectFit: "contain"
        // }}
        >
            <div className="bg-neutral-600 flex flex-col gap-y-4 p-4 rounded-xl m-2">
                <h1 className="text-center text-3xl sm:text-4xl font-bold">Recipe Repository</h1>
                <p className="text-xl sm:text-3xl text-center">Click above to find the recipe you want</p>
            </div>
        </div>
    )
}