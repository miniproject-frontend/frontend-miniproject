import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div className="wrap">
      <div className="Joinwrap">
        <form className="inputform">
          <h1>작심홈트</h1>

          <input type="text" placeholder="이메일을 입력하세요"></input>
          <button className="btn">중복확인</button>
          
          <br></br>
          <input type="text" placeholder="비밀번호를 입력하세요"></input>
          <br></br>
          <input type="text" placeholder="비밀번호를 재입력하세요"></input>
          <br></br>
          <button className="btn">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
