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
            <Description>
                <BoldText>🕹️ 미니게임 소개</BoldText>
                혹시...정보처리기사를 준비중이신가요? 👀 <br/>
                그럴 줄 알고 DevPrep이 준비했습니다!!<br/>
                재미있게 공부하기 위한 랜덤~ 퀴즈 게임~<br/>
                한 세트당 10문제씩 나오는 필기 기출 📚📚<br/>
                게임도 하고 자연스럽게 실력도 쌓자 ✨<br/><br/>
                <i>퀴즈만 맞혔는데 내가 Lv99의 개발자....?</i>
            </Description>
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
    margin-top: 4rem;
`;

const Description = styled.div`
    width: 20.625rem;
    height: 15rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: rgba(221, 242, 253, 0.70);

    display: flex;
    margin-left: 1.88rem;
    margin-top: 2.8rem;
    flex-direction: column;
    align-items: center;

    color: #427D9D;
    font-size: 1rem;
    padding: 0.9rem;
    text-align: center;
    line-height: 1.5;
`;

const BoldText = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
`;