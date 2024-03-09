import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home";
import Prep from './pages/prep';
import MyPage from "./pages/mypage";
import Game from './pages/game';
import Community from './pages/community';


function App() {
    return (
        <div>
            <Routes>
                {/* 홈 화면 */}
                <Route index element={<Home />} />

                {/* 면접 연습 페이지 */}
                <Route path="/prep" element={<Prep />} />

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />

                {/* 게임 페이지 */}
                <Route path="/game" element={<Game />} />

                {/* 커뮤니티 페이지 */}
                <Route path="/community" element={<Community />} />

            </Routes>
        </div>
    );
}

export default App;
