import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import ProfilePic from "./components/ProfilePic";
import SelectBtn1 from "./components/SelectBtn1";

const MyPage = () => {
    return (
        <div>
            <MainContainer>
                <AppBar />
                <Container>
                    <ProfilePic />
                    <SelectBtn1 />
                    <SelectBtn1 />
                    <SelectBtn1 />
                    <SelectBtn1 />
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
    gap: 50px;
`;

export default MyPage;
