import React from "react";
import { useApp } from "../../context/ApplicatinContext";

function TestComponent() {
  const { userId } = useApp();
  console.log(userId);
  return <div>{userId ? "All good" : "Not good"}</div>;
}

export default TestComponent;
