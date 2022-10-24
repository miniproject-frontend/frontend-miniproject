import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category2 from "../components/Pages/Category2";
import Category1 from "../components/Pages/Category1";
import Main from "../components/Pages/Main";
import Mypage from "../components/Pages/Mypage";
import View from "../components/Pages/View";
import Write from "../components/Pages/Write";
import Join from "../components/Join/Join";
import Login from "../components/Login/Login";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/category2" element={<Category2 />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/view" element={<View />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
