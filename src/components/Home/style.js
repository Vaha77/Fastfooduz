import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
`;

export const Navbar = styled.div`
  display: flex;
  height: 88px;
  width: 100%;
`;

Navbar.Left = styled.div`
  margin-left: 2px;
  width: 320px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  width: 150px;
  height: 50px;
`;
export const Plus = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #20d472;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;

Navbar.Body = styled.div`
  display: flex;
  justify-content: center;
  width: 1010px;
  background: #ffffff;
  margin: 0 2px;
`;
Navbar.Right = styled.div`
  width: 320px;
  background: #ffffff;
`;
