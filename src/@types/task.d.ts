export type Task = {
  id: string;
  name: string;
  desc?: string;
  priority: 'low' | 'normal' | 'urgent';
  isDone: boolean;
};

export type TaskFormData = Omit<Task, 'id' | 'isDone'>;

//! ↓ Rappel TypeScript
//
// export type Test1 = Pick<Task, 'id' | 'isDone'>
//
// export type Test2 = Task & {
//   pierre: boolean
// };