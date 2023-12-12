import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from "./pages/Home"
import Recipes from './pages/Recipes/Recipes';
import RecipeDetail from './pages/Recipes/RecipeDetail';
import RandomMeal from './pages/Recipes/RandomMeal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="random" element={<RandomMeal />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
