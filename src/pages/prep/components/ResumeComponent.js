import React, { useState, useEffect } from "react";
import styled from "styled-components";

import profilePic from "../../../assets/images/profilePicDummy.svg"

const ResumeComponent = ({resumeNum, resumeTitle}) => {
    resumeTitle = "hello"

    return (
        <Container>
            <ResumeElementDiv>
                <ProfilePic src={profilePic} alt={"noProfilePic"}/>
                <TextContainer>
                    <ResumeNum>이력서{resumeNum}</ResumeNum>
                    <ResumeTitle>{resumeTitle}</ResumeTitle>
                    <ResumeName />
                </TextContainer>
            </ResumeElementDiv>
        </Container>

    );
};

export default ResumeComponent;

const Container = styled.div`
    display: flex;
`

const ResumeElementDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 21.875rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 0.063rem solid #9bbec8;
    background: rgba(210, 236, 250, 0);
    gap: 0.6rem;
`;
const ProfilePic = styled.img`
    width: 2.85713rem;
    height: 2.85713rem;
    flex-shrink: 0;
    margin-left: 0.6rem;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.6rem;
`

const ResumeNum = styled.span`
    color: #164863;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ResumeTitle = styled.div`
    color: #427D9D;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ResumeName = styled.a``;


