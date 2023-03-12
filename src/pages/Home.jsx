import React from "react";
import { Left } from "../components/Left";
import { Right } from "../components/Right";

export const Home = () => {
  return (
    <div className="content">
      <div className="left">
        <Left />
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
};
