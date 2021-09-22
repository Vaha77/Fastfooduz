import React from "react";
import { Container, Navbar, Plus, Title, Wrapper } from "./style";

export const Home = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Left>
          <Wrapper>
            <Plus>+</Plus>
            <Title>Yangi byurtma qo'shish</Title>
          </Wrapper>
        </Navbar.Left>
        <Navbar.Body>Body</Navbar.Body>
        <Navbar.Right>Right</Navbar.Right>
      </Navbar>
    </Container>
  );
};
export default Home;
