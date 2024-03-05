import React from "react";
import styled from "styled-components";

const NavBar = () => {
    const icons = ["home", "game", "community", "mypage"];

    return (
        <Container>
            {icons.map((name, index) => (
                <IconWrapper key={index}>
                    <Icon src={`/images/icons/${name}.svg`} />
                </IconWrapper>
            ))}
        </Container>
    );
};

export default NavBar;

const Container = styled.div`
    width: 24.375rem;
    height: 5.625rem;
    flex-shrink: 0;
    background: #e3f3fb;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999; /* Adjust the z-index as needed */
    display: flex;
    justify-content: center;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const Icon = styled.img`
    margin-right: 3.5rem;

    &:last-child {
        margin-right: 0;
    }
`;

const RootContainer = styled.div`
    position: relative;
    width: 390px;
    height: 844px;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #f6fcff;
`;
