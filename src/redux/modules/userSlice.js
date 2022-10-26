import apibase from "../apibase";
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   list: [
//     {
//       id: "",
//       memberId: "",
//       nickname: "",
//       password: "",
//     },
//   ],
// };

export const createUser = (data) => {
  return async function (dispatch) {
    console.log(data);
    await apibase
      .post("api/member/signup", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === false) {
          return window.alert(response.data.err.msg);
        } else {
          return (
            window.alert(
              `${response.data.data.nickname}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/login")
          );
        }
      })
      .catch((error) => {
        alert(error.response);
      });
  };
};

export const loginUser = (data) => {
  return async function (dispatch) {
    await apibase
      .post("api/member/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          return (
            sessionStorage.setItem("token", response.headers.authorization),
            sessionStorage.setItem("nickname", response.data.data.nickname),
            alert(`${sessionStorage.nickname}님 환영합니다.`),
            window.location.replace("/")
          );
        } else {
          return window.alert(response.data.error.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// const JoinSlice = createSlice({
//   name: "joinReducer",
//   initialState,
//   reducers: {
//     joinGogo: (state, action) => {
//       console.log(action.payload);
//       state.list = [...state.list, action.payload];
//     },
//   },
// });

// export const { joinGogo } = JoinSlice.actions;

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
