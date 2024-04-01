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
            <Description>Game 설명</Description>
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

const Description = styled.div`
    width: 20.625rem;
    height: 14rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: rgba(221, 242, 253, 0.70);

    display: flex;
    margin-left: 1.88rem;
    margin-top: 3rem;

    color: #427D9D;
    font-size: 1.1rem;
    padding: 1rem;
`;