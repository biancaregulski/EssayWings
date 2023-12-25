import { v4 as uuidv4 } from "uuid"
export const toDoData = [
  {
    id: "1.1",
    task: "Navigation",
    dueDate: "25-May-2021",
  },
  {
    id: "1.2",
    task: "Visual Hierarchy",
    dueDate: "26-May-2021",
  },
  {
    id: "1.3",
    task: "Cognitive Load",
    dueDate: "27-May-2021",
  },
  {
    id: "1.4",
    task: "Componentization",
    dueDate: "23-Aug-2021",
  },
]

export const inProgressData = [
  {
    id: "1.5",
    task: "Standardization",
    dueDate: "05-Jan-2021",
  },
]

export const columnsFromBackend = {
  // [uuidv4()]: {
  'toDo': {
    title: "To-do",
    items: toDoData,
  },
  // [uuidv4()]: {
  'inProgress': {
    title: "In Progress",
    items: inProgressData,
  },
  // [uuidv4()]: {
  'done': {
    title: "Done",
    items: [],
  },
}
