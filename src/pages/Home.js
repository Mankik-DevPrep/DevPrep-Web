import React from "react";
import styled from "styled-components";

import symbol from "../assets/images/symbol.png";
import AppBar from "../components/AppBar";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <Container>
            <AppBar />
            <ContentContainer>
                <LogoImg src={symbol} />
            </ContentContainer>
            <NavBar />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;

    // 확인하면서 수정 필요...
    //height: 100vh;
    height: calc(100vh - 10rem);
`;

const ContentContainer = styled.div`
    flex: 1;
`;

const LogoImg = styled.img`
    width: 12.5rem;
    height: 12.40625rem;
    flex-shrink: 0;
    margin-left: 4.44rem;
    margin-top: 4.94rem;
`;
