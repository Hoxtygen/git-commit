import React from "react";
import { CommitItemProp } from "../types";
import { formatDate } from "../utils";


export default function CommitItem({
  message,
  date,
  author,
}: CommitItemProp) {
  return (
    <div className = "commit-item">
      <h4>{message}</h4>
      <p className="time-stamp">{formatDate(date)} by {author} </p>
    </div>
  );
}