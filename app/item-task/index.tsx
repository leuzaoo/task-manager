"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { Rokkitt, Salsa } from "next/font/google";
import formatDate from "@/app/utils/formatDate";
import { edit, trash } from "../utils/Icons";
import styled from "styled-components";

const rokkitt = Rokkitt({ subsets: ["latin"] });
const salsa = Salsa({ weight: ["400"], subsets: ["latin"] });

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

export default function TaskItem({
  title,
  description,
  date,
  isCompleted,
  id,
}: Props) {
  const { theme, deleteTask, updateTask } = useGlobalState();

  return (
    <CardTask theme={theme}>
      <h1 className={`title ${salsa.className}`}>{title}</h1>
      <p className={`description ${rokkitt.className}`}>{description}</p>
      <p className="date">Finalizar dia: {formatDate(date)}</p>
      <div className="task__footer">
        {isCompleted ? (
          <button
            className="card completed"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Não finalizado
          </button>
        )}
        <div className="buttons">
          <button className="edit">{edit}</button>
          <button
            className="delete"
            onClick={() => {
              deleteTask(id);
            }}
          >
            {trash}
          </button>
        </div>
      </div>
    </CardTask>
  );
}

const CardTask = styled.div`
  background-color: ${(props) => props.theme.activeNavLink};
  border-radius: 1rem;
  padding: 1rem 2rem;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .description {
    font-size: 20px;
    font-weight: 200;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 8px;
  }

  .card {
    display: inline-block;
    padding: 4px 8px;

    border-radius: 4px;
    font-size: 16px;
    font-weight: 200;
  }

  .completed,
  .incomplete {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.colorDanger};
    border-radius: 30px;
  }

  .completed {
    background: ${(props) => props.theme.colorGreenDark} !important;
  }
`;
