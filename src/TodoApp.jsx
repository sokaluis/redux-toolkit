import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = {}, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodoId = () => {
    setTodoId(todoId + 1);
  };

  const prevTodoId = () => {
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? 'Cargando...' : 'Cargado.'}</h4>
      <button disabled={isLoading} onClick={() => prevTodoId()}>
        Prev Todo
      </button>
      <button disabled={isLoading} onClick={() => nextTodoId()}>
        Next Todo
      </button>
      <pre>{JSON.stringify(todo, 1, 1)}</pre>
      {/* <pre>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
              {todo.title}
            </li>
          ))}
        </ul>
      </pre> */}
    </>
  );
};
