import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
    // 로고 클릭시 홈화면으로 이동
    const navigate = useNavigate();
    const goToHome = () => {
        console.log("gotohome")
        navigate("/");
    };

    return (
        <Container>
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
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    background: #E3F3FB;
`;

const Logo = styled.img`
    width: 9.875rem;
    height: 2.4375rem;
    flex-shrink: 0;
`;