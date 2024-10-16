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

  const handleTerminated = (id: string) => {

    // setInnerTasks(oldTasks => {
    //   const copy = structuredClone(oldTasks);

    //   const target = copy.find(task => task.id === id);
    //   if(target) {
    //     target.isDone = true;
    //   }

    //   return copy;
    // });

    setInnerTasks(oldTasks => oldTasks.map(task => (task.id !== id) ? task : {...task, isDone: true}));
  };
  
  const handleDeleted = (id: string) => {

    // setInnerTasks(oldTasks => {
    //   const copy = structuredClone(oldTasks);

    //   const idx = copy.findIndex(t => t.id === id);
    //   copy.splice(idx, 1);

    //   return copy;
    // });

    setInnerTasks(oldTasks => oldTasks.filter(t => t.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>

      <h2>Formulaire</h2>
      <TaskForm onTaskSubmit={handleTaskSubmit} />

      <h2>La liste des tâches</h2>
      <TaskList 
        tasks={innerTasks}
        onTerminated={handleTerminated}
        onDeleted={handleDeleted}  
      />
    </>
  );
}