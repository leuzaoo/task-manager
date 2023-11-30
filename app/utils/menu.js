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
    link: "/important",
  },
  {
    id: 3,
    title: "Concluídas",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Não finalizadas",
    icon: todo,
    link: "/incompleted",
  },
];

export default menu;
