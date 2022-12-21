import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import FreePostDetail from "./pages/FreePostDetail/FreePostDetail";
import MatchPostDetail from "./pages/MatchPostDetail/MatchPostDetail";
import MyPage from "./pages/MyPage/MyPage";
import FreePostWrite from "./pages/FreePostWrite/FreePostWrite";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import MyComment from "./pages/MyComment/MyComment";
import FreePostList from "./pages/FreePostList/FreePostList";
import Admin from "./pages/Admin/Admin";
import ReceivedEnroll from "./pages/ReceivedEnroll/ReceivedEnroll";
import MatchPostWrite from "./pages/MatchPostWrite/MatchPostWrite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="free" element={<FreePostList />} />
          <Route path="free/:id" element={<FreePostDetail />} />
          <Route path="match/:id" element={<MatchPostDetail />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="myComment" element={<MyComment />} />
          <Route path="receivedEnroll" element={<ReceivedEnroll />} />
          <Route path="/free/write" element={<FreePostWrite />} />
          <Route path="/free/write/:id" element={<FreePostWrite />} />
          <Route path="/match/write" element={<MatchPostWrite />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
