import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const QuizComponent = ({quizNum}) => {  
    // 선택시 클릭하면 색상 변경
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        setSelectedOption((prevOption) => {
            // 다시 클릭하면 선택 해제
            return prevOption === option ? null : option;
        });
    };

    // 문제 길이에 따라 Container heigt 늘어나도록 변경
    useEffect(() => {
        const container = document.getElementById(`quiz-container-${quizNum}`);
        if (container) {
            container.style.height = 'auto';
        }
    }, [selectedOption, quizNum]);

    return (
        <Container id={`quiz-container-${quizNum}`}>
            {/* 일단 예시로 암거나 넣어둠 */}
            <QuizNum>Q{quizNum}.</QuizNum>
            <Quiz>다음 정규화에 대한 설명으로 틀린 것은? 다음 정규화에 대한 설명으로 틀린 것은? 다음 정규화에 대한 설명으로 틀린 것은? 다음 정규화에 대한 설명으로 틀린 것은?</Quiz>
            <OptionContainer>
                <Option selected={selectedOption === 1} onClick={() => handleOptionClick(1)}>① 데이터베이스의 개념적 설계 단계에서 수행한다.</Option>
                <Option selected={selectedOption === 2} onClick={() => handleOptionClick(2)}>② 데이터 구조의 안정성을 최대화한다.</Option>
                <Option selected={selectedOption === 3} onClick={() => handleOptionClick(3)}>③ 중복을 배제하여 삽입, 삭제, 갱신 이상의 발생을 방지한다.</Option>
                <Option selected={selectedOption === 4} onClick={() => handleOptionClick(4)}>④ 데이터 삽입 시 릴레이션을 재구성할 필요성을 줄인다.</Option>
            </OptionContainer>
        </Container>
    );

};

export default QuizComponent;

const Container = styled.div`
    width: 21.875rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    
    overflow: visible; // 내용 넘쳐도 보이게
    padding-bottom: 1rem;
`;

const QuizNum = styled.span`
    width: 2.0625rem;
    height: 1.125rem;
    flex-shrink: 0;
    color: #427D9D;
    font-size: 1rem;
    font-weight: 700;

    display: flex;
    margin-top: 0.88rem;
    margin-left: 1.12rem;
`;

const Quiz = styled.span`
    font-size: 0.9rem;
    font-weight: 700;

    display: flex;
    margin-top: 0.69rem;
    margin-left: 1.12rem;
    margin-right: 1rem;
`;

const OptionContainer = styled.div`
    margin-top: 1.12rem;
    margin-left: 0.94rem;

    display: flex;
    flex-direction: column;
    gap: 0.56rem;
    overflow-y: auto;
`;

const Option = styled.div`
    width: 20rem;
    min-height: 1.6875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: ${({ selected }) => selected ? '#427D9D' : '#E3F3FB'};
    color: ${({ selected }) => selected ? '#FFFFFF' : '#000000'};
    font-size: 0.9rem;

    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    cursor: pointer;

    white-space: pre-wrap;
    padding-top: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.3rem;
`;