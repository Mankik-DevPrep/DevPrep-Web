import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import MyPage from "./pages/MyPage/MyPage";

function App() {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
}

export default App;
