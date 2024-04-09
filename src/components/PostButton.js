import React from "react";
import { styled } from "styled-components";

const PostButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
};

export default PostButton;

const Button = styled.button`
    // 디자인 속성
    width: 4.875rem;
    height: 2.0625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #164863;
    // 정렬 속성
    margin-left: 18rem;
    position: absolute;
    bottom: 7rem;

    // text prop 속성
    display: flex;
    align-items: center;    //글자 상하 가운데 정렬
    justify-content: center;    // 글자 좌우 가운데 정렬
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 400;
`