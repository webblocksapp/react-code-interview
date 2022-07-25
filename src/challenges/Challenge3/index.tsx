import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { UsersTable } from "./UsersTable";

export const Challenge3 = () => {
  return (
    <Provider store={store}>
      <UsersTable />
    </Provider>
  );
};
