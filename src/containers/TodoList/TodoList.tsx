import TaskForm from '../../components/TaskForm/TaskForm';

export default function TodoList() {

  return (
    <>
      <h1>Todo List</h1>

      <h2>Formulaire</h2>
      <TaskForm />

      <h2>La liste des tâches</h2>
      {/* Faire la liste */}
    </>
  );
}