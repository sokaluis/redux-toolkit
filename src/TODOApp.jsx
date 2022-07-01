import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/query";

const TODOApp = () => {
  const [counter, setCounter] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(counter);

  const nextTodo = () => {
    setCounter((prevState) => prevState + 1);
  };
  const prevTodo = () => {
    if (counter === 1) return;
    setCounter((prevState) => prevState - 1);
  };

  return (
    <>
      <h1>TODO's - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo, null, 3)}</pre>
      <button disabled={isLoading} onClick={prevTodo}>
        Prev TODO
      </button>
      <button disabled={isLoading} onClick={nextTodo}>
        Next TODO
      </button>
      {/* <ul>
        {todos.map(({ title, id, completed }) => (
          <li key={id}>
            <strong>{completed ? "DONE " : "pending "}</strong>
            {title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default TODOApp;
