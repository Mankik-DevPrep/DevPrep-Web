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
                <QuizComponent quizNum={"1"}/>
                <QuizComponent quizNum={"2"}/>
                <QuizComponent quizNum={"3"}/>
                <QuizComponent quizNum={"4"}/>
                <QuizComponent quizNum={"5"}/>
                <QuizComponent quizNum={"6"}/>
                <QuizComponent quizNum={"7"}/>
                <QuizComponent quizNum={"8"}/>
                <QuizComponent quizNum={"9"}/>
                <QuizComponent quizNum={"10"}/>
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