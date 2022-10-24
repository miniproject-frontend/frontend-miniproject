import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerBox">
      <img className="logo" src="/HTlogo.png" />
      <div className="categoryBox">
        <Link href="/category1">카테고리1</Link>{" "}
        {/* a는 나중에 다 link로 변경*/}
        <Link href="/category2">카테고리2</Link>
      </div>
      <div className="rightHeader">
        <p>닉네임</p>
        <Link href="#">로그아웃</Link>
        <Link href="/mypage">마이페이지</Link>
      </div>
    </div>
  );
};

export default Header;
