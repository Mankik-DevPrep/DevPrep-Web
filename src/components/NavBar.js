import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
    const icons = [
        { name: "home", src: "/images/icons/home.svg" },
        { name: "game", src: "/images/icons/game.svg" },
        { name: "community", src: "/images/icons/community.svg" },
        { name: "mypage", src: "/images/icons/mypage.svg" }
    ];

    const [selectedIcon, setSelectedIcon] = useState(null);
    const handleIconClick = (index) => {
        setSelectedIcon(index);
    };

    return (
        <Container>
            {icons.map((icon, index) => (
                <IconWrapper 
                    key={index} 
                    onClick={() => handleIconClick(index)} 
                    selected={selectedIcon === index} 
                >
                    <Icon 
                        src={selectedIcon === index ? `images/icons/${icon.name}_selected.svg` : icon.src} />
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

    // 하단 고정 추가 속성
    position: absolute;
    bottom: 0;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    
    &:hover {
        filter: invert(100%);
    }
`;

const Icon = styled.img`
    margin-right: 3.5rem;
    
    &:last-child {
        margin-right: 0; // 마지막 아이콘은 마진 제거
    }
`;