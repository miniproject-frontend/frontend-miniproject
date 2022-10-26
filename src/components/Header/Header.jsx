import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  //로그인할때 세션스토리지에 저장했던 닉네임 불러오기
  const nickname = sessionStorage.getItem("nickname");

  console.log(nickname);

  useEffect(() => {
    if (!nickname) {
      navigate("/login");
    }
  }, []);

  //로그아웃하는 버튼
  const logOut = () => {
    sessionStorage.clear();
    // cookies.remove("refresh-token");
    alert("로그아웃 되었습니다.");
    window.location.replace("/");
  };

  return (
    <div className="headerBox">
      <img className="logo" src="/HTlogo.png" onClick={() => navigate("/")} />
      <div className="categoryBox">
        <Link to="/category1">카테고리1</Link>
        <Link to="/category2">카테고리2</Link>
      </div>
      <div className="rightHeader">
        <p>{nickname}님 환영합니다</p>

        <Link href="#" onClick={logOut}>
          로그아웃
        </Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  );
};

export default Header;
