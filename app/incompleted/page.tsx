"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Task from "../components/card-task";

function page() {
  const { incompleteTasks } = useGlobalState();
  return <Task title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default page;
