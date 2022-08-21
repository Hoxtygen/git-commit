import React from "react";
import { ButtonProp } from "../types";

export default function Button({ title, handleClick, className }: ButtonProp) {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}
