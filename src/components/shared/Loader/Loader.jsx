import React from "react";
import { CircularProgress } from "@material-ui/core";
import s from "./Loader.module.css";
import cn from "classnames";

const Loader = ({ page }) => {
  return (
    <div className={cn(s.load, { [s.page]: page })}>
      <CircularProgress color={"primary"} />
    </div>
  );
};

export default Loader;
