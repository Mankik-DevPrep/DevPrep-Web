import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
    
    const navigate = useNavigate();
    
    // 로고 클릭시 홈화면으로 이동
    const goToHome = () => {
        console.log("gotohome")
        navigate("/");
    };
    // back버튼 클릭시 이전 페이지로 이동
    const goBack = () => {
        window.history.back();
    };

    return (
        <Container>
            <BackButton
                src={"/images/left_arrow.png"}
                onClick={goBack}
            />
            <Logo 
                src="/images/devprep.png"
                onClick={goToHome}
            />
        </Container>
    );
};

export default AppBar;

const Container = styled.div`
    width: 24.375rem;
    height: 4.375rem;
    display: flex; 
    align-items: center; /* 수직 가운데 정렬 */
    background: #E3F3FB;
    position: relative;
`;

const BackButton = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    margin-left: 0.62rem;
`

const Logo = styled.img`
    width: 9.875rem;
    height: 2.4375rem;
    flex-shrink: 0;

    // 부모 요소(Container: relative)의 가로 세로 중앙에 절대 위치에 고정
    position: absolute;
    left: 50%;
    top: 50%;
    // 로고 이미지의 중심을 중앙값으로 지정 
    transform: translate(-50%, -50%);
`;