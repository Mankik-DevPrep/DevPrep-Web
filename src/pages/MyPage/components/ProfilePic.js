import styled from "styled-components";
import MedalImg from "../../../assets/images/level-gold.svg";
import ProfilePicDummy from "../../../assets/images/profilePicDummy.svg";

const Frame = styled.div`
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    background: url(${ProfilePicDummy}) center / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    z-index: 0;
`;

const Medal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 3.75rem;
    height: 3.125rem;
    flex-shrink: 0;
    background: url(${MedalImg}) center / cover no-repeat;
    border: none;
    outline: none;
    z-index: 1;
`;

const MainContainer = styled.div`
    display: flex;
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    justify-content: center;
    align-items: center;
`;

export default function Component() {
    return (
        <MainContainer>
            <Frame />
            <Medal />
        </MainContainer>
    );
}
