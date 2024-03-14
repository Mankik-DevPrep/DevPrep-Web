import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import ProfilePic from "./components/ProfilePic";
import SelectBtn1 from "./components/SelectBtn1";
import SelectBtn2 from "./components/SelectBtn2";
import SelectBtn3 from "./components/SelectBtn3";
import SelectBtn4 from "./components/SelectBtn4";

const MyPage = () => {
    return (
        <div>
            <MainContainer>
                <AppBar />
                <Container>
                    <ProfilePic />
                    <SelectBtn1 />
                    <SelectBtn2 />
                    <SelectBtn3 />
                    <SelectBtn4 />
                </Container>
                <NavBar />
            </MainContainer>
        </div>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: calc(100vh - 10rem);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.125rem;
`;

export default MyPage;
