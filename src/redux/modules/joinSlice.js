// const JOIN = "JOIN";

// export const joingogo = (payload) => {
//   return { type: JOIN, payload };
// };

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

// const joinReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case JOIN:
//       console.log(state);
//       return {
//         list: [...state.list, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default joinReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: "",
      memberId: "",
      nickname: "",
      password: "",
    },
  ],
};

const JoinSlice = createSlice({
  name: "joinReducer",
  initialState,
  reducers: {
    joinGogo: (state, action) => {
      console.log(action.payload);
      state.list = [...state.list, action.payload];
    },
  },
});

export const { joinGogo } = JoinSlice.actions;
export default JoinSlice.reducer;
