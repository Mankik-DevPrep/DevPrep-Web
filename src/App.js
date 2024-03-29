import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home";
import Prep from "./pages/prep";

import SolutionList from "./pages/prep/SolutionList";
import ResumeList from "./pages/prep/ResumeList";

import MyPage from "./pages/mypage";
import UserInfo from "./pages/mypage/UserInfo";

import Game from "./pages/game";
import Quiz from "./pages/game/Quiz";
import Answer from "./pages/game/Answer";

import Community from "./pages/community";

function App() {
    return (
        <div>
            <Routes>
                {/* 홈 화면 */}
                <Route index element={<Home />} />

                {/* 면접 연습 페이지 */}
                <Route path="/prep" element={<Prep />} />
                <Route path="/prep/solution-list" element={<SolutionList />} />
                <Route path="/prep/resume-list" element={<ResumeList />} />

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/user-info" element={<UserInfo />} />

                {/* 게임 페이지 */}
                <Route path="/game" element={<Game />} />
                <Route path="/game/quiz" element={<Quiz />} />
                <Route path="/game/answer" element={<Answer />} />

                {/* 커뮤니티 페이지 */}
                <Route path="/community" element={<Community />} />
            </Routes>
        </div>
    );
}

export default App;
