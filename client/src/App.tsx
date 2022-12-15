import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MyPage from "./pages/MyPage/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route
            path="mypage"
            element={
              <MyPage
                title={"새해를 강릉에서! 같이가실 분..?"}
                region={"강원도"}
                duration={"2022.12.31 ~ 2023.01.12"}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
