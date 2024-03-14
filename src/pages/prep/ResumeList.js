import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";
import ResumeElement from "./components/ResumeElement";

const ResumeList = () => {
    return (
        <Container>
            <AppBar />
            <ContentContainer>
                <ResumeElement />
            </ContentContainer>
            <NavBar />
            <CommonButton text={"SAVE"} />
        </Container>
    );
};

export default ResumeList;

const Container = styled.div``;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
