import './App.css'
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import TodoList from './containers/TodoList/TodoList';

function App() {

  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  )
}

export default App;