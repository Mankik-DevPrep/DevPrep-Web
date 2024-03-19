import React from "react";
import styled from "styled-components";

const Component = () => {
    return (
        <ResumeElementDiv>
            <ProfilePic />
            <ResumeName />
        </ResumeElementDiv>
    );
};

const ResumeElementDiv = styled.div`
    width: 21.875rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 0.063rem solid #9bbec8;
    background: rgba(210, 236, 250, 0);
`;
const ProfilePic = styled.div``;
const ResumeName = styled.a``;

export default Component;
