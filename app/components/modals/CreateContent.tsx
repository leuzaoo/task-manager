"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

export default function CreateContent() {
  const { theme } = useGlobalState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important,
    };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      toast.success("Tarefa criada.");
    } catch (error) {
      toast.error("Algo de errado não está certo.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CreateTasks theme={theme}>
        <h1 className="text-4xl">Crie sua tarefa.</h1>

        <div className="input__control flex flex-col">
          <label htmlFor="title" className="text-2xl">
            Título
          </label>
          <input
            className="h-12"
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={handleChange("title")}
            placeholder="Retirar o lixo."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            name="description"
            rows={4}
            onChange={handleChange("description")}
            placeholder="Lixo do banheiro, cozinha e quintal."
          />
        </div>

        <div className="input__control flex gap-2">
          <label htmlFor="date">Finalizar dia:</label>
          <input
            className="text-neutral-400"
            type="date"
            id="date"
            value={date}
            name="date"
            onChange={handleChange("date")}
          />
        </div>

        <div className="input__control toggler flex gap-2">
          <label htmlFor="completed">Finalizada</label>
          <input
            className="w-5"
            type="checkbox"
            id="completed"
            value={completed.toString()}
            name="completed"
            onChange={handleChange("completed")}
          />
        </div>

        <div className="input__control toggler flex gap-2">
          <label htmlFor="important">Importante</label>
          <input
            className="w-5"
            type="checkbox"
            id="important"
            value={important.toString()}
            name="important"
            onChange={handleChange("important")}
          />
        </div>
        <div className="w-full text-center bg-green-700 py-3 px-4 rounded-md mt-5">
          <button type="submit">Criar nova tarefa</button>
        </div>
      </CreateTasks>
    </form>
  );
}

const CreateTasks = styled.div`
  max-width: 50%;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.activeNavLink};
  margin-bottom: 40px;

  .input__control {
    margin-top: 1rem;
  }
`;
