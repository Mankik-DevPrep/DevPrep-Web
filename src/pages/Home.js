import React from "react";
import styled from "styled-components";

import symbol from "../assets/images/symbol.png"

const Home = () => {
    return (
      <Container>
        <LogoImg src={symbol} />
      </Container>
    );
  };
  
  export default Home;

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

  const LogoImg = styled.img`
  width: 12.5rem;
  height: 12.40625rem;
  flex-shrink: 0;
  margin-left: 4rem;
  margin-top: 8.22rem;
`