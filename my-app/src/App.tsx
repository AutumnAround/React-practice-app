import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [title, setTitle] = useState("Мой крутой React-сайт!"); //Динамический заголовок

  return (
    <div>
      <Header title={title} />  {/* Заголовок из состояния */}

      <p>Добро пожаловать в мой React-проект!</p>

      {/* Кнопка, меняющая заголовок */}
      <button onClick={() => setTitle("React – это просто!")}>
        Изменить заголовок
      </button>

      <Footer year={2025} />
    </div>
  );
}

export default App;
