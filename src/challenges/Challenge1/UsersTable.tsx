import React from "react";

export const UsersTable = () => {
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

  return (
    <div style={{ marginTop: 30 }}>
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
  );
};
