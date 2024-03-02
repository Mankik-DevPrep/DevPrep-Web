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
}

export default NavBar;

const Container = styled.div`
    width: 24.375rem;
    height: 5.625rem;
    flex-shrink: 0;
    background: #E3F3FB;
    //background-color: red;

    display: flex;
    justify-content: center;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    //text-align: center;
`
const Icon = styled.img`
    //${props => !props.last && "margin-right: 3.5rem;"}
    margin-right: 3.5rem;
    
    &:last-child {
        margin-right: 0; // 마지막 아이콘은 마진 제거
    }
`