import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import Navbar from "./navbar.js";
// import axios from "axios";
import Form from "./form.js";
const Home = () => {
  return (
    <div>
      <h1> Foodie 😋</h1>
      <Navbar />
      <Form />
    </div>
  );
};

export default Home;
