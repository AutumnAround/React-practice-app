import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [title, setTitle] = useState("Мой крутой React-сайт!");
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [posts, setPosts] = useState([]); // Данные с API

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <Header title={title} />
      <p>Добро пожаловать в мой React-проект!</p>

      <button onClick={() => setTitle("React – это просто!")}>
        Изменить заголовок
      </button>

      <h2>Список задач</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите задачу..."
      />
      <button onClick={addTask}>Добавить</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <h2>Посты с сервера</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <Footer year={2025} />
    </div>
  );
}

export default App;
