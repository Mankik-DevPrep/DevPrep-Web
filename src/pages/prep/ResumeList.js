import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";
import ResumeComponent from "./components/ResumeComponent";

const ResumeList = () => {
    return (
        <Container>
            <AppBar />
            <GapDiv>
                <PlzSelect>연습할 면접의 이력서를 선택해주세요.</PlzSelect>            
                <ContentContainer>
                    <ResumeComponent resumeName={"이력서"} resumeNum={"1"}/>
                    <ResumeComponent resumeName={"이력서"} resumeNum={"2"}/>
                    <ResumeComponent resumeName={"이력서"} resumeNum={"3"}/>
                    <ResumeComponent resumeName={"이력서"} resumeNum={"4"}/>
                    <ResumeComponent resumeName={"이력서"} resumeNum={"5"}/>
                </ContentContainer>
            </GapDiv>
            <NavBar />
            <CommonButton text={"SAVE"} />
        </Container>
    );
};

export default ResumeList;

const GapDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.0rem;
`

const Container = styled.div`
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
`;

const PlzSelect = styled.a`
    color: #427D9D;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; /* 텍스트 가운데 정렬 */
    margin-top: 2.0rem;
`