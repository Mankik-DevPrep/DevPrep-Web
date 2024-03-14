import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";

const UserInfo = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Container>
            <AppBar />
            <ContentContainer>
                <InsertInfoDiv>
                    <InsertHereText
                        value={text}
                        onChange={handleTextChange}
                        placeholder={`사용자 정보 입력\n(이력서)`}
                    />
                </InsertInfoDiv>
            </ContentContainer>
            <CommonButton text="SAVE" />
            <NavBar />
        </Container>
    );
};

export default UserInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.563rem;
`;

const InsertInfoDiv = styled.div`
    width: 21.875rem;
    height: 33.25rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 0.063 solid #9bbec8;
    background: rgba(210, 236, 250, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const InsertHereText = styled.textarea`
    color: black;
    text-align: left;
    font-family: Inter;
    font-size: 0.938rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    outline: none;
    background: transparent;
    width: 95%;
    height: 95%;
    resize: none;

    &::placeholder {
        position: absolute; /* 추가 */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #427d9d;
        text-align: center;
        font-family: Inter;
        font-size: 0.938rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
