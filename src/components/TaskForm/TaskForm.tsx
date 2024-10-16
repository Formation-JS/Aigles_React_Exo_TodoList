import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { TaskFormData } from '../../@types/task';
import style from './TaskForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//! Librairie ajouter pour la gestion du formulaire
// pnpm i react-hook-form @hookform/resolvers yup

//! Définir le schema de validation des données (via Yup)
const schema: yup.ObjectSchema<TaskFormData> = yup.object().shape({
  name: yup.string()
    .required('Un nom est requis')
    .min(5, 'Minimum 5 caracteres')
    .max(50, 'Maximum 50 caracteres'),
  desc: yup.string()
    .optional(),
  priority: yup.string<'low' | 'normal' | 'urgent'>()
    .required()
});

//! Définition du types des props du composant
type TaskFormProps = {
  onTaskSubmit?: (data: TaskFormData) => void;
};

//! Le composant
export default function TaskForm({
  onTaskSubmit = () => { } //No-op
}: TaskFormProps) {

  const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm<TaskFormData>({
    defaultValues: { name: '', desc: '', priority: 'normal' },
    resolver: yupResolver(schema)
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
    <form className={style['task-form']} onSubmit={handleSubmit(handleTaskSubmit)}>
      <div>
        <label htmlFor={inputId + 'name'}>Nom : </label>
        <input type="text" id={inputId + 'name'}  {...register('name')} />
      </div>
      {errors.name && (
        <p className={style['error']}>{errors.name?.message}</p>
      )}
      <div>
        <label htmlFor={inputId + 'desc'}>Desc : </label>
        <textarea id={inputId + 'desc'} {...register('desc')} />
      </div>
      {errors.desc && (
        <p className={style['error']}>{errors.desc?.message}</p>
      )}
      <div>
        <label htmlFor={inputId + 'prio'}>Priorité : </label>
        <select id={inputId + 'prio'} {...register('priority')}>
          <option value='low'>Basse</option>
          <option value='normal'>Normal</option>
          <option value='urgent'>Urgent</option>
        </select>
      </div>
      {errors.desc && (
        <p className={style['error']}>{errors.desc?.message}</p>
      )}
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}