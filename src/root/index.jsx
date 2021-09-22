import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Body, Container } from "./style";
import Sidbar from "../components/Sidbar";
import Home from "../components/Home/Home";
export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidbar />
        <Home />
      </Container>
    </Router>
  );
};

export default Root;
