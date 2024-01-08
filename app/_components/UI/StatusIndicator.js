import React from "react";

const StatusIndicator = ({ status }) => {
  const isSuccessful = status === "Successful";
  return <div className={`h-2 w-2 rounded-full ${isSuccessful ? "bg-green-600" : "bg-neutral-500"}`}></div>;
};

export default StatusIndicator;
