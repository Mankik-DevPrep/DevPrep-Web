import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";
import EmptyMic from "../../assets/images/MicIcon/EmptyMic.svg";
import FilledMic from "../../assets/images/MicIcon/FilledMic.svg"; // 추가
import { useSpeechRecognition } from "react-speech-kit";

const Practice = () => {
    const [isListening, setIsListening] = useState(false); // 음성 입력 상태 추가
    const [value, setValue] = useState('결과');

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result);
        }
    });

    const toggleListening = () => {
        if (!isListening) {
            setIsListening(true);
            listen();
        } else {
            setIsListening(false);
            stop();
        }
    };

    return (
        <Container>
            <AppBar />
                <AlignColumnContainer>
                    <Problem1 />
                    {/* Mic 아이콘 클릭 이벤트 추가 */}
                    <Mic onClick={toggleListening} isListening={isListening} />
                    <RecordTime />
                </AlignColumnContainer>
                <CommonButton text="NEXT" />
                <TextDisplay>{value}</TextDisplay>
            <NavBar />
        </Container>
    );
};

export default Practice;

const Container = styled.div``;

const AlignColumnContainer = styled.div`
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 3em;
`;

const Mic = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: url(${props => props.isListening ? FilledMic : EmptyMic}) center / cover no-repeat; // 상태에 따라 아이콘 변경
    cursor: pointer; // 클릭 가능한 커서 스타일 추가
`;

const RecordTime = styled.div`
    // RecordTime 스타일 추가 필요
`;

const Problem1 = styled.div`
    width: 21.875rem;
    height: 22.9375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
`;

const TextDisplay = styled.div`
    margin-top: 1rem; // 텍스트와 다른 요소 사이의 간격 조정
`;
