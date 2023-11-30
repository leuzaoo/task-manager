"use client";
import { useGlobalState } from "./context/globalProvider";
import Task from "./components/card-task";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Task title="Tarefas" tasks={tasks} />;
}
