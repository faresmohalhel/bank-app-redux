import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accounts: [
      {
        id: 1,
        customerName: "Israa Othman",
        accountNumber: "123456",
        accountType: "Savings",
      },
      {
        id: 2,
        customerName: "Ahmad Zahran",
        accountNumber: "987654",
        accountType: "Student accounts",
      },
    ],
  },
  reducers: {
    add: (state, action) => state.push(action.payload),
  },
});

export const { add } = userSlice.actions;

export const selectUser = (state) => state.user;
// console.log(selectUser());

export default userSlice.reducer;
