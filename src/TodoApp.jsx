import { useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? 'Cargando...' : 'Cargado.'}</h4>
      <pre>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
              {todo.title}
            </li>
          ))}
        </ul>
      </pre>
      <button>Next Todo</button>
    </>
  );
};
