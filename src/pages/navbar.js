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
    <div>
      <span>
        {" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Button variant="contained" color="primary">
            Home{" "}
          </Button>{" "}
        </Link>
      </span>
      <span>
        {" "}
        <Button variant="contained">About Us</Button>
      </span>
    </div>
  );
};

export default Home;
