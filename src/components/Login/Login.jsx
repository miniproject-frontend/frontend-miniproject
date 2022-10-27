import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apibase from "../../redux/apibase";
import { setCookie } from "../../shared/cookies";

const Login = () => {
  const navigate = useNavigate();
  const loginform = {
    email: "",
    password: "",
  };

  const [member, setMember] = useState(loginform);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  //
  //
  //
  //
  //
  console.log(member);

  //로그인 시도 함수
  const Login = (event) => {
    event.preventDefault();
    const temp = {
      memberid: member.email,
      password: member.password,
    };
    const data = apibase
      .post("api/member/login", temp)
      .then((res) => {
        console.log(res);
        setCookie("token", res.request.getResponseHeader("authorization"));
        setCookie(
          "refreshToken",
          res.request.getResponseHeader("refresh-token")
        );
        sessionStorage.setItem("nickname", res.data.data.nickname);
        alert(`${sessionStorage.nickname}님 환영합니다.`);
        window.location.replace("/");
        if (res.data.success === false) alert(res.data.error.message);
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
