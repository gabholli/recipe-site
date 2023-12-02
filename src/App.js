import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout';
import Home from "./pages/Home"
import Recipes from './pages/recipes/Recipes';
import RecipeDetail from './pages/recipes/RecipeDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
