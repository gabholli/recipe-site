import './App.css';
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from './components/Layout'
import Home from "./pages/Home"
import Recipes from './pages/Recipes/Recipes'
import RecipeDetail from './pages/Recipes/RecipeDetail'
import RandomMeal from './pages/Recipes/RandomMeal'
import FavoritesList from './pages/Recipes/FavoritesList';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="random" element={<RandomMeal />} />
          <Route path="favorites" element={<FavoritesList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
