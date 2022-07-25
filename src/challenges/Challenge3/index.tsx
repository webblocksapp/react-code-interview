import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const Challenge3 = () => {
  const createUser = () => {
    /**
     * Must add to the redux state the created user, and
     * data must persist on the backend.
     */
  };

  const updateUser = () => {
    /**
     * Must update the redux state for the existing user, and
     * updated data must persist on the backend.
     */
  };

  const removeUser = () => {
    /**
     * Must remove from the redux state the existing user, and
     * record deletion must persist on the backend.
     */
  };

  const sortAscUsers = () => {
    /**
     * Must sort the users in asc order
     */
  };

  const sortDescUsers = () => {
    /**
     * Must sort the users in desc order
     */
  };

  return (
    <Provider store={store}>
      <div style={{ marginTop: 30 }}>
        <button onClick={createUser}>Create</button>
        <button onClick={sortAscUsers}>Sort Asc</button>
        <button onClick={sortDescUsers}>Sort Desc</button>
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
                <button onClick={updateUser}>Edit</button>
                <button onClick={removeUser}>Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Provider>
  );
};
