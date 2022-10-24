import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerBox">
      <img className="logo" src="/HTlogo.png" />
      <div className="categoryBox">
        <a href="#">카테고리1</a> {/* a는 나중에 다 link로 변경*/}
        <a href="#">카테고리2</a>
      </div>
      <div className="rightHeader">
        <p>닉네임</p>
        <a href="#">로그아웃</a>
        <a href="#">마이페이지</a>
      </div>
    </div>
  );
};

export default Header;
