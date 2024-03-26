import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Component = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/userinfo");
    };

    return (
        <Button1 onClick={handleButtonClick}>
            <Text>사용자 정보 입력</Text>
        </Button1>
    );
};

const Button1 = styled.div`
    width: 18.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #164863;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Text = styled.span`
    color: #fff;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 9.063rem;
    height: 1.375rem;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Component;
