import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerBox">
      <Link to="/">
        <img className="logo" src="/HTlogo.png" />
      </Link>
      <div className="categoryBox">
        <Link to="/category1">카테고리1</Link>
        <Link to="/category2">카테고리2</Link>
      </div>
      <div className="rightHeader">
        <p>닉네임</p>
        <Link href="#">로그아웃</Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  );
};

export default Header;
