import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { logout } from "../../shared/cookies";
import { getCookie } from "../../shared/cookies";

const Header = () => {
  const navigate = useNavigate();

  const nickname = sessionStorage.getItem("nickname");
  const token = getCookie("token");

  //로그인할때 세션스토리지에 저장했던 닉네임 불러오기

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  //로그아웃하는 버튼
  const UserLogout = () => {
    logout();
    alert("로그아웃 되었습니다.");
  };

  const cookie = new Cookies();
  return (
    <div className="headerBox">
      <img className="logo" src="/HTlogo.png" onClick={() => navigate("/")} />
      <div className="categoryBox">
        <Link to="/category1">카테고리1</Link>
        <Link to="/category2">카테고리2</Link>
      </div>
      <div className="rightHeader">
        <p>{nickname}님 환영합니다</p>
        <Link href="#3" onClick={UserLogout}>
          로그아웃
        </Link>
      </div>
    </div>
  );
};

export default Header;
