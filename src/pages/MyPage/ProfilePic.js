import styled from "styled-components";

const Frame = styled.img`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border: 1px solid #000;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Medal = styled.img`
    width: 60px;
    height: 50px;
    flex-shrink: 0;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export default function Component() {
    return (
        <MainContainer>
            <Frame />
            <Medal />
        </MainContainer>
    );
}
