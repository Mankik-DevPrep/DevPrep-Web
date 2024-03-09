import styled from "styled-components";
import MedalImg from "../../../assets/images/level-gold.svg";
import ProfilePicDummy from "../../../assets/images/profilePicDummy.svg";

const Frame = styled.img`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border: 1px solid #000;
    background: url(${ProfilePicDummy}), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Medal = styled.img`
    width: 60px;
    height: 50px;
    flex-shrink: 0;
    background: url(${MedalImg}), lightgray 50% / cover no-repeat;
`;

const MainContainer = styled.div`
    display: flex;
`;

export default function Component() {
    return (
        <MainContainer>
            <Frame />
            <Medal />
        </MainContainer>
    );
}
