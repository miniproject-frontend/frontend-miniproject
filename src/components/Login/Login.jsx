import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/modules/userSlice";

const Login = () => {
  const dispatch = useDispatch();
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

  console.log(member);

  const Login = (event) => {
    event.preventDefault();
    dispatch(
      loginUser({
        email: member.email,
        password: member.password,
      })
    );
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
            type="passward"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeHandler}
          />
          <button className="LoginBtn">로그인</button>
          <a className="GotoSignUp" onClick={Login}>
            회원가입
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
