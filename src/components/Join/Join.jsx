import React from "react";
import { useState } from "react";
import "./join.css";

const Join = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const emailClick = () => {
    if (email === "") return;
    // dispatch 쓸곳? 중복확인 들어가야함
    setEmail("");
  };
  const nicknameClick = () => {
    if (nickname === "") return;
    // dispatch 쓸곳? 중복확인 들어가야함
    setNickname("");
  };

  return (
    <div className="wrap">
      <div className="Joinwrap">
        <form className="inputform">
          <h1>작심홈트</h1>
          <div>
            <input
              className="overlapInput"
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
            ></input>
            <button className="overlapBtn" onClick={emailClick}>
              중복확인
            </button>
          </div>
          <br></br>
          <div>
            <input
              className="overlapInput"
              type="text"
              placeholder="닉네임을 입력하세요"
              onChange={(e) => {
                return setNickname(e.target.value);
              }}
            ></input>
            <button className="overlapBtn" onClick={nicknameClick}>
              중복확인
            </button>
          </div>
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
