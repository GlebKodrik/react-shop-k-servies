import React from "react";
import { CircularProgress } from "@material-ui/core";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.load}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
