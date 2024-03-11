import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";

const Solution = () => {
    const navigate = useNavigate();
    const goToGame = () => {
        console.log("goToGame");
        navigate("/game");
    };

    return (
        <Container>
            <AppBar />
            <CommonButton text={"RETRY"} onClick={goToGame}/>
            <NavBar />
        </Container>
    );
};

export default Solution;

const Container = styled.div``;