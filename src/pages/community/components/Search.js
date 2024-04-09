import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('검색어:', searchTerm);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={handleChange}
            />
            <Button type="submit">검색</Button>
        </Form>
    );
};

// 스타일드 컴포넌트로 스타일 지정
const Form = styled.form`
    display: flex;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #9BBEC8;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 8px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export default SearchBar;
