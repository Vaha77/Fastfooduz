import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Body, Container } from "./style";
import Sidbar from "../components/Sidbar";
export const Root = () => {
  return (
    <Container>
      <Sidbar />
      <Body>Body</Body>
    </Container>
  );
};

export default Root;
