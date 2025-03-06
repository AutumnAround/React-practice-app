import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";

function About() {
  return <h2>О нас: Это тестовый проект на React!</h2>;
}

function NotFound() {
  return <h2>404 - Страница не найдена</h2>;
}

export default function AppRouter() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
