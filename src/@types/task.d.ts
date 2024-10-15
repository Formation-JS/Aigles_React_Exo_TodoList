export type Task = {
  id: string;
  name: string;
  desc?: string;
  priority: 'low' | 'normal' | 'urgent';
  isDone: boolean;
}; 