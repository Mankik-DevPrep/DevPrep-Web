import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import QuizComponent from "./components/QuizComponent";
import CommonButton from "../../components/CommonButton";

const Quiz = () => {
    // 제출 클릭 -> solutoin 화면
    const navigate = useNavigate();
    const goToAnswer = () => {
        console.log("goToAnswer");
        navigate("/game/answer");
    };

    return (
        <Container>
            <AppBar />
            <QuizContainer>
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
                <QuizComponent />
            </QuizContainer>
            <CommonButton text="SUBMIT" onClick={goToAnswer}/>
            <NavBar />
        </Container>
    );
};

export default Quiz;

const Container = styled.div``;

const QuizContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1rem;

    overflow-y: scroll;
    max-height: 34rem;
    //background-color: red;
`;