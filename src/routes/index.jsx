import React from "react";
import { Route, Routes } from "react-router";
import Crew from "../component/Crew";
import Destination from "../component/Destination";
import Home from "../component/Home";
import Technology from "../component/Technology";

const Router = () => (
  <Routes>
      <Route index element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
  </Routes>
);

export default Router;