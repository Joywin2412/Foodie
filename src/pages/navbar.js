import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Home = () => {
  return (
    <div style={{ position: "absolute", right: "0px" }}>
      <span
        style={{
          textDecoration: "none",
          borderStyle: "none",
          margin: "2px",
          borderStyle: "2px solid black",
          color: "white",
        }}
      >
        {" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Button variant="contained" color="primary">
            Home{" "}
          </Button>{" "}
        </Link>
      </span>
      <span
        style={{
          textDecoration: "none",
          borderStyle: "none",
          margin: "2px",
          borderStyle: "2px solid black",
        }}
      >
        {" "}
        <Button variant="contained">About Us</Button>
      </span>
    </div>
  );
};

export default Home;
