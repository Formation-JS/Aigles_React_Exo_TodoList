import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { TaskFormData } from '../../@types/task';

//! Librairie ajouter pour la gestion du formulaire
// pnpm i react-hook-form @hookform/resolvers yup

//! Définition du types des props du composant
type TaskFormProps = {
  onTaskSubmit?: (data: TaskFormData) => void
};

//! Le composant
export default function TaskForm({ 
  onTaskSubmit = () => {} //No-op
} : TaskFormProps) {

  const { register, handleSubmit, reset, setFocus } = useForm<TaskFormData>({
    defaultValues: { name: '', desc: '', priority: 'normal' }
  });

  const inputId = useId();

  const handleTaskSubmit = (data: TaskFormData) => {
    // Envoi des données vers le composant parent
    onTaskSubmit(data);
    
    // Gestion du focus
    setFocus('name');
    
    // Reset le formulaire
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleTaskSubmit)}>
      <div>
        <label htmlFor={inputId + 'name'}>Nom : </label>
        <input type="text" id={inputId + 'name'}  {...register('name')} />
      </div>
      <div>
        <label htmlFor={inputId + 'desc'}>Desc : </label>
        <textarea id={inputId + 'desc'} {...register('desc')} />
      </div>
      <div>
        <label htmlFor={inputId + 'prio'}>Priorité : </label>
        <select id={inputId + 'prio'} {...register('priority')}>
          <option value='low'>Basse</option>
          <option value='normal'>Normal</option>
          <option value='urgent'>Urgent</option>
        </select>
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}