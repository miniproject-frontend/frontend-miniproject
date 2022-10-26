import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    try {
      const post = await axios.post("http://3.34.146.3/api/board", payload);
      // console.log(post);
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
      const getPost = await axios.get("http://3.34.146.3/api/boards");
      // console.log(getPost.data);
      // console.log(getPost);
      return thunkAPI.fulfillWithValue(getPost.data);
    } catch (error) {
      console.log("메인 get요청 에러");
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
    [__mainPost.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {} = PostSlice.actions;
export default PostSlice.reducer;
