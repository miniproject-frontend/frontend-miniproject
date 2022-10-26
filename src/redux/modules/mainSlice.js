// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const __mainPost = createAsyncThunk(
//   "post/getPost",
//   async (payload, thunkAPI) => {
//     try {
//       const getPost = await axios.get("http://localhost:3001/write");
//       console.log(getPost.data);
//       return thunkAPI.fulfillWithValue(getPost);
//     } catch (error) {
//       console.log("메인 get요청 에러");
//     }
//   }
// );

// const initialState = {
//   list: [],
//   //   isLoading:false
//   //   error:null    이런식으로 배열이랑 고정값 담을수있음
// };

// //여기서 state는 initialState값을 받고있음
// const MainSlice = createSlice({
//   name: "getReducer",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__mainPost.fulfilled]: (state, action) => {
//       state.list = action.payload;
//     },
//   },
// });

// export const {} = MainSlice.actions;
// export default MainSlice.reducer;
