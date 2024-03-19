import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home";
import Prep from "./pages/prep";
<<<<<<< HEAD
import ResumeList from "./pages/prep/ResumeList";
=======
import SolutionList from "./pages/prep/SolutionList";
>>>>>>> origin/main

import MyPage from "./pages/mypage";
import UserInfo from "./pages/mypage/UserInfo";

import Game from "./pages/game";
import Quiz from "./pages/game/Quiz";
import Answer from "./pages/game/Answer";

import Community from "./pages/community";
<<<<<<< HEAD
=======

>>>>>>> origin/main

function App() {
    return (
        <div>
            <Routes>
                {/* 홈 화면 */}
                <Route index element={<Home />} />

                {/* 면접 연습 페이지 */}
                <Route path="/prep" element={<Prep />} />
<<<<<<< HEAD
                <Route path="/resumelist" element={<ResumeList />} />
=======
                <Route path="/prep/solution-list" element={<SolutionList />} />
>>>>>>> origin/main

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/userinfo" element={<UserInfo />} />

                {/* 게임 페이지 */}
                <Route path="/game" element={<Game />} />
                <Route path="/game/quiz" element={<Quiz />} />
<<<<<<< HEAD
                <Route path="/game/solution" element={<Solution />} />
=======
                <Route path="/game/answer" element={<Answer/>} />
>>>>>>> origin/main

                {/* 커뮤니티 페이지 */}
                <Route path="/community" element={<Community />} />
            </Routes>
        </div>
    );
}

export default App;
