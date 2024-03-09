import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";

const Game = () => {
    return (
        <Container>
            <AppBar />
            <NavBar />
        </Container>
    );
};

export default Game;

const Container = styled.div``;