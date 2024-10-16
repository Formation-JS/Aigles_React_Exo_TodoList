import { useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import { Task, TaskFormData } from '../../@types/task';
import { nanoid } from 'nanoid';
import TaskList from '../../components/TaskList/TaskList';

export default function TodoList() {

  const [innerTasks, setInnerTasks] = useState<Task[]>([])

  const handleTaskSubmit = (data: TaskFormData) => {
    const task = {
      ...data,
      id: nanoid(10),
      isDone: false
    };

    setInnerTasks(oldTasks => [...oldTasks, task]);
  } 

  return (
    <>
      <h1>Todo List</h1>

      <h2>Formulaire</h2>
      <TaskForm onTaskSubmit={handleTaskSubmit} />

      <h2>La liste des tâches</h2>
      <TaskList tasks={innerTasks} />
    </>
  );
}