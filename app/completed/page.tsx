"use client";
import { useGlobalState } from "../context/globalProvider";
import Task from "../components/card-task";

export default function page() {
  const { completedTasks } = useGlobalState();
  return <Task title="Tarefas Finalizadas" tasks={completedTasks} />;
}
