import style from './Header.module.css';

export default function Header() {

  return (
    <header className={style['header']}>
      <p>Exo React - <span className={style['company']}>Aigles</span></p>
    </header>
  );
}
