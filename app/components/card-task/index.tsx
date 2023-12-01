"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import CreateContent from "../modals/CreateContent";
import styled from "styled-components";
import React from "react";
import TaskItem from "@/app/item-task";
import { plus } from "@/app/utils/Icons";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});
interface Props {
  title: string;
  tasks: any[];
}

export default function Task({ title, tasks }: Props) {
  const { theme, isLoading } = useGlobalState();
  return (
    <TaskStyled theme={theme}>
      <h1 className={`page__title ${notoSans.className}`}>{title}</h1>
      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button className="create__task">
          {plus}
          Nova Tarefa
        </button>
      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .create__task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 16rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }
  .page__title {
    color: ${(props) => props.theme.colorTextPrimary};
    font-size: 32px;
    text-transform: uppercase;
    border-bottom: 3px solid ${(props) => props.theme.colorTextPrimary};
    border-radius: 3px;
    width: max-content;
    margin-bottom: 40px;
  }
`;
