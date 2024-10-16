import clsx from 'clsx';
import { Task } from '../../@types/task';
import style from './TaskList.module.css';

//! Composant pour la liste des tâches
export type TaskListProps = {
  tasks: Task[];
  onDeleted: (id: string) => void;
  onTerminated: (id: string) => void;
}

export default function TaskList({ 
  tasks, onTerminated, onDeleted
} : TaskListProps) {

  return (
    <div className={style['task-list']}>
      {tasks.map(
        task => <TaskListItem 
                  key={task.id} {...task}
                  onTaskTerminated={onTerminated}
                  onTaskDeleted={onDeleted} 
                />
      )}
    </div>
  );
};

//! Composant pour une tâche
type TaskListItemProps = Task & {
  onTaskDeleted : (id: string) => void,
  onTaskTerminated: (id: string) => void
};

function TaskListItem({
  id, name, desc, priority, isDone,
  onTaskDeleted, onTaskTerminated
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
        <button
          disabled={isDone}
          onClick={() => onTaskTerminated(id)}
        >Terminer</button>
        <button onClick={() => onTaskDeleted(id)} >Supprimer</button>
      </div>
    </div>
  )
}