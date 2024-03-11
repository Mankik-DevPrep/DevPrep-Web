import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const icons = [
        { name: "home", src: "/images/icons/home.svg", path: "/" },
        { name: "game", src: "/images/icons/game.svg", path: "/game" },
        { name: "community", src: "/images/icons/community.svg", path: "/community" },
        { name: "mypage", src: "/images/icons/mypage.svg", path: "/mypage" }
    ];

    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState(0);

    useState( () => {
        const index = icons.findIndex(icon => icon.path === location.pathname);
        if (index !== -1) {
            setSelectedIcon(index);
        }
    }, [location.pathname]);
    // const handleIconClick = (index, path) => {
    //     setSelectedIcon(index);
    //     navigate(path);
    // };

    return (
        <Container>
            {icons.map((icon, index) => (
                <IconWrapper 
                    key={index} 
                    onClick={() => setSelectedIcon(index)} 
                    selected={selectedIcon === index} 
                >
                    <NavLinkStyled to={icon.path}>
                        <Icon 
                            src={selectedIcon === index ? `images/icons/${icon.name}_selected.svg` : icon.src} 
                            alt={icon.name}
                        />
                    </NavLinkStyled>
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

const NavLinkStyled = styled(NavLink)``;

const Icon = styled.img`
    margin-right: 3.5rem;
    
    &:last-child {
        margin-right: 0; // 마지막 아이콘은 마진 제거
    }
`;