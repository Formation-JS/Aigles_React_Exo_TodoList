import clsx from 'clsx';
import { Task } from '../../@types/task';
import style from './TaskList.module.css';

//! Composant pour la liste des tâches
export type TaskListProps = {
  tasks: Task[]
}

export default function TaskList({ 
  tasks
} : TaskListProps) {

  return (
    <div className={style['task-list']}>
      {tasks.map(
        task => <TaskListItem key={task.id} {...task} />
      )}
    </div>
  );
};

//! Composant pour une tâche
type TaskListItemProps = Task & { };

function TaskListItem({
  id, name, desc, priority, isDone
} : TaskListItemProps) {

  // const classNameTask = `${style['task-item']} ${isDone ? style['task-done'] : ''}`;
  const classNameTask = clsx(
    style['task-item'], 
    isDone && style['task-done']
  );

  return (
    <div className={classNameTask}>
      <p>{name} {priority === 'urgent' && <span>(Urgent)</span>}</p>
      {desc && (
        <p>{desc}</p>
      )}
      <div>
        <button disabled={isDone}>Terminer</button>
        <button>Supprimer</button>
      </div>
    </div>
  )
}