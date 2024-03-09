import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";

const Prep = () => {
    return (
        <Container>
            <AppBar />
            <NavBar />
        </Container>
    );
};

export default Prep;

const Container = styled.div``;