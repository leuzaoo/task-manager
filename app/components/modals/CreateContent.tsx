"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function CreateContent() {
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
      <h1>Crie sua tarefa.</h1>

      <div className="input__control">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="Retirar o lixo e colocar na lixeira."
        />
      </div>

      <div className="input__control">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          name="description"
          rows={4}
          onChange={handleChange("description")}
          placeholder="Retirar o lixo e colocar na lixeira."
        />
      </div>

      <div className="input__control">
        <label htmlFor="date">Data</label>
        <input
          type="date"
          id="date"
          value={date}
          name="date"
          onChange={handleChange("date")}
        />
      </div>

      <div className="input__control toggler">
        <label htmlFor="completed">Finalizada</label>
        <input
          type="checkbox"
          id="completed"
          value={completed.toString()}
          name="completed"
          onChange={handleChange("completed")}
        />
      </div>

      <div className="input__control toggler">
        <label htmlFor="important">Importante</label>
        <input
          type="checkbox"
          id="important"
          value={important.toString()}
          name="important"
          onChange={handleChange("important")}
        />
      </div>
      <div className="max-w-max bg-green-700 py-1 px-4 rounded-md">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
