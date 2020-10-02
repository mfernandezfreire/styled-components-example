import React from "react";
import styled from "styled-components";

import Button from "../shared/Button";

const MainContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: ${(props) => props.theme.regalBlue};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  width: 50%;
  height: 300px;
  border: 3px solid red;
  border-radius: 16px;
  text-align: center;
  background-color: ${(props) => props.theme.dimGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <MainContainer>
      <Box>
        <h1>Hello</h1>
        <Button> Click Me!!</Button>
        <Button size={"small"}> Click Me!!</Button>
        <Button size={"large"}> Click Me!!</Button>
        <Button block> Click Me!!</Button>
      </Box>
    </MainContainer>
  );
};

export default App;
