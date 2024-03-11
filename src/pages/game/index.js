import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import symbol from "../../assets/images/symbol.png";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";

const Game = () => {
    // Game start 클릭 -> quiz 화면
    const navigate = useNavigate();
    const goToQuiz = () => {
        console.log("gotoQuiz");
        navigate("/game/quiz");
    };

    return (
        <Container>
            <AppBar />
            <LogoImg src={symbol} />
            <CommonButton text="GAME START" onClick={goToQuiz}/>
            <NavBar />
        </Container>
    );
};

export default Game;

const Container = styled.div``;
const LogoImg = styled.img`
    width: 12.5rem;
    height: 12.40625rem;
    flex-shrink: 0;
    margin-left: 4.44rem;
    margin-top: 4.94rem;
`;