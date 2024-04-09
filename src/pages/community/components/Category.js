import React, { useState } from 'react';
import styled from 'styled-components';

const Category = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <CategoryContainer>
          {/* 카테고리 헤더 */}
          <CategoryHeader onClick={toggleOpen}>Category</CategoryHeader>
          
          {/* isOpen 상태에 따라 카테고리 목록이 보여지거나 숨겨짐 */}
          {isOpen && (
            <CategoryList>
              <CategoryItem>카테고리 1</CategoryItem>
              <CategoryItem>카테고리 2</CategoryItem>
              <CategoryItem>카테고리 3</CategoryItem>
            </CategoryList>
          )}
        </CategoryContainer>
      );
    };

    // 스타일드 컴포넌트를 사용하여 스타일 지정
    const CategoryContainer = styled.div`
    width: 6.5rem;
    height: 1.875rem;
    flex-shrink: 0;
    border-radius: 0.700rem;
    border: 0.1rem solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  color: #9BBEC8;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.700rem;
  text-align: center;
  height: 100%;
`;


const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CategoryItem = styled.li`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
    background-color: #f0f0f0;
    }
`;

export default Category;