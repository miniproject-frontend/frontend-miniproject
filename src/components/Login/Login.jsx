import React, { useEffect } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/modules/userSlice";
import apibase from "../../redux/apibase";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginform = {
    email: "",
    password: "",
  };

  const [member, setMember] = useState(loginform);

  const [cookies, setCookie, removeCookie] = useCookies(["cook"]);

  const cookie = new Cookies();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  console.log(member);

  // useEffect(() => {
  //   cookie.remove("token");
  //   cookie.remove("refreshToken");
  //   cookie.remove("nickname");
  // });

  // useEffect(() => {
  //   sessionStorage.clear();
  // });

  // const Login = (event) => {
  //   event.preventDefault();
  //   dispatch(
  //     loginUser({
  //       memberid: member.email,
  //       password: member.password,
  //     })
  //   );
  // };

  const Login = (event) => {
    event.preventDefault();
    const temp = {
      memberid: member.email,
      password: member.password,
    };
    // 이메일 비밀번호 BE양식 : nickname:~, password: ~

    const data = apibase
      .post("api/member/login", temp)
      .then((res) => {
        //const { accessToken } = res.data;
        //axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        // accessToken을 헤더에 붙여주는 과정이지만, instance에서 이미실행
        console.log(res);
        console.log(res.data);
        console.log(res.request.getResponseHeader("authorization"));
        // access 토큰을 받아와짐.
        setCookie("token", res.request.getResponseHeader("authorization"));
        setCookie(
          "refreshToken",
          res.request.getResponseHeader("refresh-token")
        );
        sessionStorage.setItem("nickname", res.data.data.nickname);
        alert(`${sessionStorage.nickname}님 환영합니다.`);
        window.location.replace("/");
        // setCookie를 사용해 application>cookie에 토큰 2개담기
        if (res.data.success === false) alert(res.data.error.message);
        //setInterval(onSilentRefresh, 180000);
        // 3분뒤 로그인 연장
      })
      .catch((error) => {
        alert("로그인 정보를 받아올 수 없습니다!");
      });
  };

  return (
    <>
      <div className="LoginWrap">
        <div className="inputform">
          <h1 className="LoginTitle">로그인</h1>
          <input
            name="email"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={onChangeHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeHandler}
          />
          <button className="LoginBtn" onClick={Login}>
            로그인
          </button>
          <a className="GotoSignUp" onClick={() => navigate("/join")}>
            회원가입
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
