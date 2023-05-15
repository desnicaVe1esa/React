import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(
    () =>
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json()) //  Возвращение промиса, получение данных
        .then((json) => setTodo(json)), // Возвращение промиса, указыванием, какую callBack функцию выполнять в случае успешной конвертации ответа в json
    []
  );
  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
