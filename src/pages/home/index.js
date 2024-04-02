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
                <Description>
                    <BoldText>/* DevPrep 소개 */<br/></BoldText>
                    DevPrep은 개발 및 IT 직군을 희망하는 <br/> 
                    예비 개발자들을 위한 면접 연습 툴입니다. <br/>
                    사용자의 희망 직무, 기술 스택, <br/> 
                    프로젝트 경험을 기반으로 개인별 <br/> 
                    맞춤 면접 질문과 솔루션을 제공합니다.
                    <br/><br/>
                    🚀 성공적인 커리어를 쌓기 위한 첫걸음, <br/>
                    개발자가 되기 위한 prep을 준비해보세요! 😊
                </Description>
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
    margin-top: 4rem;
`;

const Description = styled.div`
    width: 20.625rem;
    height: 15rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: rgba(221, 242, 253, 0.70);

    display: flex;
    margin-left: 1.88rem;
    margin-top: 2.8rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    color: #427D9D;
    font-size: 1rem;
    padding: 0.9rem;
    line-height: 1.35;
`;

const BoldText = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
`;