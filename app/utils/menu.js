import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Todas as Tarefas",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importantes",
    icon: list,
    link: "/importantes",
  },
  {
    id: 3,
    title: "Completas!",
    icon: check,
    link: "/completas",
  },
  {
    id: 4,
    title: "Urgente",
    icon: todo,
    link: "/urgentes",
  },
];

export default menu;
