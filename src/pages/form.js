import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import axios from "axios";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material
import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  Input,
  Button,
  Grid,
} from "@mui/material";
const Home = () => {
  const [loading, setLoading] = useState(0);
  const [query, setQuery] = useState("");
  const [dishes, setDishes] = useState([]);
  const [dishes2, setDishes2] = useState([]);
  const [dishes3, setDishes3] = useState([]);
  const [form, setForm] = useState(0);
  const [carbs, setCarbs] = useState([19, 100]);
  const [protein, setProtein] = useState([10, 100]);
  const [calories, setCalories] = useState([50, 800]);
  const [fat, setFat] = useState([1, 100]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(1);
    console.log(query);
    if (form === 0) {
      try {
        let s = `${process.env.REACT_APP_URL}/autocomplete?number=10&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
        console.log(process.env.REACT_APP_API_KEY);
        console.log(process.env.NODE_ENV);
        // console.log(process.env.REACT_APP_URL);
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    } else if (form === 2) {
      try {
        let s = `${process.env.REACT_APP_URL}/findByNutrients?minCarbs=${carbs[0]}&maxCarbs=${carbs[1]}&minProtein=${protein[0]}&maxProtein=${protein[1]}&minCalories=${calories[0]}&maxCalories=${calories[1]}&minFat=${fat[0]}&maxFat=${fat[1]}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`;
        console.log(s);
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes2(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    } else {
      try {
        let s2 = "";
        for (let str of ingredients) {
          let temp = str;
          temp += ",+";
          s2 += temp;
        }
        console.log("og", s2);
        const p = s2.length;
        s2 = s2.slice(0, p - 2);
        console.log(s2);
        let s = `${process.env.REACT_APP_URL}/findByIngredients?ingredients=${s2}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`;
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes3(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    }
  };

  if (loading) return <div> Loading...</div>;
  return (
    <div>
      <form>
        <Typography variant="h4">
          <label> Enter the dish you wish to search for </label>
        </Typography>
        <br></br>
        {form === 2 ? (
          <div>
            <label> Carbohydrates</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = calories;
                calories2[0] = e.target.value;
                setCalories(calories2);
              }}
            ></Input>
            <label> Carbohydrates</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = calories;
                calories2[1] = e.target.value;
                setCalories(calories2);
              }}
            ></Input>
            <label> Protein</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = protein;
                calories2[0] = e.target.value;
                setProtein(calories2);
              }}
            ></Input>
            <label> Protein</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = protein;
                calories2[1] = e.target.value;
                setProtein(calories2);
              }}
            ></Input>
            <label> Calories</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = carbs;
                calories2[0] = e.target.value;
                setCarbs(calories2);
              }}
            ></Input>
            <label> Calories</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = carbs;
                calories2[1] = e.target.value;
                setCarbs(calories2);
              }}
            ></Input>
            <label> Fat</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = fat;
                calories2[0] = e.target.value;
                setFat(calories2);
              }}
            ></Input>
            <label> Fat</label>
            <Input
              type="text"
              onChange={(e) => {
                let calories2 = fat;
                calories2[1] = e.target.value;
                setFat(calories2);
              }}
            ></Input>
          </div>
        ) : form === 1 ? (
          <div>
            {ingredients.map((curr_val, curr_idx, arr) => {
              return (
                <div>
                  <Typography variant="overline"> {curr_val}</Typography>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      let ingredients2 = [...ingredients];
                      ingredients2 = ingredients2.filter((curr_val2) => {
                        return curr_val2 != curr_val;
                      });
                      setIngredients(ingredients2);
                    }}
                  >
                    <Typography variant="button"> Remove</Typography>
                  </Button>{" "}
                </div>
              );
            })}
            <Input
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
            ></Input>
            <Button
              onClick={(e) => {
                // console.log(typeof ingredient);
                e.preventDefault();
                if (typeof ingredient === "undefined") return;

                let value = ingredients.findIndex((curr_val) => {
                  return curr_val === ingredient;
                });
                console.log(value);
                if (value === -1) setIngredients([...ingredients, ingredient]);
                // console.log();
              }}
            >
              {" "}
              Add{" "}
            </Button>
          </div>
        ) : (
          <Input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          ></Input>
        )}
        <Button color="primary" onClick={(e) => submitHandler(e)}>
          {" "}
          Submit
        </Button>
        <br></br>
        <br></br>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setForm(0);
          }}
        >
          {" "}
          Search by Recipe{" "}
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setForm(1);
          }}
        >
          {" "}
          Search by Ingredients{" "}
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setForm(2);
          }}
        >
          {" "}
          Search by Nutrients{" "}
        </Button>
        <br></br>
        <br></br>

        <br></br>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {form === 0
            ? typeof dishes === "object"
              ? dishes.map((curr_val, curr_idx, arr) => {
                  console.log(form);
                  // console.log(curr_val);
                  return (
                    <Grid xs={2}>
                      <Link to={`/dish/${curr_val.id}`}>
                        {" "}
                        <p>{curr_val.title}</p>
                      </Link>
                    </Grid>
                  );
                })
              : ""
            : ""}
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {form === 2
            ? typeof dishes2 === "object"
              ? dishes2.map((curr_val, curr_idx, arr) => {
                  console.log(form);
                  return (
                    <Link to={`/dish/${curr_val.id}`}>
                      {" "}
                      <p>{curr_val.title}</p>{" "}
                    </Link>
                  );
                })
              : ""
            : ""}
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          disableEqualOverflow
        >
          {form === 1
            ? dishes3
              ? dishes3.map((curr_val, curr_idx, arr) => {
                  console.log({ curr_val });
                  return (
                    <Link to={`/dish/${curr_val.id}`}>
                      {" "}
                      <Typography min-minWidth="0">
                        {curr_val.title}
                      </Typography>{" "}
                    </Link>
                  );
                })
              : ""
            : ""}
        </Grid>
      </form>
    </div>
  );
};

export default Home;

// make your form2 dynamic
