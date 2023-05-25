import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <button
        style={{
          textDecoration: "none",
          borderStyle: "none",
          margin: "2px",
          borderStyle: "2px solid black",
          color: "white",
        }}
      >
        {" "}
        <Link to="/"> Hoem </Link>
      </button>
      <button
        style={{
          textDecoration: "none",
          borderStyle: "none",
          margin: "2px",
          borderStyle: "2px solid black",
        }}
      >
        {" "}
        About us
      </button>
    </div>
  );
};

export default Home;
