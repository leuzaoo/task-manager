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
  const { theme } = useGlobalState();

  return (
    <CardTask theme={theme}>
      <h1 className={`title ${salsa.className}`}>{title}</h1>
      <p className={`description ${rokkitt.className}`}>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task__footer">
        {isCompleted ? (
          <button className="completed">Finalizado</button>
        ) : (
          <button className="incompleted">Não finalizado</button>
        )}
        <button className="edit">{edit}</button>
        <button className="delete">{trash}</button>
      </div>
    </CardTask>
  );
}

const CardTask = styled.div`
  background-color: ${(props) => props.theme.colorGrey7};
  border-radius: 2rem;
  padding: 1rem 2rem;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .description {
    font-size: 20px;
    font-weight: 200;
  }
`;
