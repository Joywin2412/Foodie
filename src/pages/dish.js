import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

const Home = () => {
  const id = useParams();
  const [loading, setLoading] = useState(0);
  const [instruction, setInstruction] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  const fetchData = async () => {
    setLoading(1);
    console.log(id);
    console.log(`${id}`);
    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setInstruction(d_now.data.analyzedInstructions[0].steps);
      // setDishes(d_now.data);
      // setLoading(0);
    } catch (err) {
      console.log(err);
      // setLoading(0);
    }

    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setNutrition(d_now.data.bad);
      // setInstruction(d_now.data.analyzedInstructions[0].steps);
      // setDishes(d_now.data);
      // setLoading(0);
    } catch (err) {
      console.log(err);
      // setLoading(0);
    }

    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setIngredient(d_now.data.ingredients);

      setLoading(0);
    } catch (err) {
      console.log(err);
      setLoading(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1> Loading... </h1>;
  return (
    <div>
      <h1> Foodie</h1>
      <Navbar />

      {instruction
        ? instruction.map((curr_val, curr_idx, arr) => {
            console.log(curr_val.image);
            return (
              <div>
                <img src={curr_val.image}></img>
                <p>
                  {" "}
                  {curr_val.number}
                  {"  "}
                  {curr_val.step}
                </p>
              </div>
            );
          })
        : ""}
      <h1> Nutrition</h1>
      {nutrition
        ? nutrition.map((curr_val, curr_idx, arr) => {
            return (
              <p>
                {" "}
                {curr_val.title} {curr_val.amount}
              </p>
            );
          })
        : ""}

      <h1> Ingreedededient</h1>
      {ingredient
        ? ingredient.map((curr_val, curr_idx, arr) => {
            return (
              <div>
                {curr_val.name}
                {"   "}
                {curr_val.amount.metric.value}
                {"  "}
                {curr_val.amount.metric.unit}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Home;

// Some of them don't have a steps property so see that too
