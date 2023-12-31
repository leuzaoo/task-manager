"use client";
import { useGlobalState } from "../context/globalProvider";
import Task from "../components/card-task";

export default function page() {
  const { importantTasks } = useGlobalState();
  return <Task title="Tarefas importantes" tasks={importantTasks} />;
}
