import React, { useState, useEffect} from "react";
import styled from "styled-components";

// 이모티콘 이미지 파일
import laugh from "../../../assets/images/bookmark/laugh.png"
import meh from "../../../assets/images/bookmark/meh.png"
import sad from "../../../assets/images/bookmark/sad.png"
// 북마크 아이콘 fontAwesome 라이브러리 사용
import '@fortawesome/fontawesome-free/js/all';

const SolutionComponent = ({ prepResult, questionNum }) => {
    // 전달 받은 결과(prepResult)에 따라 아이콘 바뀌도록 prop 설정
    let faceIcon;
    if (prepResult === "good") {
        faceIcon = laugh;
    } else if (prepResult === "normal") {
        faceIcon = meh;
    } else if (prepResult === "bad") {
        faceIcon = sad;
    };

    const [isClicked, setIsClicked] = useState(false);
    const handleBookmarkClick = () => {
        console.log("bookmark clicked");
        setIsClicked(!isClicked);
    };
    useEffect(() => {
        console.log(`Bookmark 상태: ${isClicked ? "선택됨" : "선택되지 않음"}`);
      }, [isClicked]);

    return (
        <Container>
            <FaceIcon src={faceIcon} alt={prepResult} />
            <TextContainer>
                <QuestionNum>문제{questionNum}</QuestionNum>
                <Text>클릭해서 솔루션 보기</Text>
            </TextContainer>
            {/* 토글 부분 수정 필요ㅠㅠㅠ */}
            <BookmarkIcon 
                className={`fa-bookmark ${isClicked ? 'fas' : 'far'}`} 
                onClick={handleBookmarkClick}
            />
        </Container>
    );
};

export default SolutionComponent;

const Container = styled.div`
    width: 21.875rem;
    height: 5.9375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    //background-color: yellow;

    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
`;

const FaceIcon = styled.img`
    width: 2.8125rem;
    height: 2.8125rem;
    flex-shrink: 0;

    margin-left: 0.69rem;
`;
const TextContainer = styled.div``;

const QuestionNum = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin-left: 1rem;
    margin-right: auto;
    //background-color: green;
`;
const Text = styled.p`
    color: #427D9D;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-left: 1rem;
    margin-top: 0.69rem;
`;
const BookmarkIcon = styled.i`
    font-size: 1.5rem;
    color: #427D9D; 

    position: absolute;
    top: 0.62rem;
    right: 1rem;
    z-index: 2;
    pointer-events: auto;
    //background-color: red;
`;
