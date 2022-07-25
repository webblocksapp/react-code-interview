import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import { ChallengeOne, ChallengeTwo } from "./pages";

export const App = () => (
  <>
    <div style={{ display: "flex" }}>
      <NavLink to="challenge-one">Challenge one</NavLink>&nbsp;
      <NavLink to="challenge-two">Challenge two</NavLink>&nbsp;
      <NavLink to="challenge-three">Challenge three</NavLink>&nbsp;
    </div>
    {useRoutes([
      { path: "challenge-one", element: <ChallengeOne /> },
      { path: "challenge-two", element: <ChallengeTwo /> },
    ])}
  </>
);
