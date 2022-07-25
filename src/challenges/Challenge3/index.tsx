import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const Challenge3 = () => {
  const list = () => {
    /**
     * Must list all the users.
     */
  };

  const update = () => {
    /**
     * Must update the redux state for the existing user, and
     * updated data must persist on the backend.
     */
  };

  const sortAsc = () => {
    /**
     * Must sort the users in asc order
     */
  };

  const sortDesc = () => {
    /**
     * Must sort the users in desc order
     */
  };

  return (
    <Provider store={store}>
      <div style={{ marginTop: 30 }}>
        <button onClick={sortAsc}>Sort Asc</button>
        <button onClick={sortDesc}>Sort Desc</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>EEUU</td>
              <td>
                <button onClick={update}>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Provider>
  );
};
