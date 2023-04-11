import { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis/todosApis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading... {JSON.stringify(isLoading)}</h4>
      <pre style={{ textAlign: "start" }}>{JSON.stringify(todo, null, 3)}</pre>

      <button onClick={prevTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {todos?.map((todo) => (
          <li
            key={todo.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>{todo.title}</div>
            <div>
              <strong>{todo.completed ? "Done" : "Pending"}</strong>
              </div>
              </li>
              ))}
      </ul> */}
    </>
  );
};
