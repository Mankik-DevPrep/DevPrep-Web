import React, { useState } from "react";
import { styled } from "styled-components";

const QuizComponent = () => {  
    // 선택시 클릭하면 색상 변경
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <Container>
            {/* 일단 예시로 암거나 넣어둠 */}
            <QuizNum>Q1.</QuizNum>
            <Quiz>Linear Search의 평균 검색 회수는?</Quiz>
            <OptionContainer>
                <Option selected={selectedOption === 1} onClick={() => handleOptionClick(1)}>① n－1</Option>
                <Option selected={selectedOption === 2} onClick={() => handleOptionClick(2)}>② (n＋1)/2</Option>
                <Option selected={selectedOption === 3} onClick={() => handleOptionClick(3)}>③ n</Option>
                <Option selected={selectedOption === 4} onClick={() => handleOptionClick(4)}>④ n/2</Option>
            </OptionContainer>
        </Container>
    );

};

export default QuizComponent;

const Container = styled.div`
    width: 21.875rem;
    height: 14.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
`;

const QuizNum = styled.span`
    width: 2.0625rem;
    height: 1.125rem;
    flex-shrink: 0;
    color: #427D9D;
    font-size: 0.9375rem;
    font-weight: 700;

    display: flex;
    margin-top: 0.88rem;
    margin-left: 1.12rem;
`;

const Quiz = styled.span`
    font-size: 0.9375rem;
    font-weight: 400;

    display: flex;
    margin-top: 0.69rem;
    margin-left: 1.12rem;
`;

const OptionContainer = styled.div`
    margin-top: 1.12rem;
    margin-left: 0.94rem;

    display: flex;
    flex-direction: column;
    gap: 0.56rem;
`;

const Option = styled.div`
    width: 20rem;
    height: 1.6875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: ${({ selected }) => selected ? '#427D9D' : '#E3F3FB'};
    color: ${({ selected }) => selected ? '#FFFFFF' : '#000000'};

    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    cursor: pointer;
`;