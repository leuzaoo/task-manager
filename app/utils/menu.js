import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Tarefas",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importante",
    icon: list,
    link: "/importante",
  },
  {
    id: 3,
    title: "Concluídas",
    icon: check,
    link: "/concluidas",
  },
  {
    id: 4,
    title: "Urgente",
    icon: todo,
    link: "/urgente",
  },
];

export default menu;
