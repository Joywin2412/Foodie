import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Dish from "./pages/dish.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Routes>
    </div>
  );
}

export default App;

// Basic idea is completed
// Get similar and random recipes in the dish.js
// Ingredients by id in dish.js
// Nutrition by id in dish.js
// Meal planning
// Search restraunts
