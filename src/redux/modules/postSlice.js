import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import apibase from "../apibase";
import { getCookie } from "../../shared/cookies";


export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    try {
      const post = await axios({
        method: "post",
        url: `http://3.36.106.108/api/board`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
        data: payload,
      });

      return thunkAPI.fulfillWithValue(post.data);
    } catch (error) {
      console.log("글 작성 post요청 에러");
    }
  }
);

export const __mainPost = createAsyncThunk(
  "MAIN_POST",
  async (payload, thunkAPI) => {
    try {
      const getPost = await axios({
        method: "get",
        url: `http://3.36.106.108/api/boards`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      return thunkAPI.fulfillWithValue(getPost.data);
    } catch (error) {
      console.log("메인 get요청 에러");
    }
  }
);

export const __viewContentPut = createAsyncThunk(
  "FIX_CONTENT_POST",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const fixContentPost = await axios({
        method: "put",
        url: `http://3.36.106.108/api/board/${payload.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
        data: payload,
      });
      return thunkAPI.fulfillWithValue(fixContentPost.data);
    } catch (error) {
      console.log("CONTENT내용 수정요청 에러");
    }
  }
);

export const __viewContentGet = createAsyncThunk(
  "VIEW_CONTENT_GET",
  async (payload, thunkAPI) => {
    try {
      const fixPost = await axios({
        method: "get",
        url: `http://3.36.106.108/api/board/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      return thunkAPI.fulfillWithValue(fixPost.data);
    } catch (error) {
      console.log("CONTENT내용 수정 get요청 에러");
    }
  }
);
// export const __viewDetail = createAsyncThunk(
//   "FIXED_CONTENT_GET",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     try {
//       const fixedPost = await axios({
//         method: "get",
//         url: `http://localhost:3001/write/${payload.id}`,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getCookie("accessToken")}`,
//         },
//       });
//       return thunkAPI.fulfillWithValue(fixedPost.data);
//     } catch (error) {
//       console.log("CONTENT내용 수정 get요청 에러");
//     }
//   }
// );

export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    try {
      const deletePost = await axios({
        method: "delete",
        url: `http://3.36.106.108/api/board/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      // "http://3.34.146.3/api/boards"
      return thunkAPI.fulfillWithValue(deletePost.data);
    } catch (error) {
      console.log("POST내용 삭제중 delete요청 에러");
    }
  }
);

const initialState = {
  list: [],
  //   isLoading:false
  //   error:null    이런식으로 배열이랑 고정값 담을수있음
};

//여기서 state는 initialState값을 받고있음
const PostSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__writePost.fulfilled]: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    [__viewContentPut.fulfilled]: (state, action) => {
      state.list = state.list.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.comment = action.payload.content;
        }
        return comment;
      });
    },
    [__mainPost.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__viewContentGet.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    // [__viewDetail.fulfilled]: (state, action) => {
    //   state.list = action.payload;
    // },
    [__deletePost.fulfilled]: (state, action) => {
      state.list = state.list.filter((x) => x.id !== action.payload);
    },
  },
});

export const {} = PostSlice.actions;
export default PostSlice.reducer;
