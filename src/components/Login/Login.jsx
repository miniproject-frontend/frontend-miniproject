import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="LoginWrap">
        <div className="inputform">
          <h1>로그인</h1>
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="passward" placeholder="비밀번호를 입력해주세요." />
          <button className="LoginBtn">로그인</button>
          <a className="GotoSignUp">회원가입</a>
        </div>
      </div>
    </>
  );
};

export default Login;
