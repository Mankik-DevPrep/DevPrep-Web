import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
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
            <CommonButton text="SUBMIT" onClick={goToAnswer}/>
            <NavBar />
        </Container>
    );
};

export default Quiz;

const Container = styled.div``;