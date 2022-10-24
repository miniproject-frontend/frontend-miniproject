import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { joinGogo } from "../../redux/modules/joinSlice";
import "./join.css";

const Join = () => {
  const [memberId, setMemberId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const dispatch = useDispatch();

  //memberId 중복확인 버튼 onclick
  const memberIdClick = () => {
    console.log(memberId);
    // dispatch 쓸곳? 중복확인 들어가야함
  };

  //nickname 중복확인 버튼 onclick
  const nicknameClick = () => {
    console.log(nickname);
    // dispatch 쓸곳? 중복확인 들어가야함
  };

  //비밀번호 확인 버튼 onclick 일치하면 dispatch 다르면 alert
  const passwordClick = () => {
    if (password === passwordCheck) {
      dispatch(
        joinGogo({
          id: Math.random(),
          memberId,
          nickname,
          password,
        })
      );
    } else {
      alert("비밀번호가 다릅니다");
    }
  };

  return (
    <div className="wrap">
      <div className="Joinwrap">
        <div className="inputform">
          <h1>작심홈트</h1>
          <div>
            <input
              className="overlapInput"
              type="text"
              value={memberId}
              placeholder="이메일을 입력하세요"
              onChange={(e) => {
                return setMemberId(e.target.value);
              }}
            ></input>
            <button className="overlapBtn" onClick={memberIdClick}>
              중복확인
            </button>
          </div>
          <br></br>
          <div>
            <input
              className="overlapInput"
              type="text"
              value={nickname}
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
          <input
            type="text"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => {
              return setPassword(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="비밀번호를 재입력하세요"
            onChange={(e) => {
              return setPasswordCheck(e.target.value);
            }}
          ></input>
          <br></br>
          <button className="btn" onClick={passwordClick}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
