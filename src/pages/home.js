import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import Navbar from "./navbar.js";
// import axios from "axios";
import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
} from "@mui/material";
import { Button } from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
import Form from "./form.js";

const Home = () => {
  return (
    <div>
      <CssBaseline>
        <AppBar>
          <Toolbar>
            <DinnerDining style={{ height: "70px", width: "70px" }} />
            <Typography> Foodie </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="sm"></Container>
        <Form />
      </CssBaseline>
    </div>
  );
};
// Toolbar helps to setup flex properties to all the children
export default Home;
