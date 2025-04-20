// import { type } from "@testing-library/user-event/dist/type";
// All of the following are auto complete by configureStore of reduxjs/toolkit
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
