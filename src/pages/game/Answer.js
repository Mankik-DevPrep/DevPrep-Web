import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";

const Answer = () => {
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

export default Answer;

const Container = styled.div``;