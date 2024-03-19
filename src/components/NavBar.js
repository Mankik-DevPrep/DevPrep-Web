import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const icons = [
        { name: "home", src: "/images/icons/home.svg", path: "/" },
        { name: "game", src: "/images/icons/game.svg", path: "/game" },
        { name: "community", src: "/images/icons/community.svg", path: "/community" },
        { name: "mypage", src: "/images/icons/mypage.svg", path: "/mypage" }
    ];

    const location = useLocation();
    const navigate = useNavigate();
    const [selectedIcon, setSelectedIcon] = useState(0);

    useEffect(() => {
        const index = icons.findIndex(icon => {
            // 홈 ("/") 경로는 정확히 일치하는 경우만 처리
            if (icon.path === "/") {
                return location.pathname === icon.path;
            }
            // 그 외 경로는 시작 부분이 일치하는지 확인
            return location.pathname.startsWith(icon.path);
        });
        
        // 일치하는 인덱스가 없는 경우(-1) 모든 아이콘 선택 해제
        setSelectedIcon(index);
    }, [location.pathname]);
    
    const handleIconClick = (index, path) => {
        setSelectedIcon(index);
        navigate(path);
    };

    return (
        <Container>
            {icons.map((icon, index) => (
                <IconWrapper 
                    key={index} 
                    onClick={() => handleIconClick(index, icon.path)} 
                    selected={selectedIcon === index} 
                >
                    <NavLinkStyled to={icon.path}>
                        <Icon 
                            src={selectedIcon === index ? `/images/icons/${icon.name}_selected.svg` : icon.src} 
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