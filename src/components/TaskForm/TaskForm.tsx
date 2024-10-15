import { useId } from 'react';
import { useForm } from 'react-hook-form';

// pnpm i react-hook-form @hookform/resolvers yup
export default function TaskForm() {

  const { register, handleSubmit } = useForm();
  const inputId = useId();

  const handleTaskSubmit = (data: any) => {

  }

  return (
    <form onSubmit={handleSubmit(handleTaskSubmit)}>
      <div>
        <label htmlFor={inputId+'name'}>Nom : </label>
        <input type="text" id={inputId+'name'} />
      </div>
      <div>
        <label htmlFor={inputId + 'desc'}>Desc : </label>
        <textarea id={inputId + 'desc'} />
      </div>
      <div>
        <label htmlFor={inputId + 'prio'}>Priorité : </label>
        <select id={inputId + 'prio'}>
          <option value="">Basse</option>
          <option value="">Normal</option>
          <option value="">Urgent</option>
        </select>
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}