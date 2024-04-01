import React from "react";
import styled from "styled-components";

import symbol from "../../assets/images/symbol.png";
import HomeBar from "../../components/HomeBar";
import NavBar from "../../components/NavBar";
import CommonButton from "../../components/CommonButton";

const Home = () => {
    return (
        <Container>
            <HomeBar />
            <ContentContainer>
                <LogoImg src={symbol} />
                <CommonButton text="PREP START!" />
                <Description>Devprep 설명 어쩌구~</Description>
            </ContentContainer>
            <NavBar />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;

    // flex 사용시 조정 필요한 속성
    //height: 100vh;
    //height: calc(100vh - 10rem);
`;

const ContentContainer = styled.div`
    flex: 1;
    //background-color: red;
`;

const LogoImg = styled.img`
    width: 12.5rem;
    height: 12.40625rem;
    flex-shrink: 0;
    margin-left: 4.44rem;
    margin-top: 4.94rem;
`;

const Description = styled.div`
    width: 20.625rem;
    height: 14rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: rgba(221, 242, 253, 0.70);

    display: flex;
    margin-left: 1.88rem;
    margin-top: 3rem;

    color: #427D9D;
    font-size: 1.1rem;
    padding: 1rem;
`;