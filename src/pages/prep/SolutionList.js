import React from "react";
import styled from "styled-components";

import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import SolutionComponent from "./components/SolutionComponent";

const SolutionList = () => {
    return (
        <Container>
            <AppBar />
            <ContentContainer>
                <SolutionComponent prepResult={"good"} questionNum={"1"} />
                <SolutionComponent prepResult={"normal"} questionNum={"2"} />
                <SolutionComponent prepResult={"normal"} questionNum={"3"} />
                <SolutionComponent prepResult={"bad"} questionNum={"4"} />
                <SolutionComponent prepResult={"good"} questionNum={"5"} />
            </ContentContainer>
            <NavBar />
        </Container>
    );
};

export default SolutionList;

const Container = styled.div`
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 3.12rem;
    gap: 1.81rem;
`;