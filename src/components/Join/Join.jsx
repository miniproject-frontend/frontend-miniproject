import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./join.css";
import { createUser } from "../../redux/modules/userSlice";

const Join = () => {
  // const [memberId, setMemberId] = useState("");
  // const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  // const dispatch = useDispatch();

  // //memberId 중복확인 버튼 onclick
  // const memberIdClick = () => {
  //   console.log(memberId);
  //   // dispatch 쓸곳? 중복확인 들어가야함
  // };

  // //nickname 중복확인 버튼 onclick
  // const nicknameClick = () => {
  //   console.log(nickname);
  //   // dispatch 쓸곳? 중복확인 들어가야함
  // };

  // //비밀번호 확인 버튼 onclick 일치하면 dispatch 다르면 alert
  // const passwordClick = () => {
  //   if (password === passwordCheck) {
  //     dispatch(
  //       joinGogo({
  //         id: Math.random(),
  //         memberId,
  //         nickname,
  //         password,
  //       })
  //     );
  //   } else {
  //     alert("비밀번호가 다릅니다");
  //   }
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Userform = {
    email: "",
    nickname: "",
    password: "",
    passwordC: "",
  };

  let [idCheck, setIdCheck] = useState(false);
  let [pwCheck, setPwCheck] = useState(false);
  let [pwcCheck, setPwcCheck] = useState(false);
  let [nickCheck, setnickCheck] = useState(false);
  let [validate, setValidate] = useState(false);

  const [user, setUser] = useState(Userform);

  //인풋값들 온체인지
  const onJoinHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  //회원가입 버튼 누를시 실행하는함수
  const submitUserInfo = () => {
    if (
      idCheck === false ||
      nickCheck === false ||
      pwCheck === false ||
      pwcCheck === false
    ) {
      alert("입력한 정보가 맞는지 다시 한번 확인해주세요.");
    } else {
      dispatch(
        createUser({
          email: user.email,
          nickname: user.nickname,
          password: user.password,
          passwordC: user.passwordC,
        })
      );
      navigate("/login");
    }
  };

  //아이디(이메일형식) 유효성 검사
  const regexEmail =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  useEffect(() => {
    if (regexEmail.test(user.email)) {
      setIdCheck(true);
    } else {
      setIdCheck(false);
    }
  }, [user.email]);

  //비밀번호 유효성 검사
  const regexPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/;
  useEffect(() => {
    if (regexPw.test(user.password)) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
  }, [user.password]);

  //닉네임 유효성 검사
  const regexnick = /^[가-힣A-Za-z]{2,12}$/;
  useEffect(() => {
    if (regexnick.test(user.nickname)) {
      setnickCheck(true);
    } else {
      setnickCheck(false);
    }
  }, [user.nickname]);

  //비밀번호 확인 일치하는지 확인
  useEffect(() => {
    if (user.passwordC === "") {
      setPwcCheck(false);
    } else {
      if (user.password === user.passwordC) {
        setPwcCheck(true);
      } else {
        setPwcCheck(false);
      }
    }
  }, [user.passwordC, user.password]);

  return (
    <div className="wrap">
      <div className="Joinwrap">
        <div className="inputform">
          <h1 className="JoinTitle">작심홈트</h1>
          <div className="JoinInputBox">
            <input
              className="overlapInput"
              type="text"
              value={user.email}
              placeholder="이메일을 입력하세요"
              onChange={onJoinHandler}
              name="email"
              required
            ></input>
            <button className="overlapBtn">중복확인</button>
          </div>
          {/* 아이디가 유효성에 맞는지 판단해서 보여주는 인풋아래 보여주는문구 */}
          {!idCheck ? (
            user.email === "" ? (
              <p style={{ color: "grey" }}>아이디는 이메일 형식입니다.</p>
            ) : (
              <p style={{ color: "red" }}>아이디가 형식에 맞지 않습니다.</p>
            )
          ) : (
            <p style={{ color: "blue" }}>형식에 맞는 아이디 입니다.</p>
          )}
          <br></br>
          <div className="JoinInputBox">
            <input
              className="overlapInput"
              name="nickname"
              type="text"
              value={user.nickname}
              placeholder="닉네임을 입력하세요"
              onChange={onJoinHandler}
            ></input>
            <button className="overlapBtn">중복확인</button>
          </div>
          {!nickCheck ? (
            user.nickname === "" ? (
              <p style={{ color: "grey" }}>한글/숫자 2글자이상입니다.</p>
            ) : (
              <p style={{ color: "red" }}>닉네임이 형식에 맞지 않습니다.</p>
            )
          ) : (
            <p style={{ color: "blue" }}>형식에 맞는 닉네임 입니다.</p>
          )}
          <br></br>
          <input
            className="JoinPassword"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={user.password}
            onChange={onJoinHandler}
          ></input>
          {!pwCheck ? (
            user.password === "" ? (
              <p style={{ color: "gray" }}>영문/숫자 반드시 포함(4~20자)</p>
            ) : (
              <p style={{ color: "red" }}>비밀번호가 형식에 맞지 않습니다.</p>
            )
          ) : (
            <p style={{ color: "blue" }}>올바른 비밀번호 입니다.</p>
          )}
          <br></br>
          <input
            className="JoinPasswordC"
            value={user.passwordC}
            name="passwordC"
            type="password"
            placeholder="비밀번호를 재입력하세요"
            onChange={onJoinHandler}
          ></input>
          {!pwcCheck ? (
            user.passwordC === "" ? (
              <p style={{ color: "gray" }}></p>
            ) : (
              <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
            )
          ) : (
            <p style={{ color: "blue" }}>비밀번호가 일치합니다.</p>
          )}
          <br></br>
          <button className="Joinbtn" onClick={submitUserInfo}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
