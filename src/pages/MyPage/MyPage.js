import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import AppBar from "../../components/AppBar";
import ProfilePic from "./ProfilePic";
import SelectBtn from "./SelectBtn1";

const MyPage = () => {
    return (
        <div>
            <AppBar />
            <ProfilePic />
            <SelectBtn1 />
            <NavBar />
        </div>
    );
};

export default MyPage;
