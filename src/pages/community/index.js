import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import PostButton from "../../components/PostButton";
import IndexComponent from "./components/IndexComponent";
import Category from "./components/Category";
import Search from "./components/Search";

const ResumeList = () => {
    return (
        <Container>
            <AppBar />
            <GapDiv>
                <CategorySearchDiv>
                    <Category/>
                    <Search/>
                </CategorySearchDiv>          
                <ContentContainer>
                    <IndexComponent postName={"게시글 제목1"} postNum={"1"}/>
                    <IndexComponent postName={"게시글 제목2"} postNum={"2"}/>
                    <IndexComponent postName={"게시글 제목3"} postNum={"3"}/>
                    <IndexComponent postName={"게시글 제목4"} postNum={"4"}/>
                    <IndexComponent postName={"게시글 제목5"} postNum={"5"}/>
                </ContentContainer>
            </GapDiv>
            <NavBar />
            <PostButton text={"post"} />
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

const CategorySearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1.7rem;
`;